"use client";
import PlusIcon from "@/assets/icons/plus";
import SearchIcon from "@/assets/icons/search";
import { Card } from "@/components/Card";
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

    if (email) {
      setUserEmail(decodeURIComponent(email));
    }
    if (id) {
      const decodedID = decodeURIComponent(id);
      setUserID(decodedID);
      fetchColaboradorData(decodedID);
    }
  }, [email, id]);

  const fetchColaboradorData = async (id: string) => {
    try {
      const response = await fetch(`https://atipicidades-1.onrender.com/colaboradores/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch colaborador data");
      }
      const data = await response.json();
      setColaboradorInfo(data);
    } catch (error) {
      console.error("Error fetching colaborador data:", error);
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

  // Seleciona a url certa caso o card seja de um paciente, gerente ou colaborador para enviar para a pagina certa
  const urlToMemberPage = (member: any) => {
    //p de paciente g de gerente e c de colaborador, dps recebe o id, e qual eh o acesso ("acs") da pessoa que esta 
    localStorage.removeItem("memberId");
    localStorage.removeItem("acs");

    localStorage.setItem("memberId", member.id);
    localStorage.setItem("acs", "c");
    if (member.type === "Paciente") {
      router.push(`/p`);
    };
    if (member.type === "Gerente") {
      router.push(`/g`);
    };
    if (member.type === "Colaborador") {
      router.push(`/c`);
    }
  }

  return (
    <><NavBarColaborador />
    <main className="flex flex-col min-h-screen">
      <NavBarColaborador />
      <p>
        CPF: {colaboradorInfo && colaboradorInfo.cpf}
      </p>
      <p>
        RG: {colaboradorInfo && colaboradorInfo.rg}
      </p>
      <button onClick={() => { console.log(colaboradorInfo) }}>Mostrar colaboradorInfo</button>
      <div className="px-[84px] py-[30px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[340px]">
            <h2 className="mb-7">Página inicial</h2>
            <div className="flex flex-col gap-2 mb-8">
              <h3>Minha unidade (Nome da Unidade)</h3>
              <Link href='/unidade'>
                <p className="font-semibold text-blue-800 cursor-pointer">Mais informações</p>
              </Link>
            </div>
            <div className="relative w-full">
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

            <div className="flex flex-wrap gap-3 md:gap-[18px]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                />
                Gerente
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                />
                Colaborador
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                />
                Atendido
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                />
                Autenticado
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                />
                Não autenticado
              </label>
            </div>
          </div>

        </div>

        <div className="mt-[28px] grid grid-cols-4 gap-2 w-full max-w-full">
          {filteredMembers.map((member) => (
            <button type="button" onClick={() => { urlToMemberPage(member) }} key={member.id} className="text-left">
              <Card key={member.id} title={member.nome} cpf={member.cpf} acesso={member.type} />
            </button>
          ))}
        </div>
      </div>
    </main></>
  );
}
