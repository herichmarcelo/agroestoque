import { Outlet } from "react-router-dom"
import { useState } from "react"
import Sidebar from '../components/Sidebar'

export default function MainLayout() {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <div className="flex min-h-screen bg-zinc-100">

            {/* BOTÃO MOBILE */}
            <button
                onClick={() => setMenuAberto(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-[#0E3B2E] text-white px-3 py-2 rounded-lg shadow"
            >
                ☰
            </button>

            {/* SIDEBAR */}
            <Sidebar aberto={menuAberto} fechar={() => setMenuAberto(false)} />

            {/* CONTEÚDO */}
            <main className="flex-1 p-6 md:p-10">
                <Outlet />
            </main>

        </div>
    )
}