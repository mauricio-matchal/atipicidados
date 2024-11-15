"use client";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg';
import { ConfigIcon } from "../../public/icons/Icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Gerente = {
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
    const [gerenteInfo, setGerenteInfo] = useState<Gerente | null>(null);
    const [homeLink, setHomeLink] = useState("");
    const [nome, setNome] = useState("");

    useEffect(() => {
        const email = localStorage.getItem("userEmail");
        const id = localStorage.getItem("userID");
        const homeLink = localStorage.getItem("homeLink");
        const nome = localStorage.getItem("userNome");
        if (email) setUserrEmail(email);
        if (id) {
            const decodedID = decodeURIComponent(id);
            setUserID(decodedID);
            fetchGerenteData(decodedID);
        };
        if (nome) setNome(nome);
        if (homeLink) setHomeLink(homeLink);
    }, [])

    const fetchGerenteData = async (id: any) => {
        try {
            const response = await fetch(`https://atipicidades-1.onrender.com/gerentes/id/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch gerente data");
            }
            const data = await response.json();
            setGerenteInfo(data);
        } catch (error) {
            console.error("Error fetching gerente data:", error);
        }
    };

    return (
        <div className="w-full relative">
            <nav className="absolute flex items-center px-[10px] py-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex gap-4 font-semibold text-[14px]">
                    <li className={`relative`}>
                        <Link href={homeLink} className={`flex items-center px-3 py-2.5 pt-2 ${currentPath.startsWith('/home') ? 'text-blue-800 font-bold bg-blue-800/15 rounded-lg' : 'text-gray-700'}`}>
                            Página inicial
                        </Link>
                    </li>
                    <li className={`relative`}>
                        <Link href='/unidadesgerente' className={`flex items-center px-3 py-2.5 pt-2 ${currentPath === '/unidadesgerente' ? 'text-blue-800 font-bold bg-blue-800/15 rounded-lg' : 'text-gray-700'}`}>
                            Unidades
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
                            <p>{gerenteInfo?.nome}</p>
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