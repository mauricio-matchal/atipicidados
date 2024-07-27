import Image from "next/image";
import logo from '../../public/logo.svg';
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="fundo w-full h-[76px] py-2 px-[97px]">
            <Link href='/home'>
                <Image 
                src={logo}
                alt="logo atipicidades"
                width={60}/>
            </Link>

            
        </div>
    )
}