/*
  # Fix Contact Submissions RLS Policies

  This migration resets and fixes the RLS policies for the contact_submissions table
  to ensure anonymous users can submit the contact form from any domain.

  ## Changes Made
  
  1. Security Updates
    - Drop existing RLS policies
    - Recreate INSERT policy for anonymous (anon) and authenticated users
    - Recreate SELECT policy for authenticated users only
    - Grant explicit usage permissions to anon role
    - Ensure table permissions are correctly set

  2. Important Notes
    - The INSERT policy uses `WITH CHECK (true)` which allows any anonymous user to insert
    - No domain restrictions - works from any origin
    - The table has RLS enabled which protects the data by default
    - Only authenticated users can view submissions (admin access)
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view all submissions" ON contact_submissions;

-- Ensure RLS is enabled
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON contact_submissions TO authenticated;

-- Create policy for anonymous INSERT (contact form submissions)
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for authenticated SELECT (admin viewing submissions)
CREATE POLICY "Allow authenticated users to view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for authenticated UPDATE (admin updating status)
CREATE POLICY "Allow authenticated users to update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
