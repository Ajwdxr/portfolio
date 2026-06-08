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
    'ajwadxara99@gmail.com',
    '+60 11-1063 8176',
    'Alor Setar, Kedah',
    'ONLINE'
) ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    whatsapp = EXCLUDED.whatsapp,
    location = EXCLUDED.location;

-- 8. Insert Initial Seed Data for Projects
INSERT INTO projects (id, title, category, type, version, uptime, description, tech, color, icon_name, live_url, github_url)
VALUES 
(
    'PRJ-001',
    'BellyBeats',
    'Mobile App',
    'PWA // MOBILE_APP',
    'v1.2.0',
    '99.99%',
    'A premium glassmorphism baby kick tracker for soon-to-be parents, featuring real-time logging, smart insights, and offline support.',
    ARRAY['Next.js', 'PWA', 'Tailwind CSS', 'Framer Motion'],
    '#FF2D55',
    'Activity',
    'https://bellybeats.ajwdxr.com',
    NULL
),
(
    'PRJ-002',
    'AttendX',
    'Mobile App',
    'PWA // WEB_APP',
    'v1.0.0',
    '100.0%',
    'Smart attendance tracking platform with facial recognition, geolocation check-ins, real-time analytics, and smooth iOS-style transitions.',
    ARRAY['Next.js', 'Tailwind CSS', 'Face Recognition', 'Geolocation', 'PWA'],
    '#007AFF',
    'Smartphone',
    'https://attendx.ajwdxr.com',
    NULL
),
(
    'PRJ-003',
    'PromptMatrix',
    'Web App',
    'AI_PLATFORM',
    'v2.1.0',
    '99.95%',
    'Next generation AI prompt architect and optimizer, designed to elevate ideas into structured, high-fidelity prompts for LLMs.',
    ARRAY['Next.js', 'LLM API', 'Tailwind CSS', 'CRT Shader'],
    '#39FF14',
    'Cpu',
    'https://promptmatrix.ajwdxr.com',
    NULL
),
(
    'PRJ-004',
    'KafeKiro',
    'Website',
    'WEBSITE',
    'v1.0.4',
    '99.9%',
    'A dark aesthetic, premium coffee shop landing page featuring handcrafted menus, cozy galleries, and custom modal transitions.',
    ARRAY['HTML', 'Vanilla CSS', 'JavaScript', 'Vite'],
    '#D97706',
    'Globe',
    'https://kafekiro.vercel.app',
    NULL
),
(
    'PRJ-005',
    'E-Masjid',
    'Web App',
    'PORTAL',
    'v1.3.1',
    '99.98%',
    'Official portal for Masjid Al Rahmah Mergong, Alor Setar. Features real-time prayer times, event announcements, a digital library, and Quran online.',
    ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'PWA'],
    '#10B981',
    'Globe',
    'https://e-masjid.taufec.workers.dev',
    NULL
),
(
    'PRJ-006',
    'Rembayung',
    'Website',
    'WEBSITE',
    'v1.1.0',
    '99.95%',
    'Authentic Kampung Cuisine restaurant landing page for Rembayung by Khairul Aming. Elegant theme selection and traditional aesthetics.',
    ARRAY['Tailwind CSS', 'JavaScript', 'PHP', 'Theme Engine'],
    '#D4AF37',
    'Globe',
    'https://ajwdxr.free.nf/rembayung/',
    NULL
) ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    category = EXCLUDED.category,
    type = EXCLUDED.type,
    version = EXCLUDED.version,
    uptime = EXCLUDED.uptime,
    description = EXCLUDED.description,
    tech = EXCLUDED.tech,
    color = EXCLUDED.color,
    icon_name = EXCLUDED.icon_name,
    live_url = EXCLUDED.live_url,
    github_url = EXCLUDED.github_url;
