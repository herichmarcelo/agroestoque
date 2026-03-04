const produtos = [
  { id: 1, nome: "Fertilizante NPK", quantidade: 45, preco: "120.00" },
  { id: 2, nome: "Semente de Soja", quantidade: 200, preco: "89.90" },
  { id: 3, nome: "Defensivo Agrícola", quantidade: 12, preco: "340.00" },
]

export default function EstoqueTable() {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-zinc-50 text-sm text-zinc-500 uppercase tracking-wide">
          <tr>
            <th className="px-6 py-4">Produto</th>
            <th className="px-6 py-4">Quantidade</th>
            <th className="px-6 py-4">Preço</th>
            <th className="px-6 py-4 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr
              key={produto.id}
              className="border-t border-zinc-100 hover:bg-zinc-50 transition"
            >
              <td className="px-6 py-4 font-medium">{produto.nome}</td>
              <td className="px-6 py-4">{produto.quantidade}</td>
              <td className="px-6 py-4">R$ {produto.preco}</td>
              <td className="px-6 py-4 text-right">
                <Status quantidade={produto.quantidade} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Status({ quantidade }: { quantidade: number }) {
  const baixo = quantidade < 20

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${
        baixo
          ? "bg-red-100 text-red-600"
          : "bg-emerald-100 text-emerald-600"
      }`}
    >
      {baixo ? "Baixo" : "OK"}
    </span>
  )
}