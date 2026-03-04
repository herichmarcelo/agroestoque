import { useEffect, useState } from "react"

interface Produto {
  id: number
  nome: string
  quantidade: number
  unidade_medida: string
  categoria: string
  preco?: number
  foto?: string
}

interface ItemCarrinho extends Produto {
  qtd: number
  centroCusto: string
}

export default function SaidaPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)
  const [quantidade, setQuantidade] = useState(1)
  const [centroCusto, setCentroCusto] = useState("Boi Pádua")
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [busca, setBusca] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/medicamentos/")
      .then(res => res.json())
      .then(data => setProdutos(data))
  }, [])

  const produtosFiltrados = produtos
    .filter(p =>
      p.nome.toLowerCase().includes(busca.toLowerCase())
    )
    .sort((a, b) =>
      a.nome.localeCompare(b.nome, "pt-BR", { sensitivity: "base" })
    )

  const adicionarAoCarrinho = () => {
    if (!produtoSelecionado) return

    setCarrinho([
      ...carrinho,
      { ...produtoSelecionado, qtd: quantidade, centroCusto }
    ])

    setProdutoSelecionado(null)
    setQuantidade(1)
  }

  const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0)

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">

      {/* COMANDA */}
      <div className="bg-white shadow-md p-3 md:w-1/3 md:h-full flex flex-col">

        <h2 className="text-lg font-bold text-[#0E3B2E]">
          Saida de Itens
        </h2>

        <div className="flex-1 overflow-y-auto space-y-1 mt-2 max-h-40 md:max-h-none">
          {carrinho.length === 0 && (
            <p className="text-gray-400 text-sm">
              Nenhum item
            </p>
          )}

          {carrinho.map((item, index) => (
            <div key={index} className="text-sm border-b pb-1">
              {item.qtd}x {item.nome}
              <div className="text-xs text-gray-500">
                {item.centroCusto}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t mt-2">
          <p className="font-semibold">
            Total de itens: {totalItens}
          </p>

          <button className="w-full mt-2 bg-[#0E3B2E] text-white py-2 rounded-lg">
            Finalizar
          </button>
        </div>
      </div>

      {/* PRODUTOS */}
      <div className="flex-1 p-3 overflow-y-auto">

        <h2 className="text-xl font-bold text-[#0E3B2E]">
          PDV - Venda Balcão
        </h2>

        <input
          type="text"
          placeholder="Buscar medicamento..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 mt-3 mb-4"
        />

        <div className="grid grid-cols-2 gap-3">
          {produtosFiltrados.map(produto => (
            <div
              key={produto.id}
              onClick={() => setProdutoSelecionado(produto)}
              className="bg-white rounded-xl shadow p-2 active:scale-95 transition cursor-pointer"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={
                    produto.foto?.startsWith("http")
                      ? produto.foto
                      : produto.foto
                      ? `http://127.0.0.1:8000${produto.foto}`
                      : "https://via.placeholder.com/200"
                  }
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm font-semibold mt-2 text-center">
                {produto.nome}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-80 space-y-4 shadow-lg">

            <h3 className="text-lg font-bold text-[#0E3B2E]">
              {produtoSelecionado.nome}
            </h3>

            <input
              type="number"
              min={1}
              value={quantidade}
              onChange={e => setQuantidade(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            />

            <select
              value={centroCusto}
              onChange={e => setCentroCusto(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>Boi Pádua</option>
              <option>Boi Filomena</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={() => setProdutoSelecionado(null)}
                className="flex-1 border rounded-lg py-2"
              >
                Cancelar
              </button>

              <button
                onClick={adicionarAoCarrinho}
                className="flex-1 bg-[#0E3B2E] text-white rounded-lg py-2"
              >
                Confirmar
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}