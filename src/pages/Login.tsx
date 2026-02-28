import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (userId.trim().length === 0 || password.trim().length === 0) {
      setError("Please enter both User ID and Password.");
      return;
    }
    const success = login(userId, password);
    if (success) {
      navigate("/home");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden web-corner web-corner-right">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--spider-red) / 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, hsl(var(--spider-blue) / 0.1) 0%, transparent 50%)`
      }} />

      <div className="relative z-10 w-full max-w-md mx-4 animate-scale-in">
        <div className="glass rounded-2xl p-8 sm:p-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-5xl block mb-3 animate-spider-logo">🕷</span>
            <h1 className="font-display text-4xl tracking-wider text-primary text-glow-red">
              SpiderVerse Stream
            </h1>
            <p className="text-muted-foreground text-sm mt-2">Enter the multiverse of entertainment</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-2 animate-fade-in">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">User ID</label>
              <input
                type="text"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                placeholder="Enter your ID"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={50}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/80 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                maxLength={100}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-border accent-primary"
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all glow-red hover:shadow-lg hover:shadow-primary/30"
            >
              Login
            </button>

            <button
              type="button"
              className="w-full border border-primary/50 text-primary hover:bg-primary/10 font-semibold py-3 rounded-lg transition-all"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
