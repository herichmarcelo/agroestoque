import { useState } from "react"

export default function EntradaPage() {

  const [item, setItem] = useState("")
  const [quantidade, setQuantidade] = useState(0)
  const [fornecedor, setFornecedor] = useState("")

  const registrarEntrada = () => {
    console.log({
      item,
      quantidade,
      fornecedor
    })

    alert("Entrada registrada (simulação)")
  }

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold text-[#0E3B2E]">
        Entrada de Estoque
      </h2>

      <div className="bg-white rounded-xl shadow p-6 space-y-4 max-w-md">

        <div>
          <label className="text-sm">Nome do Item</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ex: Ração Crescimento"
          />
        </div>

        <div>
          <label className="text-sm">Quantidade</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />
        </div>

        <div>
          <label className="text-sm">Fornecedor</label>
          <input
            type="text"
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 mt-1"
            placeholder="Ex: Agro Nutri"
          />
        </div>

        <button
          onClick={registrarEntrada}
          className="bg-[#0E3B2E] text-white w-full py-2 rounded-lg"
        >
          Registrar Entrada
        </button>

      </div>

    </div>
  )
}