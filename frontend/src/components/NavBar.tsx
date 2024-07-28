import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.svg';

export default function NavBar() {
    return (
        <div className="flex justify-between fundo w-full h-[76px] py-2 px-[97px]">
            <Link href='/home'>
                <Image 
                src={logo}
                alt="logo atipicidades"
                width={60}/>
            </Link>

            <nav className="flex items-center px-[10px] py-[10px]">
                <ul className="flex gap-8 font-semibold text-[14px]">
                    <li>
                        <Link href='/home'>Página inicial</Link>
                    </li>
                    <li>
                        <Link href='/unidades'>Unidades</Link>
                    </li>
                    <li>
                        <Link href='/metricas'>Métricas</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-[90px]">
                <Link href='/meucadastro'>
                    <div className='flex flex-col items-end gap-[2px] font-medium text-[14px]'>
                        <p>Jacob Jones</p>
                        <p className="opacity-60">ticklishkoala607</p>
                    </div>
                </Link>

                <p>config</p>
            </div>
        </div>
    )
}