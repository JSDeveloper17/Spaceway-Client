
import { motion } from "framer-motion";
import AppIcon from "../components/AppIcon.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { cn } from "../utils/cn.js";

const Dashboard = () => {
  const { user } = useAuth();

  const benefits = [
    {
      title: "Pricing Automation",
      description: "Real-time auto-repricing across eCommerce platforms.",
      icon: "rocket",
    },
    {
      title: "Turnover Analytics",
      description: "Evaluate profits, SKUs, and sales performance instantly.",
      icon: "barChart3",
    },
    {
      title: "Competitor Tracking",
      description: "Monitor competitor prices 24/7 with alerts.",
      icon: "target",
    },
    {
      title: "Inventory Sync",
      description: "Get real-time stock updates to avoid overselling.",
      icon: "package",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      
      {/* ====================================== */}
      {/* 🔹 Sidebar */}
      {/* ====================================== */}
      <aside className="sticky top-0 flex-col hidden w-64 h-screen p-6 border-r md:flex bg-sidebar border-border">
        <h2 className="mb-6 text-xl font-bold">Spaceway</h2>

        <nav className="flex flex-col space-y-3">
          <button className="flex items-center px-4 py-3 space-x-3 transition-all rounded-lg hover:bg-accent">
            <AppIcon name="user" size={20} />
            <span>Profile</span>
          </button>

          <button className="flex items-center px-4 py-3 space-x-3 transition-all rounded-lg hover:bg-accent">
            <AppIcon name="settings" size={20} />
            <span>Settings</span>
          </button>

          <button className="flex items-center px-4 py-3 space-x-3 transition-all rounded-lg hover:bg-accent">
            <AppIcon name="help" size={20} />
            <span>Help Center</span>
          </button>
        </nav>

        <div className="pt-6 mt-auto border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Spaceway • All Rights Reserved
          </p>
        </div>
      </aside>

      {/* ====================================== */}
      {/* 🔹 Main Dashboard Area */}
      {/* ====================================== */}
      <main className="flex-1 p-6 md:p-10">

        {/* Top Bar: Name + Email */}
        <div className="flex flex-col mb-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold animate-fade-in-up">
              Welcome, <span className="text-primary">{user?.firstName}</span> 👋
            </h1>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="flex items-center px-4 py-2 transition-all rounded-lg bg-primary text-primary-foreground hover:opacity-90">
              <AppIcon name="settings" className="mr-2" />
              Account Settings
            </button>
          </div>
        </div>

        {/* ====================================== */}
        {/* 🔹 Congratulations / Success Banner */}
        {/* ====================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 mb-10 overflow-hidden rounded-xl glass-card shadow-professional-xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-3 text-2xl font-bold"
          >
            🎉 Congratulations, {user?.firstName}!
          </motion.h2>

          <p className="text-lg text-muted-foreground">
            You're successfully connected with <span className="font-semibold text-primary">Spaceway</span>.
            Your dashboard is now ready with tools to automate your business, boost turnover, and track competitors effortlessly.
          </p>

          <motion.div
            className="absolute right-4 top-4 animate-float"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <AppIcon name="award" size={60} className="text-primary opacity-80" />
          </motion.div>
        </motion.div>

        {/* ====================================== */}
        {/* 🔹 Feature / Benefits Cards */}
        {/* ====================================== */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="p-6 transition-transform cursor-pointer glass-card rounded-xl hover:scale-105 shadow-professional-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10">
                <AppIcon name={benefit.icon} size={26} className="text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

      </main>

    </div>
  );
};

export default Dashboard;
