"use client";
import Image from "next/image";
import NavBar from "@/components/NavBarPaciente";
import perfil from "../../../../public/images/perfil.png";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";

export default function Home() {
    const [userrEmail, setUserrEmail] = useState("");
    const [userID, setUserID] = useState("");
    const [pacienteInfo, setPacienteInfo] = useState<any | null>(null);
    const [homeLink, setHomeLink] = useState("");

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        const id = localStorage.getItem("userID");
        const homeLink = localStorage.getItem("homeLink");
        if (email) setUserrEmail(email);
        if (id) {
            setUserID(id);
            fetchPacienteData(id);
        };
        if (homeLink) setHomeLink(homeLink);
    },[])

    const fetchPacienteData = async (id: any) => {
        try {
            const response = await fetch(`http://localhost:3002/pacientes/id/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch gerente data");
            }
            const data = await response.json();
            setPacienteInfo(data);
        } catch (error) {
            console.error("Error fetching gerente data:", error);
        }
    };

    return (
        <main className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-col gap-[20px] mx-[108px] mt-[33px] text-[14px]">
                <div className="flex gap-[20px]">
                    <div className="box w-3/5 flex flex-col gap-7">
                        <h2>Meu cadastro</h2>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-[20px]">
                                <Image
                                    src={perfil}
                                    alt='foto de perfil <nome do usuario>'
                                    width={68}
                                    height={68} />

                                <div>
                                    <p className="titulo">Nome e Sobrenome:</p>
                                    <p>{pacienteInfo ? pacienteInfo.nome : "Nome"}</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <p className="titulo">RG:</p>
                                        <p>{pacienteInfo ? pacienteInfo.rg : "RG"}</p>
                                    </div>

                                    <div>
                                        <p className="titulo">CPF:</p>
                                        <p>{pacienteInfo ? pacienteInfo.cpf : "CPF"}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div>
                                        <p className="titulo">Data de nascimento:</p>
                                        <p>{pacienteInfo ? pacienteInfo.nascimentodata : "Nascimento"}</p>
                                    </div>

                                    <div>
                                        <p className="titulo">Endereço:</p>
                                        <p>{pacienteInfo ? pacienteInfo.geral.endereco : "Endereço"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box w-2/5">
                        <h3>Profissionais que me acompanham</h3>

                        <div className="flex flex-col">
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>

                <div className="flex gap-[20px]">
                    <div className="gap-[18px] box w-full">
                        <h3>Mãe</h3>
                        <p className="titulo">{pacienteInfo ? pacienteInfo.mae.nome : "Nome da mãe"}</p>

                        <div className="flex flex-row gap-[18px] items-center">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">RG:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.rg : "RG da mãe"}</p>
                                </div>

                                <div>
                                    <p className="titulo">CPF:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.cpf : "CPF da mãe"}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">Data de nascimento:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.data : "Nascimento da mãe"}</p>
                                </div>

                                <div>
                                    <p className="titulo">Endereço:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.endereco : "Endereço da mãe"}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">Escolaridade:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.escolaridade : "Escolaridade da mãe"}</p>
                                </div>

                                <div>
                                    <p className="titulo">Contato:</p>
                                    <p>{pacienteInfo ? pacienteInfo.mae.telefone : "Telefone da mãe"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gap-[18px] box w-full">
                        <h3>Pai</h3>
                        <p className="titulo">{pacienteInfo ? pacienteInfo.pai.nome : "Nome do pai"}</p>

                        <div className="flex flex-row gap-[18px] items-center">
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">RG:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.rg : "RG do pai"}</p>
                                </div>

                                <div>
                                    <p className="titulo">CPF:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.cpf : "CPF do pai"}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">Data de nascimento:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.data : "Nascimento do pai"}</p>
                                </div>

                                <div>
                                    <p className="titulo">Endereço:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.endereco : "Endereço do pai"}</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="titulo">Escolaridade:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.escolaridade : "Escolaridade do pai"}</p>
                                </div>

                                <div>
                                    <p className="titulo">Contato:</p>
                                    <p>{pacienteInfo ? pacienteInfo.pai.telefone : "Telefone do pai"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
