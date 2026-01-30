import { useState } from "react";
import { X, Mail, Lock, Eye, EyeOff, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  // ================= LOGIN =================
  const handleLogin = () => {
    setError("");
    setSuccess("");

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email === loginEmail &&
      user.password === loginPassword
    ) {
      setSuccess("Login successful!");
      setTimeout(onClose, 1000);
    } else {
      setError("Invalid email or password.");
    }
  };

  // ================= REGISTER =================
  const handleRegister = () => {
    setError("");
    setSuccess("");

    if (!name || !regEmail || !phone || !regPassword) {
      setError("Please fill all fields.");
      return;
    }

    const user = {
      name,
      email: regEmail,
      phone,
      password: regPassword,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Account created! Please login.");
    setActiveTab("login");

    setName("");
    setRegEmail("");
    setPhone("");
    setRegPassword("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-background rounded-2xl shadow-xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="gradient-hero px-6 py-6 text-center">
          <h2 className="text-3xl font-bold">Welcome</h2>
          <p className="text-sm text-muted-foreground">
            Login or create account
          </p>
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Messages */}
          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-500 text-sm mb-3 text-center">
              {success}
            </p>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>

            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* ================= LOGIN ================= */}

            <TabsContent value="login" className="space-y-4">

              <div>
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    type="email"
                    className="pl-9"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>

              <div>
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

                  <Input
                    value={loginPassword}
                    onChange={(e) =>
                      setLoginPassword(e.target.value)
                    }
                    type={showPassword ? "text" : "password"}
                    className="pl-9 pr-9"
                    placeholder="password"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <Button
                onClick={handleLogin}
                className="w-full"
              >
                Login
              </Button>

            </TabsContent>

            {/* ================= REGISTER ================= */}

            <TabsContent value="register" className="space-y-4">

              <div>
                <Label>Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-9"
                    placeholder="Full name"
                  />
                </div>
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  value={regEmail}
                  onChange={(e) =>
                    setRegEmail(e.target.value)
                  }
                  type="email"
                  placeholder="email@gmail.com"
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="+91..."
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  value={regPassword}
                  onChange={(e) =>
                    setRegPassword(e.target.value)
                  }
                  type="password"
                  placeholder="Create password"
                />
              </div>

              <Button
                onClick={handleRegister}
                className="w-full"
              >
                Create Account
              </Button>

            </TabsContent>

          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
