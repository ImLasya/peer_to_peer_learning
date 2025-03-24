
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [activityStatus, setActivityStatus] = useState(true);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password change submitted:', passwordData);
  };

  const handleDeactivateAccount = () => {
    console.log('Account deactivation requested');
  };

  return (
    <div className="min-h-screen font-space-grotesk bg-cyber-deep text-cyber-gray overflow-hidden p-4 md:p-8">
      <style>{`
        :root {
          --cyber-deep: #0a0a1a;
          --neon-cyan: #00ffff;
          --neon-magenta: #ff00ff;
          --cyber-gray: #d0d0f0;
        }

        .cyber-bg {
          background: 
            linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, var(--cyber-deep) 20%, #000);
          background-size: 40px 40px;
          animation: gridMove 40s linear infinite;
        }

        .glass-panel {
          background: rgba(15, 15, 30, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.2),
            inset 0 0 30px rgba(0, 255, 255, 0.1);
        }
      `}</style>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <motion.h1 
          className="text-4xl font-bold bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Settings
        </motion.h1>

        {/* Notifications */}
        <motion.div 
          className="glass-panel p-6 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neon-cyan">Email Notifications</h2>
              <p className="text-cyber-gray">Receive important updates via email</p>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
                notificationsEnabled ? 'bg-neon-magenta' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Change Password */}
        <motion.div 
          className="glass-panel p-6 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-neon-cyan mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-3 bg-cyber-deep border-2 border-neon-cyan rounded-lg text-cyber-gray focus:outline-none"
              value={passwordData.currentPassword}
              onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 bg-cyber-deep border-2 border-neon-cyan rounded-lg text-cyber-gray focus:outline-none"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full p-3 bg-cyber-deep border-2 border-neon-cyan rounded-lg text-cyber-gray focus:outline-none"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
            />
            <button
              type="submit"
              className="w-full py-3 bg-neon-cyan text-cyber-deep font-bold rounded-lg hover:bg-neon-magenta transition-colors duration-300"
            >
              Change Password
            </button>
          </form>
        </motion.div>

        {/* Activity Status */}
        <motion.div 
          className="glass-panel p-6 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-neon-cyan">Activity Status</h2>
              <p className="text-cyber-gray">Show online status to others</p>
            </div>
            <button
              onClick={() => setActivityStatus(!activityStatus)}
              className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
                activityStatus ? 'bg-neon-magenta' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  activityStatus ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </motion.div>

        {/* Deactivate Account */}
        <motion.div 
          className="glass-panel p-6 rounded-xl"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-xl font-semibold text-neon-cyan mb-4">Deactivate Account</h2>
          <button
            onClick={handleDeactivateAccount}
            className="w-full py-3 bg-cyber-deep border-2 border-neon-magenta text-neon-magenta rounded-lg hover:bg-neon-magenta hover:text-cyber-deep transition-colors duration-300"
          >
            Deactivate Account
          </button>
        </motion.div>

        {/* Back to Home */}
        <Link 
          to="/home"
          className="inline-block text-neon-magenta hover:text-neon-cyan hover:underline mt-4"
        >
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Settings;
