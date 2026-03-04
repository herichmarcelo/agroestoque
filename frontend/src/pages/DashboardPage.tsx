export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold text-zinc-800">
        Dashboard
      </h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-zinc-500">Total de Produtos</p>
          <p className="text-2xl font-bold text-zinc-800">124</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-zinc-500">Itens Abaixo do Mínimo</p>
          <p className="text-2xl font-bold text-red-600">8</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-zinc-500">Medicamentos Próximos do Vencimento</p>
          <p className="text-2xl font-bold text-amber-500">3</p>
        </div>
      </div>
    </div>
  )
}