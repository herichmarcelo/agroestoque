export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          AgroEstoque
        </h1>
        <span className="text-sm text-zinc-500">
          Controle inteligente de inventário
        </span>
      </div>
    </header>
  )
}