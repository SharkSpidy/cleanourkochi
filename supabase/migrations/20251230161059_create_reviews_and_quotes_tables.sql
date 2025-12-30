/*
  # Clean Our Kochi Database Schema

  ## Overview
  Creates tables for the Clean Our Kochi cleaning service website to store customer reviews and quote requests.

  ## New Tables

  ### `reviews`
  Stores customer reviews and ratings for the cleaning services
  - `id` (uuid, primary key) - Unique identifier for each review
  - `name` (text) - Name of the reviewer
  - `rating` (integer) - Star rating from 1-5
  - `review_text` (text) - The review message content
  - `created_at` (timestamptz) - Timestamp when review was submitted

  ### `quote_requests`
  Stores customer quote/inquiry requests
  - `id` (uuid, primary key) - Unique identifier for each request
  - `name` (text) - Customer name
  - `phone` (text) - Contact phone number
  - `email` (text) - Contact email address
  - `service_type` (text) - Type of service requested
  - `location` (text) - Service location in Kochi
  - `message` (text) - Additional requirements or message
  - `created_at` (timestamptz) - Timestamp when request was submitted
  - `status` (text) - Status of the request (default: 'pending')

  ## Security
  - Enable RLS on both tables
  - Allow public read access to approved reviews
  - Allow public insert for both reviews and quote requests
  - Restrict updates and deletes to authenticated users only

  ## Notes
  - Reviews are publicly readable to display on website
  - Quote requests are only readable by authenticated admin users
  - All submissions include timestamps for tracking
*/

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  service_type text NOT NULL,
  location text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Reviews policies: Anyone can read and insert, only authenticated users can update/delete
CREATE POLICY "Anyone can view reviews"
  ON reviews FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can update reviews"
  ON reviews FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete reviews"
  ON reviews FOR DELETE
  TO authenticated
  USING (true);

-- Quote requests policies: Only insert is public, read/update/delete require authentication
CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view quote requests"
  ON quote_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can update quote requests"
  ON quote_requests FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete quote requests"
  ON quote_requests FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS quote_requests_created_at_idx ON quote_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS quote_requests_status_idx ON quote_requests(status);