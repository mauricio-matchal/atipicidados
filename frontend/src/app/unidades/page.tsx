import {CardUnidade} from "@/components/Card";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="px-5 md:px-[84px] lg:px-[137px] pt-[30px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-full">
            <h2 className="mb-7">Unidades</h2>
            
            <div className="relative w-[280px] md:w-[340px]">
              <input 
              type="text" 
              className='input w-full h-[35px] mb-1'
              placeholder="Buscar unidades..." />

              <button
                type="button"
                className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-300 rounded-r-md"
              >
                Q
              </button>
            </div>

          </div>
        </div>

        <div className="mt-[42px]">
          <CardUnidade />
        </div>
      </div>
    </main>
  );
}
