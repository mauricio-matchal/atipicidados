import {Card} from "@/components/Card";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="px-[137px] pt-[30px]">
        <div className="flex flex-col w-[340px] justify-between">
            <h2 className="mb-2">Nome da Unidade</h2>
            <button className="flex justify-start">
                <h4 className="mb-[32px]">Mais informações</h4>
            </button>
            <div className="relative w-full">
              <input 
              type="text" 
              className='input w-full h-[35px] mb-1'
              placeholder="Buscar membro..." />

              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-300 rounded-r-md"
              >
                Q
              </button>
            </div>

            <div className="flex justify-around">
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

        <div className="mt-[42px]">
            <h3 className="mb-4 ml-[5px]">Membros cadastrados</h3>

            <div>
              <Card />
            </div>
        </div>
      </div>
    </main>
  );
}
