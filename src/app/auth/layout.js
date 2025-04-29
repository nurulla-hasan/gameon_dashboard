"use client"
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
    return (
        <>
            <>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="bg-[#F7F0ED]">
                    {children}
                </div>
            </>
        </>
    );
}