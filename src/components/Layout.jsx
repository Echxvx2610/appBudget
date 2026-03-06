import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, LineChart, PlusCircle, Target, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
    const navItems = [
        { to: "/", icon: Home, label: "Inicio" },
        { to: "/accounts", icon: LineChart, label: "Cuentas" },
        { to: "/transactions", icon: PlusCircle, label: "Agregar" },
        { to: "/budgets", icon: Target, label: "Ahorros" },
        { to: "/profile", icon: User, label: "Perfil" },
    ];

    return (
        <div className="flex h-screen bg-light text-dark overflow-hidden">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex flex-col w-64 border-r bg-card h-full pt-4 pb-4">
                <div className="px-6 mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-primary">FinFlow.</h1>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors font-medium",
                                isActive
                                    ? "bg-primary text-white"
                                    : "text-mid hover:bg-slate-100 hover:text-dark"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 h-full overflow-y-auto pb-16 md:pb-0">
                <div className="max-w-5xl mx-auto p-4 md:p-8">
                    <Outlet />
                </div>
            </main>

            {/* Bottom Navigation (Mobile) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-card h-16 flex items-center justify-around px-2 z-50">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) => cn(
                            "flex flex-col items-center justify-center w-full h-full space-y-1 rounded-md transition-colors",
                            isActive ? "text-primary" : "text-mid"
                        )}
                    >
                        {item.to === "/transactions" ? (
                            <div className="bg-primary text-white p-3 rounded-full -mt-6 shadow-lg transform transition active:scale-95">
                                <item.icon className="w-6 h-6" />
                            </div>
                        ) : (
                            <>
                                <item.icon className="w-5 h-5" />
                                <span className="text-[10px] font-medium">{item.label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
