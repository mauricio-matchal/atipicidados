"use client";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg';
import { ConfigIcon } from "../../public/icons/Icons";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const currentPath = usePathname();

    return (
        <div className="w-full relative">
            <nav className="absolute flex items-center px-[10px] py-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ul className="flex gap-8 font-semibold text-[14px]">
                    <li>
                        <Link href='/home' className={currentPath === '/home' ? 'text-blue-800 font-bold' : ''}>
                            Página inicial
                        </Link>
                    </li>
                    <li>
                        <Link href='/unidades' className={currentPath === '/unidades' ? 'text-blue-800 font-bold' : ''}>
                            Unidades
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="flex justify-between fundo w-full h-[76px] py-2 px-[97px]">
                <Link href='/home'>
                    <Image
                        src={logo}
                        alt="logo atipicidades"
                        width={60} />
                </Link>



                <div className="flex items-center gap-8">
                    <Link href='/meucadastro' className="flex gap-4 items-center">
                        <div className='flex flex-col items-end gap-[2px] font-medium text-[14px] leading-[17px]'>
                            <p>Jacob Jones</p>
                            <p className="opacity-60">ticklishkoala607</p>
                        </div>
                        <div className="rounded-full w-11 h-11 bg-blue-800"></div>
                    </Link>

                    <Link href="/configuracoes">
                        <ConfigIcon />
                    </Link>
                </div>
            </div>
        </div>
    )
}