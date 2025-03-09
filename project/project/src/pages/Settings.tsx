// // import React, { useState } from 'react';
// // import { Bell, Moon, Sun, Globe, Save } from 'lucide-react';
// // import { useTheme } from '../context/ThemeContext';
// // import { useLanguage } from '../context/LanguageContext';

// // const Settings = () => {
// //   const [notifications, setNotifications] = useState(true);
// //   const { darkMode, toggleDarkMode } = useTheme();
// //   const { language, setLanguage, t } = useLanguage();
// //   const [saved, setSaved] = useState(false);

// //   const handleSave = () => {
// //     setSaved(true);
// //     setTimeout(() => setSaved(false), 2000);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-200 overflow-visible">
// //       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-8">
// //           <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
// //             {t('settings')}
// //           </h1>
// //           <button
// //             onClick={handleSave}
// //             className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //           >
// //             <Save size={18} className="mr-2" />
// //             {saved ? t('saved') : t('saveChanges')}
// //           </button>
// //         </div>

// //         {/* Notifications */}
// //         <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-6">
// //           <div className="p-6">
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center space-x-3">
// //                 <Bell className="w-6 h-6 text-gray-500 dark:text-gray-400" />
// //                 <div>
// //                   <h2 className="text-lg font-medium text-gray-900 dark:text-white">
// //                     {t('notifications')}
// //                   </h2>
// //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// //                     {t('manageNotifications')}
// //                   </p>
// //                 </div>
// //               </div>
// //               <label className="relative inline-flex items-center cursor-pointer">
// //                 <input
// //                   type="checkbox"
// //                   className="sr-only peer"
// //                   checked={notifications}
// //                   onChange={(e) => setNotifications(e.target.checked)}
// //                 />
// //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Dark Mode */}
// //         <div className="bg-white dark:bg-gray-800 shadow rounded-lg mb-6">
// //           <div className="p-6">
// //             <div className="flex items-center justify-between">
// //               <div className="flex items-center space-x-3">
// //                 {darkMode ? (
// //                   <Moon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
// //                 ) : (
// //                   <Sun className="w-6 h-6 text-gray-500 dark:text-gray-400" />
// //                 )}
// //                 <div>
// //                   <h2 className="text-lg font-medium text-gray-900 dark:text-white">
// //                     {t('darkMode')}
// //                   </h2>
// //                   <p className="text-sm text-gray-500 dark:text-gray-400">
// //                     {t('toggleDarkMode')}
// //                   </p>
// //                 </div>
// //               </div>
// //               <label className="relative inline-flex items-center cursor-pointer">
// //                 <input
// //                   type="checkbox"
// //                   className="sr-only peer"
// //                   checked={darkMode}
// //                   onChange={toggleDarkMode}
// //                 />
// //                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Language Settings */}
// //         <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-visible">
// //           <div className="p-6">
// //             <div className="flex items-center space-x-3 mb-4">
// //               <Globe className="w-6 h-6 text-gray-500 dark:text-gray-400" />
// //               <div>
// //                 <h2 className="text-lg font-medium text-gray-900 dark:text-white">
// //                   {t('language')}
// //                 </h2>
// //                 <p className="text-sm text-gray-500 dark:text-gray-400">
// //                   {t('selectLanguage')}
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="relative z-50">
// //               <select
// //                 value={language}
// //                 onChange={(e) => setLanguage(e.target.value)}
// //                 className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
// //                 style={{ zIndex: 50 }}
// //               >
// //                 <option value="english">English</option>
// //                 <option value="spanish">Español</option>
// //                 <option value="french">Français</option>
// //               </select>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Save Feedback */}
// //         {saved && (
// //           <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
// //             {t('saved')}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Settings;

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const SettingsPage = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);
//   const [language, setLanguage] = useState('en');
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: '',
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const handlePasswordChange = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add password change logic here
//     console.log('Password change submitted:', passwordData);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
        
//         {/* Dark Mode Toggle */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dark Mode</h2>
//               <p className="text-gray-600 dark:text-gray-400">Adjust the appearance</p>
//             </div>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
//                 darkMode ? 'bg-blue-600' : 'bg-gray-200'
//               }`}
//             >
//               <span
//                 className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
//                   darkMode ? 'translate-x-6' : 'translate-x-0'
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Notifications Settings */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//           <div className="flex items-center justify-between">
//             <div>
//               <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Notifications</h2>
//               <p className="text-gray-600 dark:text-gray-400">Manage your notifications</p>
//             </div>
//             <button
//               onClick={() => setNotificationsEnabled(!notificationsEnabled)}
//               className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
//                 notificationsEnabled ? 'bg-blue-600' : 'bg-gray-200'
//               }`}
//             >
//               <span
//                 className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
//                   notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Language Selection */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Language</h2>
//             <select
//               value={language}
//               onChange={(e) => setLanguage(e.target.value)}
//               className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//             >
//               <option value="en">English</option>
//               <option value="es">Español</option>
//               <option value="fr">Français</option>
//             </select>
//           </div>
//         </div>

//         {/* Password Change Form */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
//           <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Change Password</h2>
//           <form onSubmit={handlePasswordChange} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
//               <input
//                 type="password"
//                 className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 value={passwordData.currentPassword}
//                 onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">New Password</label>
//               <input
//                 type="password"
//                 className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 value={passwordData.newPassword}
//                 onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
//               <input
//                 type="password"
//                 className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
//                 value={passwordData.confirmPassword}
//                 onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Change Password
//             </button>
//           </form>
//         </div>

//         <Link 
//           to="/home"
//           className="inline-block text-blue-600 dark:text-blue-400 hover:underline mt-4"
//         >
//           ← Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;
// src/pages/SettingsPage.tsx
// import { useSettings } from '../context/SettingsContext';
import { useState, useEffect } from 'react'; // Add this import
import { useSettings } from '../context/SettingsContext';
import { Link } from 'react-router-dom';

const Settings = () => {
  const {
    darkMode,
    notificationsEnabled,
    language,
    setDarkMode,
    setNotificationsEnabled,
    setLanguage,
  } = useSettings();

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Add password change logic here
    console.log('Password change submitted:', passwordData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>

        {/* Dark Mode Toggle */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Dark Mode</h2>
              <p className="text-gray-600 dark:text-gray-400">Adjust the appearance</p>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
                darkMode ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Notifications Settings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Notifications</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your notifications</p>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative rounded-full w-12 h-6 transition-colors duration-200 focus:outline-none ${
                notificationsEnabled ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Language</h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        {/* Password Change Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Change Password</h2>
          <form onSubmit={handlePasswordChange} className="space-y-4">
            {/* ... existing password form fields ... */}
          </form>
        </div>

        <Link 
          to="/home"
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline mt-4"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};
export default Settings;