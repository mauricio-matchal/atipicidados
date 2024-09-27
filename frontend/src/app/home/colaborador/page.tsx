"use client";
import PlusIcon from "@/assets/icons/plus";
import SearchIcon from "@/assets/icons/search";
import { Card } from "@/components/Card";
import NavBarColaborador from "@/components/NavBarColaborador";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [colaboradorInfo, setColaboradorInfo] = useState<any | null>(null);

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
  }, []);

  const fetchColaboradorData = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3002/colaboradores/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch colaborador data");
      }
      const data = await response.json();
      setColaboradorInfo(data);
    } catch (error) {
      console.error("Error fetching colaborador data:", error);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      <NavBarColaborador />
      <p>
        CPF: {colaboradorInfo ? colaboradorInfo.cpf : "Carregando..."}
      </p>
      <p>
        RG: {colaboradorInfo ? colaboradorInfo.rg : "Carregando..."}
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

          <div className="flex gap-[10px]">
            <button className="botao">
              <Link href='/cadastro/paciente' className="flex flex-row gap-1 items-center">
                <PlusIcon style={{ color: 'var(--texto-botao)' }} />
                <p>Novo Cadastro</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="mt-[42px]">
          <Card />
        </div>
      </div>
    </main>
  );
}
