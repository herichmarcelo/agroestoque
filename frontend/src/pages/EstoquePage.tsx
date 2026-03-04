import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface ItemEstoque {
  id: number
  nome: string
  categoria: string
  quantidade: number
  unidade_medida: string
  foto?: string
}

export default function EstoquePage() {

  const navigate = useNavigate()
  const [itens, setItens] = useState<ItemEstoque[]>([])
  const [busca, setBusca] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/medicamentos/")
      .then(res => res.json())
      .then(data => setItens(data))
      .catch(error => console.error("Erro ao buscar dados:", error))
  }, [])

  const itensFiltrados = itens
    .filter(item =>
      item.nome.toLowerCase().includes(busca.toLowerCase())
    )
    .sort((a, b) =>
      a.nome.localeCompare("pt-BR", { sensitivity: "base" })
    )

  const montarUrlImagem = (foto?: string) => {
    if (!foto) return "https://via.placeholder.com/200x150"

    if (foto.startsWith("http")) {
      return foto
    }

    return `http://127.0.0.1:8000${foto}`
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0E3B2E]">
          Controle de Estoque
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Gestão estratégica de medicamentos
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card titulo="Total" valor={itens.length.toString()} />
        <Card titulo="Medicamentos" valor={itens.length.toString()} />
        <Card titulo="Estoque Baixo" valor="0" alerta />
        <Card
          titulo="Categorias"
          valor={[...new Set(itens.map(i => i.categoria))].length.toString()}
        />
      </div>

      {/* AÇÕES RESPONSIVAS */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">

        {/* PESQUISA */}
        <div className="flex items-center border rounded-lg overflow-hidden shadow-sm flex-1">
          <input
            type="text"
            placeholder="Pesquisar item..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="px-4 py-3 outline-none w-full text-sm"
          />
          <div className="bg-[#0E3B2E] text-white px-4 py-3">
            🔎
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/estoque/novo")}
            className="bg-[#0E3B2E] hover:bg-[#145C47] text-white px-6 py-3 rounded-lg shadow transition text-sm"
          >
            + Incluir
          </button>

          <button
            onClick={() => navigate("/estoque/saida")}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg shadow transition text-sm"
          >
            - Saída
          </button>
        </div>

      </div>

      {/* GRID DE ITENS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {itensFiltrados.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition p-3 border"
          >
            <img
              src={montarUrlImagem(item.foto)}
              className="h-24 md:h-32 w-full object-cover rounded-lg"
            />

            <div className="mt-3">
              <h3 className="font-semibold text-sm md:text-base text-[#0E3B2E]">
                {item.nome}
              </h3>

              <p className="text-xs md:text-sm text-gray-500">
                {item.categoria}
              </p>

              <div className="mt-1 text-xs md:text-sm">
                <span className="font-semibold">
                  {item.quantidade} {item.unidade_medida}
                </span>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

function Card({ titulo, valor, alerta = false }: any) {
  return (
    <div
      className={`bg-white p-4 rounded-xl shadow border-l-4 ${
        alerta ? "border-red-600" : "border-[#0E3B2E]"
      }`}
    >
      <p className="text-xs text-gray-500">{titulo}</p>
      <p className="text-lg md:text-2xl font-bold mt-1 text-[#0E3B2E]">
        {valor}
      </p>
    </div>
  )
}