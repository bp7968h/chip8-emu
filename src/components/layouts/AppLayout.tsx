import React from "react";
import type { ReactNode } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import navItems from "../../constants/navItems";

interface AppLayoutProps {
    children: ReactNode,

}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen min-w-screen justify-center">
            <Header navItems={navItems} />
            <main className="flex-grow max-w-6xl bg-card mx-auto my-8">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;