'use client';
import NavBar from "@/components/NavBar";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();

  function leaveAtipicidades() {
    localStorage.clear(); 
    router.push('/'); 
  }

  return (
    <>
      <NavBar />
      <main className="flex flex-col min-h-screen">
        <div className="px-[137px] pt-[30px]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h2 className="mb-7">Configurações</h2>
              <button 
                className=" botao"
                onClick={leaveAtipicidades} 
                aria-label="Sair do Atipicidades"
              >
                SAIR DO ATIPICIDADES
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
