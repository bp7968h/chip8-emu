import React from "react";
import type { ReactNode } from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

interface AppLayoutProps {
    children: ReactNode,

}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen min-w-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout;