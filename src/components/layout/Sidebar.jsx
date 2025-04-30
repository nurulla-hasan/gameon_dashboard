import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { LuSettings } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";


const Sidebar = ({ menuItems, setSettingsOpen, settingsOpen, pathname, settingMenu }) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        router.push('/auth/login')
    }

    return (
        <>
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

            <button onClick={handleLogout} className="text-[#E72A11] bg-[#FEFEFE] text-sm py-3 flex gap-2 pl-10 mx-2 items-center cursor-pointer">
                <MdOutlineLogout size={20} />
                <span className='text-md font-medium'>Log out</span>
            </button>
        </>
    );
};

export default Sidebar;