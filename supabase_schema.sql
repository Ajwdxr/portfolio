-- ==========================================
-- SUPABASE DATABASE SCHEMA & POLICIES
-- Paste this script inside your Supabase SQL Editor.
-- ==========================================

-- Drop existing tables if they exist
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;

-- 1. Create Profile Table (for personal details and status)
CREATE TABLE profile (
    id TEXT PRIMARY KEY DEFAULT 'primary',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    tagline TEXT NOT NULL,
    bio TEXT NOT NULL,
    email TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    location TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('ONLINE', 'OFFLINE', 'AWAY')),
    operator_code TEXT DEFAULT 'AJWAD // STABLE',
    cognition_status TEXT DEFAULT 'OPTIMAL // COGNITIVE_OK',
    duty_status TEXT DEFAULT 'ACTIVE_DUTY'
);

-- 2. Create Projects Table
CREATE TABLE projects (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    type TEXT NOT NULL,
    version TEXT NOT NULL,
    uptime TEXT NOT NULL,
    description TEXT NOT NULL,
    tech TEXT[] NOT NULL,
    color TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    live_url TEXT,
    github_url TEXT
);

-- 3. Trigger to auto-update 'updated_at' on profile changes
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profile_modtime
    BEFORE UPDATE ON profile
    FOR EACH ROW
    EXECUTE FUNCTION update_modified_column();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 5. Set up RLS Policies for Profile
CREATE POLICY "Allow public read access to profile" 
    ON profile FOR SELECT 
    USING (true);

CREATE POLICY "Allow authenticated full write access to profile" 
    ON profile FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

-- 6. Set up RLS Policies for Projects
CREATE POLICY "Allow public read access to projects" 
    ON projects FOR SELECT 
    USING (true);

CREATE POLICY "Allow authenticated full write access to projects" 
    ON projects FOR ALL 
    TO authenticated 
    USING (true) 
    WITH CHECK (true);

-- 7. Insert Initial Seed Data for Profile
INSERT INTO profile (id, name, role, tagline, bio, email, whatsapp, location, status)
VALUES (
    'primary',
    'Ajwad',
    'Full Stack Developer',
    'Building Modern Digital Experiences',
    'I specialize in creating futuristic portfolio websites, immersive web applications, and scalable systems using cutting-edge technologies.',
    'hello@developer.com',
    '+1 (555) 019-2024',
    'Cyber City, Sector 7',
    'ONLINE'
) ON CONFLICT (id) DO NOTHING;

-- 8. Insert Initial Seed Data for Projects
INSERT INTO projects (id, title, category, type, version, uptime, description, tech, color, icon_name)
VALUES 
(
    'PRJ-001',
    'NeuroNet Dashboard',
    'Web App',
    'WEB_APP',
    'v2.4.0',
    '99.99%',
    'A futuristic AI analytics dashboard with real-time data visualization and neural network monitoring capabilities.',
    ARRAY['Next.js', 'Supabase', 'Framer Motion'],
    '#00F5FF',
    'Activity'
),
(
    'PRJ-002',
    'CyberCommerce',
    'Website',
    'WEBSITE',
    'v1.2.5',
    '99.95%',
    'High-performance headless e-commerce storefront for digital assets with crypto payment integration.',
    ARRAY['React', 'Tailwind', 'Stripe'],
    '#38BDF8',
    'Globe'
),
(
    'PRJ-003',
    'Nexus Core API',
    'System',
    'SYSTEM',
    'v4.0.1',
    '99.999%',
    'Scalable microservices architecture handling thousands of concurrent connections securely.',
    ARRAY['Node.js', 'PostgreSQL', 'Docker'],
    '#F97316',
    'Cpu'
),
(
    'PRJ-004',
    'Quantum Sync',
    'Mobile App',
    'MOBILE_APP',
    'v1.0.0',
    '99.9%',
    'Cross-platform mobile application for secure encrypted messaging and quantum-safe file transfers.',
    ARRAY['Flutter', 'Firebase', 'WebRTC'],
    '#A855F7',
    'Smartphone'
) ON CONFLICT (id) DO NOTHING;
