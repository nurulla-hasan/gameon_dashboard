"use client";
import './globals.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUserCircle } from "react-icons/hi";
import { ImUserTie } from "react-icons/im";
import { MdOutlineLogout, MdPayment } from "react-icons/md";
import { LuSettings } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Topbar from '@/components/layout/Topbar';
import PrivateRoute from '@/components/privet-route/PrivetRoute';

const menuItems = [
  { label: "Dashboard", href: "/", icon: <LuLayoutDashboard size={20} /> },
  { label: "Players", href: "/players", icon: <HiOutlineUserCircle size={20} /> },
  { label: "Match oversight", href: "/match-oversight", icon: <ImUserTie size={20} /> },
  { label: "Dispute Status", href: "/dispute-status", icon: <MdPayment size={20} /> },
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
          <div className="h-screen flex container mx-auto max-w-ful bg-[#1F3D2C]">
            {/* Sidebar */}
            <div className={`${isHideLayout ? "hidden" : ""} w-64  flex flex-col justify-between pb-10 bg-[#1F3D2C]`}>
              <div>
                {/* Logo */}
                <Link href="/">
                  <div className="flex items-center justify-center">
                    <Image src="/images/logo.png" width={92} height={92} alt="Logo" />
                  </div>
                </Link>

                {/* Navigation */}
                <nav className="flex flex-col gap-2 px-2">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`px-4 py-3 transition-all duration-300 ${isActive
                          ? "bg-[#5CA97E] text-white"
                          : "text-[#5CA97E] hover:bg-[#5CA97E] bg-[#FEFEFE] hover:text-white"
                          }`}
                      >
                        <span className='flex text-sm items-center gap-2 font-medium'>
                          {item.icon}
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}

                  {/* Settings dropdown */}
                  <div>
                    <button
                      onClick={() => setSettingsOpen(!settingsOpen)}
                      className={`w-full cursor-pointer text-left px-4 py-2 text-[#5CA97E] flex justify-between items-center transition-all duration-300 ${settingsOpen ? "bg-[#5CA97E] text-white" : "bg-[#FEFEFE]"}`}
                    >
                      <p className='flex items-center gap-2 text-sm font-medium'>
                        <LuSettings size={20} />
                        <span>Settings</span>
                      </p>
                      <span>{settingsOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {settingsOpen && (
                        <motion.div
                          className="flex flex-col gap-1 text-[15px] mt-1 pr-5"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                        >
                          {settingMenu.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className={`px-4 py-2 text-sm transition-colors duration-200 font-medium ${isActive
                                  ? "bg-[#5CA97E] text-white font-medium"
                                  : "text-[#5CA97E] hover:bg-[#5CA97E] bg-[#FEFEFE] hover:text-white"
                                  }`}
                              >
                                {item.label}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </nav>
              </div>

              <button onClick={() => { (alert("logout")) }} className="text-[#E72A11] bg-[#FEFEFE] text-sm py-3 flex gap-2 pl-10 mx-2 items-center cursor-pointer">
                <MdOutlineLogout size={20} />
                <span className='text-md font-medium'>Log out</span>
              </button>
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
