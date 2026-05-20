"use client";

import { useState, useEffect } from "react";
import { 
  Activity, 
  Globe, 
  Cpu, 
  Smartphone, 
  LogOut, 
  ShieldAlert, 
  KeyRound, 
  User, 
  Plus, 
  Edit, 
  Trash2, 
  ArrowLeft, 
  RefreshCw, 
  CheckCircle, 
  Database,
  Lock
} from "lucide-react";
import { supabase, Profile, Project, getProfile, updateProfile, getProjects, upsertProject, deleteProject } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";

export default function AdminPage() {
  // Authentication states
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  // Workspace states
  const [activeTab, setActiveTab] = useState<"profile" | "projects">("profile");
  const [loadingData, setLoadingData] = useState(false);
  const [profileForm, setProfileForm] = useState<Profile>({
    name: "",
    role: "",
    tagline: "",
    bio: "",
    email: "",
    whatsapp: "",
    location: "",
    status: "ONLINE",
    operator_code: "",
    cognition_status: "",
    duty_status: ""
  });

  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [projectForm, setProjectForm] = useState<Project>({
    id: "",
    title: "",
    category: "Web App",
    type: "WEB_APP",
    version: "v1.0.0",
    uptime: "99.9%",
    description: "",
    tech: [],
    color: "#00F5FF",
    icon_name: "Activity",
    live_url: "",
    github_url: ""
  });
  const [techInput, setTechInput] = useState("");

  // Notification states
  const [notify, setNotify] = useState<{ message: string; type: "success" | "error" } | null>(null);

  // Load Auth Session
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Fetch portfolio data from database when session is active
  useEffect(() => {
    if (session) {
      loadData();
    }
  }, [session]);

  const loadData = async () => {
    setLoadingData(true);
    const prof = await getProfile();
    if (prof) setProfileForm(prof);

    const projs = await getProjects();
    if (projs) setProjectsList(projs);
    setLoadingData(false);
  };

  const showNotification = (message: string, type: "success" | "error" = "success") => {
    setNotify({ message, type });
    setTimeout(() => setNotify(null), 4000);
  };

  // Handle Login Protocol
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginSubmitting(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      });

      if (error) {
        setLoginError(error.message);
      } else {
        setSession(data.session);
        showNotification("Security handshake successful. Authorization granted.");
      }
    } catch (err: any) {
      setLoginError("An unexpected error occurred during login.");
    } finally {
      setLoginSubmitting(false);
    }
  };

  // Handle Logout Protocol
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    showNotification("Credentials cleared. Connection terminated.", "success");
  };

  // Handle Profile Update Commit
  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingData(true);
    const success = await updateProfile(profileForm);
    setLoadingData(false);

    if (success) {
      showNotification("Dossier updates successfully committed to core database.");
    } else {
      showNotification("Failed to write dossier updates. Check credentials.", "error");
    }
  };

  // Open Project Modal
  const openProjectModal = (mode: "add" | "edit", project?: Project) => {
    setModalMode(mode);
    if (mode === "edit" && project) {
      setProjectForm(project);
      setTechInput(project.tech.join(", "));
    } else {
      setProjectForm({
        id: `PRJ-${String(projectsList.length + 1).padStart(3, "0")}`,
        title: "",
        category: "Web App",
        type: "WEB_APP",
        version: "v1.0.0",
        uptime: "99.9%",
        description: "",
        tech: [],
        color: "#00F5FF",
        icon_name: "Activity",
        live_url: "",
        github_url: ""
      });
      setTechInput("");
    }
    setIsModalOpen(true);
  };

  // Handle Project Add/Update Commit
  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse technologies list
    const parsedTechs = techInput
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const updatedProject = {
      ...projectForm,
      tech: parsedTechs
    };

    setLoadingData(true);
    const success = await upsertProject(updatedProject);
    setLoadingData(false);

    if (success) {
      setIsModalOpen(false);
      showNotification(`Module ${projectForm.id} successfully updated.`);
      loadData();
    } else {
      showNotification("Failed to upsert project parameters.", "error");
    }
  };

  // Handle Project Deletion
  const handleProjectDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to terminate Project Module: ${id}?`)) return;

    setLoadingData(true);
    const success = await deleteProject(id);
    setLoadingData(false);

    if (success) {
      showNotification(`Module ${id} successfully deleted.`);
      loadData();
    } else {
      showNotification("Failed to delete project from remote tables.", "error");
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#070b14] flex items-center justify-center flex-col gap-4">
        <RefreshCw className="w-8 h-8 text-neon-cyan animate-spin" />
        <span className="font-mono text-neon-cyan text-xs tracking-widest uppercase">Validating Security Tokens...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b14] text-white pt-24 pb-12 font-space relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-30 pointer-events-none" />

      {/* Global Notifications */}
      <AnimatePresence>
        {notify && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 border rounded-xl shadow-lg font-mono text-sm max-w-md w-full ${
              notify.type === "success" 
                ? "bg-[#081e1a] border-neon-cyan text-neon-cyan shadow-neon-cyan/10" 
                : "bg-[#251017] border-pink-glow text-pink-glow shadow-pink-glow/10"
            }`}
          >
            {notify.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <ShieldAlert className="w-5 h-5 flex-shrink-0" />}
            <span>{notify.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* LOGGED OUT PORTAL */}
        {!session ? (
          <div className="max-w-md mx-auto my-12">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 bg-neon-cyan/10 border border-neon-cyan/20 rounded-2xl text-neon-cyan mb-4 shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
                Auth Gateway
              </h1>
              <p className="text-text-secondary text-sm font-mono mt-2 uppercase tracking-wider">
                Authorized Personnel Access Only
              </p>
            </div>

            <GlassCard className="p-8">
              <form onSubmit={handleLogin} className="space-y-6">
                {loginError && (
                  <div className="p-4 bg-pink-glow/15 border border-pink-glow/30 rounded-xl flex items-center gap-3 text-pink-glow text-xs font-mono">
                    <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Email Address</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="email"
                      required
                      placeholder="operator@ajwad.dev"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white font-mono text-sm focus:outline-none focus:border-neon-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Security Phrase</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white font-mono text-sm focus:outline-none focus:border-neon-cyan/50 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loginSubmitting}
                  className="w-full relative group cursor-pointer border border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/10 text-neon-cyan font-bold tracking-widest uppercase font-mono py-4 rounded-xl shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all flex items-center justify-center gap-2"
                >
                  {loginSubmitting ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>AUTHENTICATE</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
            
            <div className="text-center mt-6">
              <a href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono transition-colors uppercase">
                <ArrowLeft className="w-4 h-4" /> Return to Main Node
              </a>
            </div>
          </div>
        ) : (
          
          /* LOGGED IN WORKSPACE */
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/5 pb-6">
              <div>
                <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs tracking-wider uppercase mb-1">
                  <Database className="w-4 h-4 animate-pulse" />
                  <span>Secure DB Connection Active</span>
                </div>
                <h1 className="text-3xl font-bold uppercase tracking-wider">
                  Admin Control Panel
                </h1>
                <p className="text-text-secondary text-sm font-mono mt-1">
                  Identity: <span className="text-white/80">{session.user.email}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="/" className="px-4 py-2 border border-white/10 rounded-xl font-mono text-xs hover:bg-white/5 hover:text-white text-white/70 transition-colors uppercase flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Portfolio Node
                </a>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-pink-glow/30 text-pink-glow hover:bg-pink-glow/15 hover:border-pink-glow rounded-xl font-mono text-xs transition-all uppercase flex items-center gap-2 cursor-pointer shadow-[0_0_10px_rgba(255,77,157,0.05)]"
                >
                  <LogOut className="w-4 h-4" /> Disconnect
                </button>
              </div>
            </div>

            {/* Panel Tabs */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 px-6 border-b-2 font-mono text-sm tracking-widest uppercase transition-all cursor-pointer ${
                  activeTab === "profile" 
                    ? "border-neon-cyan text-neon-cyan bg-neon-cyan/5 font-bold" 
                    : "border-transparent text-text-secondary hover:text-white"
                }`}
              >
                [PROFILE_DOSSIER]
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`py-4 px-6 border-b-2 font-mono text-sm tracking-widest uppercase transition-all cursor-pointer ${
                  activeTab === "projects" 
                    ? "border-neon-cyan text-neon-cyan bg-neon-cyan/5 font-bold" 
                    : "border-transparent text-text-secondary hover:text-white"
                }`}
              >
                [PROJECTS_REGISTRY]
              </button>
            </div>

            {/* TAB 1: PROFILE DOSSIER */}
            {activeTab === "profile" && (
              <GlassCard className="p-8">
                <form onSubmit={handleProfileSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Operator Name</label>
                      <input
                        type="text"
                        required
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Operator Role / Subtitle</label>
                      <input
                        type="text"
                        required
                        value={profileForm.role}
                        onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Hero Tagline</label>
                    <input
                      type="text"
                      required
                      value={profileForm.tagline}
                      onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                      className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Hero Biography Description</label>
                    <textarea
                      required
                      rows={4}
                      value={profileForm.bio}
                      onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                      className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-sans"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Communications Email</label>
                      <input
                        type="email"
                        required
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">WhatsApp / Telegram Number</label>
                      <input
                        type="text"
                        required
                        value={profileForm.whatsapp}
                        onChange={(e) => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Physical Sector / Location</label>
                      <input
                        type="text"
                        required
                        value={profileForm.location}
                        onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Live Telemetry Status</label>
                      <select
                        value={profileForm.status}
                        onChange={(e: any) => setProfileForm({ ...profileForm, status: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                      >
                        <option value="ONLINE">ONLINE (Pulse Green)</option>
                        <option value="OFFLINE">OFFLINE (Pulse Red)</option>
                        <option value="AWAY">AWAY (Pulse Yellow)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Operator Code</label>
                      <input
                        type="text"
                        value={profileForm.operator_code || ""}
                        onChange={(e) => setProfileForm({ ...profileForm, operator_code: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                        placeholder="AJWAD // STABLE"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Cognition Status</label>
                      <input
                        type="text"
                        value={profileForm.cognition_status || ""}
                        onChange={(e) => setProfileForm({ ...profileForm, cognition_status: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                        placeholder="OPTIMAL // COGNITIVE_OK"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Duty Status</label>
                      <input
                        type="text"
                        value={profileForm.duty_status || ""}
                        onChange={(e) => setProfileForm({ ...profileForm, duty_status: e.target.value })}
                        className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                        placeholder="ACTIVE_DUTY"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={loadingData}
                      className="px-6 py-3 border border-neon-cyan/50 hover:border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold font-mono tracking-widest uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(0,245,255,0.05)]"
                    >
                      {loadingData ? <RefreshCw className="w-5 h-5 animate-spin" /> : <span>COMMIT_PROFILE_UPDATES</span>}
                    </button>
                  </div>
                </form>
              </GlassCard>
            )}

            {/* TAB 2: PROJECTS REGISTRY */}
            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center gap-4">
                  <h3 className="font-mono text-neon-cyan text-sm tracking-wider uppercase flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    <span>Registered Satellites: {projectsList.length}</span>
                  </h3>
                  <button
                    onClick={() => openProjectModal("add")}
                    className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/20 hover:border-neon-cyan rounded-xl font-mono text-xs tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(0,245,255,0.1)]"
                  >
                    <Plus className="w-4 h-4" /> REGISTER_NEW_MODULE
                  </button>
                </div>

                {loadingData && projectsList.length === 0 ? (
                  <div className="flex justify-center items-center py-12 flex-col gap-3">
                    <RefreshCw className="w-6 h-6 text-neon-cyan animate-spin" />
                    <span className="font-mono text-xs text-white/50 tracking-wider">RESOLVING MODULE REGISTRY...</span>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {projectsList.map((project) => (
                      <GlassCard key={project.id} className="p-6 relative group overflow-hidden border border-white/5 hover:border-white/10">
                        {/* Glowing left line */}
                        <div 
                          className="absolute left-0 inset-y-0 w-1" 
                          style={{ backgroundColor: project.color }}
                        />
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-white/70 flex-shrink-0" style={{ color: project.color }}>
                              {project.icon_name === "Activity" && <Activity className="w-6 h-6" />}
                              {project.icon_name === "Globe" && <Globe className="w-6 h-6" />}
                              {project.icon_name === "Cpu" && <Cpu className="w-6 h-6" />}
                              {project.icon_name === "Smartphone" && <Smartphone className="w-6 h-6" />}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-mono text-xs bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white/60">{project.id}</span>
                                <span className="text-xs uppercase font-mono tracking-wider font-bold" style={{ color: project.color }}>{project.type}</span>
                                <span className="text-[10px] text-white/40 font-mono">Uptime: {project.uptime}</span>
                              </div>
                              <h4 className="text-lg font-bold text-white mt-1">{project.title}</h4>
                              <p className="text-white/60 text-sm mt-1 max-w-xl truncate">{project.description}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => openProjectModal("edit", project)}
                              className="p-2 border border-white/10 text-white/70 hover:text-neon-cyan hover:border-neon-cyan/50 rounded-xl transition-all cursor-pointer hover:bg-neon-cyan/5"
                              title="Edit Module Parameters"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleProjectDelete(project.id)}
                              className="p-2 border border-white/10 text-white/70 hover:text-pink-glow hover:border-pink-glow/50 rounded-xl transition-all cursor-pointer hover:bg-pink-glow/5"
                              title="Terminate Module"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </GlassCard>
                    ))}

                    {projectsList.length === 0 && (
                      <div className="p-8 border border-white/10 border-dashed rounded-2xl text-center text-white/40 font-mono text-sm uppercase">
                        No modules currently initialized. Core databases are empty.
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* EXPANDED PROJECT ADD/EDIT MODAL */}
            <AnimatePresence>
              {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                  {/* Backdrop */}
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }} 
                    className="fixed inset-0 bg-[#04060b]/90 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                  />

                  {/* Modal Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-[#080c16] border border-white/10 rounded-2xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
                  >
                    {/* Glow Accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl pointer-events-none" />
                    
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                      <div>
                        <span className="font-mono text-xs text-neon-cyan tracking-widest uppercase block mb-1">
                          {modalMode === "add" ? "MODULE REGISTER PROTOCOL" : "MODULE CONFIG EDIT"}
                        </span>
                        <h3 className="text-xl font-bold uppercase">
                          {modalMode === "add" ? "Register Project Module" : `Modify Module: ${projectForm.id}`}
                        </h3>
                      </div>
                      <button 
                        onClick={() => setIsModalOpen(false)}
                        className="text-white/50 hover:text-white p-2 border border-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <form onSubmit={handleProjectSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Module ID</label>
                          <input
                            type="text"
                            required
                            disabled={modalMode === "edit"}
                            value={projectForm.id}
                            onChange={(e) => setProjectForm({ ...projectForm, id: e.target.value.toUpperCase() })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono disabled:opacity-50"
                            placeholder="PRJ-005"
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Module Title</label>
                          <input
                            type="text"
                            required
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                            placeholder="e.g. HyperDrive Sync"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Category Label</label>
                          <input
                            type="text"
                            required
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                            placeholder="e.g. Web App"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Type Tag</label>
                          <input
                            type="text"
                            required
                            value={projectForm.type}
                            onChange={(e) => setProjectForm({ ...projectForm, type: e.target.value.toUpperCase() })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                            placeholder="e.g. WEB_APP"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Version Code</label>
                          <input
                            type="text"
                            required
                            value={projectForm.version}
                            onChange={(e) => setProjectForm({ ...projectForm, version: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                            placeholder="v1.0.0"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Uptime Rating</label>
                          <input
                            type="text"
                            required
                            value={projectForm.uptime}
                            onChange={(e) => setProjectForm({ ...projectForm, uptime: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                            placeholder="99.9%"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Accent Glow Color</label>
                          <div className="flex gap-2">
                            <input
                              type="color"
                              value={projectForm.color}
                              onChange={(e) => setProjectForm({ ...projectForm, color: e.target.value })}
                              className="h-11 w-12 bg-transparent border-0 cursor-pointer rounded overflow-hidden flex-shrink-0"
                            />
                            <input
                              type="text"
                              required
                              value={projectForm.color}
                              onChange={(e) => setProjectForm({ ...projectForm, color: e.target.value })}
                              className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono text-center"
                              placeholder="#00F5FF"
                            />
                          </div>
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Category Icon</label>
                          <select
                            value={projectForm.icon_name}
                            onChange={(e) => setProjectForm({ ...projectForm, icon_name: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                          >
                            <option value="Activity">Activity (Pulse/Analytics)</option>
                            <option value="Globe">Globe (Web/Platform)</option>
                            <option value="Cpu">Cpu (System/API)</option>
                            <option value="Smartphone">Smartphone (Mobile)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Module Description</label>
                        <textarea
                          required
                          rows={3}
                          value={projectForm.description}
                          onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                          className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-sans"
                          placeholder="Brief summary of the module's functional capabilities..."
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Technology Stack (Comma-separated)</label>
                        <input
                          type="text"
                          required
                          value={techInput}
                          onChange={(e) => setTechInput(e.target.value)}
                          className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                          placeholder="React, Next.js, Framer Motion, Supabase"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Live Access Endpoint</label>
                          <input
                            type="url"
                            value={projectForm.live_url || ""}
                            onChange={(e) => setProjectForm({ ...projectForm, live_url: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                            placeholder="https://example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-mono text-neon-cyan tracking-widest uppercase block">Source Repository Link</label>
                          <input
                            type="url"
                            value={projectForm.github_url || ""}
                            onChange={(e) => setProjectForm({ ...projectForm, github_url: e.target.value })}
                            className="w-full bg-[#070b14] border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-neon-cyan/50 font-mono"
                            placeholder="https://github.com/..."
                          />
                        </div>
                      </div>

                      {/* Modal Footer Buttons */}
                      <div className="flex justify-end gap-3 border-t border-white/5 pt-6 mt-6">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="px-4 py-2 border border-white/10 rounded-xl font-mono text-xs hover:bg-white/5 text-white/80 transition-colors uppercase cursor-pointer"
                        >
                          ABORT_CHANGES
                        </button>
                        <button
                          type="submit"
                          disabled={loadingData}
                          className="px-4 py-2 bg-neon-cyan/15 border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/35 hover:border-neon-cyan rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(0,245,255,0.05)]"
                        >
                          {loadingData ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>COMMIT_MODULE</span>}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

          </div>
        )}

      </div>
    </div>
  );
}
