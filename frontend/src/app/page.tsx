import Image from "next/image";
import logo from "../../public/logo.svg"
import Link from "next/link";
//import { useState } from "react";
//import { useRouter } from "next/navigation";

export default function Home() {
  {/*const [formData, setFormData] = useState({ email: "", senha: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
     
    //coisas do themoviedb niny e alfabeto, mudar tudo ao integrar

    try {
      const response = await fetch("http://localhost:1895/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.senha,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Login bem sucedido");
        localStorage.setItem("token", result.token);
        router.push("/home");
      } else {
        setMessage(result.error || "Falha ao logar usuário");
      }
    } catch (error) {
      setMessage("Falha ao logar usuário");
    }
  };*/}

  return (
    <main className="flex min-h-screen">
      <div className="flex w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex bg-blue-100 w-[60%] flex-col justify-center items-center gap-10">
        <Image 
        src={logo}
        alt="logo atipicidades"
        width={120}/>

        <form className="flex flex-col justify-center items-center gap-9">
          <h1>Acesse sua conta</h1>

          <div className="flex flex-col gap-[10px] w-full">
            <input
            className="input"
            type="text"
            name="email"
            placeholder="E-mail ou CPF"
            required />

            <input
            className="input"
            type="text"
            name="senha"
            placeholder="Senha"
            required />

            <div className="flex px-[10px] text-[14px] justify-between w-full">
              <p className="font-regular">Lembrar de mim</p>
              <p className="font-medium cursor-pointer">Esqueceu a senha?</p>
            </div>
          </div>

          {/*link usado aqui so pro redirecionamento do bota, nao usar dessa forma*/}
          <Link href='/home'>
            <button
            type="submit"
            className="entrar">
              Entrar
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
