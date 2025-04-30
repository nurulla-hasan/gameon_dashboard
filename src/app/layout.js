"use client";
import './globals.css';
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineLogout } from "react-icons/md";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Topbar from '@/components/layout/Topbar';
import PrivateRoute from '@/components/privet-route/PrivetRoute';
import Sidebar from '@/components/layout/Sidebar';
import { FaBalanceScale } from 'react-icons/fa';
import { FaFlagCheckered } from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", href: "/", icon: <LuLayoutDashboard size={20} /> },
  { label: "Players", href: "/players", icon: <HiOutlineUserCircle size={20} /> },
  { label: "Match oversight", href: "/match-oversight", icon: <FaFlagCheckered size={20} /> },
  { label: "Dispute Status", href: "/dispute-status", icon: <FaBalanceScale size={20} /> },
];
const settingMenu = [
  { label: "Profile", href: "/profile" },
  { label: "FAQ", href: "/FAQ" },
  { label: "Terms & Condition", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function RootLayout({ children }) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();
  const hideRoutes = ["/auth", "/auth/login", "/auth/forgot-password", "/auth/verify-email", "/auth/reset-password"];
  const isHideLayout = hideRoutes.includes(pathname);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <div className="h-screen flex container mx-auto max-w-full bg-[#1F3D2C]">
            {/* Sidebar */}
            <div className={`${isHideLayout ? "hidden" : ""} w-64  flex flex-col justify-between pb-10 bg-[#1F3D2C]`}>
              <Sidebar {...{menuItems, setSettingsOpen, settingsOpen, pathname, settingMenu}}/>
            </div>

            {/* Main content */}
            <main className="flex-1 overflow-auto scrl-hide bg-[#1F3D2C]">
              {/* Top bar */}
              <Topbar isHideLayout={isHideLayout} />

              {/* Page content */}
              <PrivateRoute>
                <div className={`font-poppins ${hideRoutes ? "" : "h-[calc(100vh-100px)]"} overflow-auto scrl-hide bg-[#f8f8f8]`}>
                  {children}
                </div>
              </PrivateRoute>
            </main>
          </div>
        </Provider>
      </body>
    </html>

  );
}
