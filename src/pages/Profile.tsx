import { useState } from "react";
import { User, Mail, Film, Tv, Star, Save } from "lucide-react";
import Layout from "@/components/Layout";
import { useAuth } from "@/context/AuthContext";

const Profile = () => {
  const { userId } = useAuth();
  const [name, setName] = useState(userId || "SpiderFan");
  const [email, setEmail] = useState("spiderfan@spiderverse.stream");
  const [bio, setBio] = useState("Just a friendly neighborhood movie lover.");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const stats = [
    { icon: Film, label: "Movies Watched", value: 42 },
    { icon: Tv, label: "Shows Watched", value: 18 },
    { icon: Star, label: "Avg Rating", value: "8.4" },
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-foreground mb-8">
          Your Profile
        </h1>

        {/* Avatar & Stats */}
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
          <div className="w-28 h-28 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center flex-shrink-0">
            <User size={48} className="text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl text-foreground mb-1">{name}</h2>
            <p className="text-muted-foreground text-sm mb-4">{bio}</p>
            <div className="flex gap-6">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <stat.icon size={18} className="mx-auto text-primary mb-1" />
                  <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="space-y-5 bg-card rounded-xl p-6 border border-border/50">
          <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Edit Profile</h3>

          <div>
            <label className="block text-sm text-muted-foreground mb-1">Display Name</label>
            <div className="relative">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-secondary/50 border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/50 transition-colors"
                title="Your display name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-1">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                className="w-full bg-secondary/50 border border-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/50 transition-colors"
                title="Your email address"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-muted-foreground mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={3}
              className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary/50 transition-colors resize-none"
              title="Tell us about yourself"
            />
          </div>

          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2.5 rounded-lg transition-all glow-red hover:shadow-lg hover:shadow-primary/30"
            title="Save your profile changes"
          >
            <Save size={16} />
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
