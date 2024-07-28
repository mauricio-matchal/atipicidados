import Image from "next/image";
import NavBar from "@/components/NavBar";
import perfil from "../../../public/perfil_login.png";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="px-[137px] pt-[30px] flex flex-col gap-7">
        <h2>Meu cadastro</h2>

        <div className="flex flex-row gap-8 items-center">
            <Image 
            src={perfil}
            alt='foto de perfil <nome do usuario>'
            width={136}
            height={136}/>

            <div>
                <p className="titulo">Nome e Sobrenome:</p>
                <p>Jacob Jones</p>
            </div>

            <div>
                <p className="titulo">RG:</p>
                <p>XX.XXX.XXX-XX</p>
            </div>

            <div>
                <p className="titulo">CPF:</p>
                <p>XXX.XXX.XXX-XX</p>
            </div>

            <div>
                <p className="titulo">Data de nascimento:</p>
                <p>28/05/2004</p>
            </div>

            <div>
                <p className="titulo">Endereço:</p>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
        </div>

        <hr />

        <div className="gap-[18px]">
            <h3>Mãe</h3>

            <div className="flex flex-row gap-8 items-center">
                <div>
                    <p className="titulo">Nome e Sobrenome:</p>
                    <p>Esther Howard</p>
                </div>

                <div>
                    <p className="titulo">RG:</p>
                    <p>XX.XXX.XXX-XX</p>
                </div>

                <div>
                    <p className="titulo">CPF:</p>
                    <p>XXX.XXX.XXX-XX</p>
                </div>

                <div>
                    <p className="titulo">Data de nascimento:</p>
                    <p>28/05/2004</p>
                </div>

                <div>
                    <p className="titulo">Escolaridade:</p>
                    <p>Ensino Superior Completo</p>
                </div>

                <div>
                    <p className="titulo">Endereço:</p>
                    <p>6391 Elgin St. Celina, Delaware 10299</p>
                </div>
            </div>
        </div>

        <hr />

        <div className="gap-[18px]">
            <h3>Pai</h3>

            <div className="flex flex-row gap-8 items-center">
                <div>
                    <p className="titulo">Nome e Sobrenome:</p>
                    <p>Guy Hawkins</p>
                </div>

                <div>
                    <p className="titulo">RG:</p>
                    <p>XX.XXX.XXX-XX</p>
                </div>

                <div>
                    <p className="titulo">CPF:</p>
                    <p>XXX.XXX.XXX-XX</p>
                </div>

                <div>
                    <p className="titulo">Data de nascimento:</p>
                    <p>28/05/2004</p>
                </div>

                <div>
                    <p className="titulo">Escolaridade:</p>
                    <p>Ensino Superior Completo</p>
                </div>

                <div>
                    <p className="titulo">Endereço:</p>
                    <p>6391 Elgin St. Celina, Delaware 10299</p>
                </div>
            </div>
        </div>

        <hr />

        <h3>Mais informações</h3>


      </div>
    </main>
  );
}
