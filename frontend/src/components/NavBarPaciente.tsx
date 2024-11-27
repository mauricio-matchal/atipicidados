"use client";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg';
import { ConfigIcon } from "../../public/icons/Icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Paciente = {
    nome: string;
    rg: string;
    cpf: string;
}

interface NavBarProps {
    userEmail?: string | null;
    userName?: string | null;
}

export default function NavBar({ userEmail, userName }: NavBarProps) {
    const currentPath = usePathname().split('?')[0];
    const [userrEmail, setUserrEmail] = useState("");
    const [userID, setUserID] = useState("");
    const [pacienteInfo, setPacienteInfo] = useState<Paciente | null>(null);
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
    })

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
        <div className="w-full relative">
            <nav className="absolute flex items-center px-[10px] py-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex gap-8 font-semibold text-[14px]">
                    <li>
                        <Link href={homeLink} className={`flex items-center px-3 py-2.5 pt-2 ${currentPath.startsWith('/home') ? 'text-blue-800 font-bold bg-blue-800/15 rounded-lg' : 'text-gray-700'}`}>
                            Página inicial
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-between fundo w-full h-[76px] py-2 px-[97px]">
                <Link href={homeLink}>
                    <Image
                        src={logo}
                        alt="logo atipicidades"
                        width={60} />
                </Link>



                <div className="flex items-center gap-8">
                    <Link href='/meucadastro' className="flex gap-4 items-center">
                        <div className='flex flex-col items-end gap-[2px] font-medium text-[14px] leading-[17px]'>
                            <p>{pacienteInfo?.nome}</p>
                            <p className="opacity-60">{userrEmail}</p>
                        </div>
                        <div className="rounded-full w-11 h-11 bg-blue-800"></div>
                    </Link>

                    <Link href="/configuracoes">
                        <ConfigIcon />
                    </Link>

                    {/* <button onClick={() => { console.log(gerenteInfo) }}>Mostrar gerenteInfo</button> */}
                </div>
            </div>
        </div>
    )
}