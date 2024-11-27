
import Link from "next/link";
import { CheckIcon } from "../../../../public/icons/Icons";
export default function Home() {

  return (
    <main className="flex min-h-screen">
      <div className="flex w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex bg-blue-100 w-[60%] flex-col justify-center items-center">
        <CheckIcon />
        <h1 className='mt-[30px]'>Nova senha enviada com sucesso!</h1>
        <p className="font-medium mt-6 mb-11">Verifique sua caixa de entrada para mais informações.</p>
        <Link href="/">
          <button className="botao w-[286px]"> Voltar para a página de Login</button>
        </Link>
      </div>
    </main>
  );
}
