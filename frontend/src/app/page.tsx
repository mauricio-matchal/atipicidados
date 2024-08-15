"use client";

import Image from "next/image";
import logos from "../../public/images/logos.svg"
import { SlashedEyeIcon, OpenEyeIcon } from "../../public/icons/Icons";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  //const [rememberMe, setRememberMe] = useState(false);

  {/*useEffect(() => {
    // Carregar os dados do localStorage quando a página for carregada
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    const storedRememberMe = localStorage.getItem('rememberMe') === 'true';

    if (storedEmail && storedPassword && storedRememberMe) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberMe(storedRememberMe);
    }
  }, []);*/}

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  {/*const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('rememberMe');
    }

    
  };*/}

  return (
    <main className="flex min-h-screen">
      <div className="flex w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex bg-blue-100 w-[60%] flex-col justify-center items-center gap-10">
        <Image 
        src={logos}
        alt="logos atipicidades"
        />

        <form className="flex flex-col justify-center items-center gap-9">
          <h1>Acesse sua conta</h1>

          <div className="flex flex-col gap-[10px] w-full">
            <input
            className="login"
            type="text"
            name="email"
            placeholder="E-mail ou CPF"
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
            required />

            <div className="relative w-full">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="login"
                name="senha"
                placeholder="Senha"
                //value={password}
                //onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-300 rounded-r-md"
              >
                {passwordVisible ? <SlashedEyeIcon /> : <OpenEyeIcon />}
              </button>
            </div>

            <div className="flex px-[10px] text-[14px] justify-between w-full">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox hover:none"
                  //checked={rememberMe}
                  //onChange={(e) => setRememberMe(e.target.checked)}
                />
                Lembrar de mim
              </label>
              <Link href='/recuperarsenha'>
                <p className="font-medium cursor-pointer">Esqueceu a senha?</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <button
            type="submit"
            className="entrar botao">
              Entrar
            </button>

            <Link href='/precadastro'>
              <button
              className="botaoreverse w-full">
                Fazer o pré-cadastro
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
