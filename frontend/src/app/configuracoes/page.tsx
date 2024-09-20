
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="px-[137px] pt-[30px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[340px]">
            <h2 className="mb-7">Configurações</h2>
          </div>    
        </div>
      </div>
    </main>
  );
}
