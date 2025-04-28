import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Topbar = ({ isHideLayout }) => {

    const user = useSelector(state => state.auth.user)

    return (
        <>
            <div className={`${isHideLayout ? "hidden" : ""} bg-[#1F3D2C] backdrop-blur-2xl z-10 sticky top-0 flex justify-end items-center gap-4 h-25 pr-12`}>
                <button className="w-10 h-10 rounded-full bg-[#fff] flex items-center justify-center cursor-pointer">
                    <Link href="/notification">
                        <IoMdNotificationsOutline color='#000000' size={20} />
                    </Link>
                </button>
                <Image
                    src="/images/avatar.png"
                    width={48}
                    height={48}
                    alt="User"
                    className="rounded-full cursor-pointer"
                />
                <span className="text-sm font- text-[#F7F0ED]">{user?.name || "Kristin Watson"}</span>
            </div>
        </>
    );
};

export default Topbar;