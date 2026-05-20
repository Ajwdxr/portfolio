import { createClient } from "@supabase/supabase-js";

// TypeScript schemas
export interface Profile {
  id?: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  whatsapp: string;
  location: string;
  status: "ONLINE" | "OFFLINE" | "AWAY";
  operator_code?: string;
  cognition_status?: string;
  duty_status?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  version: string;
  uptime: string;
  description: string;
  tech: string[];
  color: string;
  icon_name: string;
  live_url?: string | null;
  github_url?: string | null;
}

// Use placeholder keys if environment variables are not yet provided
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ==========================================
// PROFILE DATA CRUD HELPERS
// ==========================================

export async function getProfile(): Promise<Profile | null> {
  try {
    // Return null if placeholders are in place to bypass requests
    if (supabaseUrl.includes("placeholder-project")) return null;

    const { data, error } = await supabase
      .from("profile")
      .select("*")
      .eq("id", "primary")
      .maybeSingle();

    if (error) {
      console.warn("Supabase profile fetch failed:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Error fetching profile from Supabase:", err);
    return null;
  }
}

export async function updateProfile(profile: Partial<Profile>): Promise<boolean> {
  try {
    if (supabaseUrl.includes("placeholder-project")) return false;

    const { error } = await supabase
      .from("profile")
      .update(profile)
      .eq("id", "primary");

    if (error) {
      console.error("Supabase profile update failed:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error updating profile in Supabase:", err);
    return false;
  }
}

// ==========================================
// PROJECTS DATA CRUD HELPERS
// ==========================================

export async function getProjects(): Promise<Project[] | null> {
  try {
    if (supabaseUrl.includes("placeholder-project")) return null;

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.warn("Supabase projects fetch failed:", error.message);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Error fetching projects from Supabase:", err);
    return null;
  }
}

export async function upsertProject(project: Project): Promise<boolean> {
  try {
    if (supabaseUrl.includes("placeholder-project")) return false;

    const { error } = await supabase
      .from("projects")
      .upsert(project);

    if (error) {
      console.error("Supabase project upsert failed:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error upserting project in Supabase:", err);
    return false;
  }
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    if (supabaseUrl.includes("placeholder-project")) return false;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase project deletion failed:", error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error deleting project in Supabase:", err);
    return false;
  }
}
