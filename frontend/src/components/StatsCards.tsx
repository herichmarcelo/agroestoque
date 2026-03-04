export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card title="Produtos" value="128" />
      <Card title="Valor Total" value="R$ 482.340" />
      <Card title="Baixo Estoque" value="7" />
    </div>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border border-zinc-200 p-6 rounded-xl">
      <p className="text-sm text-zinc-500">{title}</p>
      <h2 className="text-3xl font-semibold mt-2 tracking-tight">
        {value}
      </h2>
    </div>
  )
}