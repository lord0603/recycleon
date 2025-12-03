/*
  # Create Projects Table

  ## Overview
  This migration creates the projects table for the RECYCLEON water treatment portfolio.
  Projects showcase different water treatment implementations across various industries.

  ## New Tables
  
  ### `projects`
  Stores project information for the portfolio section.
  
  - `id` (uuid, primary key) - Unique identifier for each project
  - `title` (text, required) - Project name/title
  - `description` (text, required) - Detailed project description
  - `category` (text, required) - Project category/type (Industrial, Municipal, Research, Agricultural)
  - `location` (text, required) - Geographic location of the project
  - `completion_year` (integer, required) - Year the project was completed
  - `image_url` (text, optional) - URL to project image from Pexels
  - `capacity` (text, optional) - Treatment capacity (e.g., "50,000 L/day")
  - `tags` (text[], optional) - Array of technology/feature tags
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Record update timestamp

  ## Security
  
  - Enable RLS on `projects` table
  - Add policy for public read access (projects are publicly viewable on the website)
  - Add policy for authenticated users to insert/update/delete (for admin management)

  ## Indexes
  
  - Index on `category` for efficient filtering
  - Index on `completion_year` for sorting

  ## Important Notes
  
  1. Projects are publicly readable but only authenticated users can modify
  2. Categories are: 'Industrial', 'Municipal', 'Research', 'Agricultural'
  3. Tags array supports multiple technology identifiers per project
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  location text NOT NULL,
  completion_year integer NOT NULL,
  image_url text,
  capacity text,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS projects_category_idx ON projects(category);
CREATE INDEX IF NOT EXISTS projects_completion_year_idx ON projects(completion_year DESC);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access (anyone can view projects)
CREATE POLICY "Projects are publicly readable"
  ON projects
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow authenticated users to insert projects
CREATE POLICY "Authenticated users can insert projects"
  ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to update projects
CREATE POLICY "Authenticated users can update projects"
  ON projects
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Allow authenticated users to delete projects
CREATE POLICY "Authenticated users can delete projects"
  ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Add comment to table
COMMENT ON TABLE projects IS 'Water treatment project portfolio showcasing RECYCLEON implementations';
