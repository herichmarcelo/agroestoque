import { NavLink } from "react-router-dom"

interface SidebarProps {
  aberto: boolean
  fechar: () => void
}

export default function Sidebar({ aberto, fechar }: SidebarProps) {
  return (
    <>
      {/* OVERLAY MOBILE */}
      {aberto && (
        <div
          onClick={fechar}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static
          top-0 left-0 h-screen
          w-64 bg-[#0E3B2E] text-white
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          z-50
          ${aberto ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <img
            src="http://127.0.0.1:8000/media/itens/logopluma.png"
            alt="Grupo Pluma"
            className="h-12 object-contain"
          />

          <button
            onClick={fechar}
            className="md:hidden text-white text-lg"
          >
            ✕
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <NavItem to="/" fechar={fechar}>Dashboard</NavItem>
          <NavItem to="/estoque" fechar={fechar}>Estoque</NavItem>
          <NavItem to="/relatorios" fechar={fechar}>Relatórios</NavItem>
        </nav>

        {/* FOOTER */}
        <div className="p-4 text-xs text-white/40 border-t border-white/10">
          AgroEstoque v1.4
        </div>
      </aside>
    </>
  )
}

function NavItem({
  to,
  children,
  fechar
}: {
  to: string
  children: string
  fechar: () => void
}) {
  return (
    <NavLink
      to={to}
      onClick={fechar}
      className={({ isActive }) =>
        `block px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-amber-400 text-zinc-900 font-semibold shadow"
            : "hover:bg-white/10"
        }`
      }
    >
      {children}
    </NavLink>
  )
}