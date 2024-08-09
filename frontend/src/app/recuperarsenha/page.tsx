
import Link from "next/link";

export default function Home() {
 
  return (
    <main className="flex min-h-screen">
      <div className="flex w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex bg-blue-100 w-[60%] flex-col justify-center items-center gap-9">
        <h1>Esqueci minha senha</h1>

        <div className="flex flex-col w-[520px] h-[200px] items-center">
            <h3>Tem certeza que deseja redefinir sua senha?</h3>
            
            <p className="mt-5 mb-11">Enviaremos uma nova senha aleatória para o e-mail cadastrado em sua conta. A senha enviada deve ser usada em seu próximo acesso. Cuidado, após a mudança da senha essa ação não poderá ser desfeita.</p>
            
            <Link href="/confirmacao">
                <button className="botao w-[286px]">Enviar nova senha</button>
            </Link>
        </div>
      </div>
    </main>
  );
}
