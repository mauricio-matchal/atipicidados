"use client";
import TextInput from "@/components/TextInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSendNewPassword = async (email: string) => {
    try {
      // const response = await fetch("https//localhost:3002/", {
      //   method: "POST", // Changed to POST
      //   body: JSON.stringify(email), // Correctly formatted body
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // if (!response.ok) {
      //   throw new Error('Password sending failed');
      // }

      // const data = await response.json();
      // console.log(data);
      router.push("/confirmacao")
    } catch (error) {
      console.log("Erro no envio de nova senha", error)
    }
  }

  const revealEmail = () => {
    console.log(email);
  }

  return (
    <main className="flex min-h-screen">
      <div className="flex w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex bg-blue-100 w-[60%] flex-col justify-center items-center gap-9 pb-20">
        <h1 className="font-extrabold">Esqueci minha senha</h1>

        <div className="flex flex-col w-[520px] h-[200px] gap-5 items-center">
          <h3 className="text-xl">Tem certeza que deseja redefinir sua senha?</h3>
          <p className="text-sm pl-1">Enviaremos uma nova senha aleatória para seu e-mail. A senha nova enviada deve ser usada em seu próximo acesso. Cuidado, após a mudança da senha essa ação não poderá ser desfeita.</p>
          <TextInput
            placeholder="Insira o e-mail vinculado à sua conta"
            className="mt-3 w-[380px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={revealEmail}>Mostrar email</button>
          <Link href="/recuperarsenha/confirmacao">
            <button className="botao w-[250px] mt-9 font-medium" onClick={() => handleSendNewPassword(email)}>Enviar nova senha</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
