"use client";
import PlusIcon from "@/assets/icons/plus";
import SearchIcon from "@/assets/icons/search";
import { Card } from "@/components/Card";
import NavBarGerente from "@/components/NavBarGerente";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [gerenteInfo, setGerenteInfo] = useState<any | null>(null);
  const [pacientes, setPacientes] = useState<any[]>([]);
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
      fetchGerenteData(decodedID);
    }
    fetchPacientes();
    fetchGerentes();
    fetchColaboradores();
  }, []);

  const fetchGerenteData = async (id: string) => {
    try {
      const response = await fetch(`https://atipicidades-1.onrender.com/gerentes/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch gerente data");
      }
      const data = await response.json();
      setGerenteInfo(data);
    } catch (error) {
      console.error("Error fetching gerente data:", error);
    }
  };

  const fetchPacientes = async () => {
    try {
      const response = await fetch("https://atipicidades-1.onrender.com/pacientes/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch pacientes data");
      }
      const data = await response.json();
      console.log(data.pacientes);
      setPacientes(data.pacientes);
    } catch (error) {
      console.error("Error fetching pacientes data:", error);
    }
  };

  const fetchGerentes = async () => {
    try {
      const response = await fetch("https://atipicidades-1.onrender.com/gerentes/getall");
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
      const response = await fetch("https://atipicidades-1.onrender.com/colaboradores/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch colaboradores data");
      }
      const data = await response.json();
      console.log(data.colaboradores);
      setColaboradores(data.colaboradores);
    } catch (error) {
      console.error("Error fetching colaboradores data:", error);
    }
  };

  const allMembers = [
    ...pacientes.map((paciente) => ({ ...paciente, type: "Paciente" })),
    ...gerentes.map((gerente) => ({ ...gerente, type: "Gerente" })),
    ...colaboradores.map((colaborador) => ({ ...colaborador, type: "Colaborador" }))
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <NavBarGerente />
      <Suspense fallback={<p>Carregando informações do gerente...</p>}>
        <p className="text-[12px]">CPF: {gerenteInfo ? gerenteInfo.cpf : 'Carregando...'}</p>
        <p className="text-[12px]">RG: {gerenteInfo ? gerenteInfo.rg : 'Carregando...'}</p>
      </Suspense>

      <button onClick={() => { console.log(gerenteInfo) }}>Mostrar gerenteInfo</button>
      <div className="px-5 md:px-[84px] py-[30px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row w-full md:justify-between">
              <h2 className="mb-4 md:mb-7">Página inicial</h2>

              <div className="flex gap-[10px]">
                <button className="botao">
                  <Link href='/cadastro/colaborador' className="flex flex-row gap-1 items-center">
                    <PlusIcon style={{ color: 'var(--texto-botao)' }} />
                    <p>Colaborador</p>
                  </Link>
                </button>
                <button className="botao">
                  <Link href='/cadastro/unidade' className="flex flex-row gap-1 items-center">
                    <PlusIcon style={{ color: 'var(--texto-botao)' }} />
                    <p>Unidade</p>
                  </Link>
                </button>
                <button className="botao">
                  <Link href='/cadastro/gerente' className="flex flex-row gap-1 items-center">
                    <PlusIcon style={{ color: 'var(--texto-botao)' }} />
                    <p>Gerente</p>
                  </Link>
                </button>
              </div>
            </div>

            <h3 className="mt-[28px] mb-[22px]">Membros cadastrados</h3>
            <div className="relative w-[280px] md:w-[340px]">
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
            </div>
          </div>

        </div>

        <div className="mt-[28px] grid grid-cols-4 gap-2 w-full max-w-full">
          {allMembers.length > 0 ? (
            allMembers.map((member) => (
              <Card key={member.id} title={member.nome} cpf={member.cpf} acesso={member.type} />
            ))
          ) : (
            <p>Nenhum membro encontrado.</p>
          )}
        </div>
      </div>
    </main>
  );
}
