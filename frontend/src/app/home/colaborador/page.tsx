"use client";
import PlusIcon from "@/assets/icons/plus";
import SearchIcon from "@/assets/icons/search";
import { Card } from "@/components/Card";
import NavBar from "@/components/NavBar";
import NavBarColaborador from "@/components/NavBarColaborador";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const id = searchParams.get("id");
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [colaboradorInfo, setColaboradorInfo] = useState<any | null>(null);
  const [pacientes, setPacientes] = useState<any[]>([]);
  // const [pacientesAutenticados, setPacientesAutenticados] = useState<any[]>([]);
  const [gerentes, setGerentes] = useState<any[]>([]);
  const [colaboradores, setColaboradores] = useState<any[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const id = localStorage.getItem("userID");
    const homeLink = localStorage.getItem("homeLink");
    if (email) {
      setUserEmail(decodeURIComponent(email));
    }
    if (id) {
      const decodedID = decodeURIComponent(id);
      setUserID(decodedID);
      fetchColaboradorData(decodedID);
    }
    fetchPacientes();
    fetchGerentes();
    fetchColaboradores();
  }, [email, id]);

  const fetchColaboradorData = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3002/colaboradores/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch gerente data");
      }
      const data = await response.json();
      setColaboradorInfo(data);
    } catch (error) {
      console.error("Error fetching gerente data:", error);
    }
  };

  const fetchPacientes = async () => {
    try {
      const response = await fetch("http://localhost:3002/pacientes/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch pacientes data");
      }
      const data = await response.json();
      const autenticados = data.pacientes.filter((paciente: any) => paciente.analise);
      console.log(data.pacientes);
      setPacientes(data.pacientes);
      // setPacientesAutenticados(autenticados);
    } catch (error) {
      console.error("Error fetching pacientes data:", error);
    }
  };
  const fetchGerentes = async () => {
    try {
      const response = await fetch("http://localhost:3002/gerentes/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch gerentes data");
      }
      const data = await response.json();
      console.log(data.gerentes);
      setGerentes(data.gerentes);
    } catch (error) {
      console.error("Error fetching gerentes data:", error);
    }
  };
  const fetchColaboradores = async () => {
    try {
      const response = await fetch("http://localhost:3002/colaboradores/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch colaboradores data");
      }
      const data = await response.json();
      console.log(data.colaboradores);
      setColaboradores(data.colaboradores);
    } catch (error) {
      console.error("Error fetching gerentes data:", error);
    }
  };

  const allMembers = [
    ...pacientes.map((paciente) => ({ ...paciente, type: "Paciente" })),
    ...gerentes.map((gerente) => ({ ...gerente, type: "Gerente" })),
    ...colaboradores.map((colaborador) => ({ ...colaborador, type: "Colaborador" }))
  ];

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  // selectedFilters = [Colaborador, Atendido, Gerente]

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredMembers = allMembers.filter((member) =>
    selectedFilters.length === 0 || selectedFilters.includes(member.type)
  );

  return (
    <main className="flex flex-col min-h-screen">
      <NavBarColaborador />
      {/* <button onClick={() => {console.log(pacientesAutenticados)}}>Mostrar pacientes autenticado</button> */}
      <div className="px-[84px] py-[40px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[700px]">
            <h2 className="mb-7">Página inicial</h2>
            <div className="flex flex-col gap-2 mb-4">
              <h3>Minha unidade (Nome da Unidade)</h3>
              <Link href='/unidade'>
                <p className="font-semibold text-blue-800 cursor-pointer">Mais informações</p>
              </Link>
            </div>
            <div className="relative w-[340px]">
              <input
                type="text"
                className='input w-full h-[35px] mb-2 pb-1'
                placeholder="Buscar membro..." />

              <button
                type="button"
                className="absolute inset-y-0 right-0 px-[10px] py-2 pb-4 bg-gray-300 rounded-r-md"
              >
                <SearchIcon color="black" />
              </button>
            </div>

            <div className="flex gap-[18px]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  checked={selectedFilters.includes("Gerente")}
                  onChange={() => handleFilterChange("Gerente")}
                />
                Gerente
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  checked={selectedFilters.includes("Colaborador")}
                  onChange={() => handleFilterChange("Colaborador")}
                />
                Colaborador
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  checked={selectedFilters.includes("Paciente")}
                  onChange={() => handleFilterChange("Paciente")}
                />
                Atendido
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  // checked={selectedFilters.includes("Autenticado")}
                  // onChange={() => handleFilterChange("Autenticado")}
                />
                Autenticado
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  // checked={selectedFilters.includes("Não autenticado")}
                  // onChange={() => handleFilterChange("Não autenticado")}
                />
                Não autenticado
              </label>
            </div>
          </div>

          <div className="flex gap-[10px]">
            <button className="botao">
              <Link href='/cadastro/paciente' className="flex flex-row gap-1 items-center">
                <PlusIcon style={{ color: 'var(--texto-botao)' }} />
                <p>Novo Cadastro</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-[28px] grid grid-cols-4 gap-2 w-full max-w-full">
          {filteredMembers.map((member) => (
            <Card key={member.id} title={member.nome} cpf={member.cpf} acesso={member.type} />
          ))}
        </div>
      </div>
    </main>
  );
}
