import Image from "next/image";
import perfil from '../../public/images/perfil.png'
import Link from "next/link";

export function Card() {
  return (
    <div className="flex flex-col w-[276px] h-[93px] justify-around">
      <hr className="opacity-20" />

      <div className="flex flex-row items-center justify-center gap-4 my-[16.5px]">
        {/*colocar link na imagem pra redirecionar pro perfil da pessoa*/}
        <Image
          src={perfil}
          alt="foto de identificação colaborador"
          width={60}
          height={60} />

        <div className="flex flex-col gap-1">
          <p className="font-semibold">Nome e Sobrenome</p>
          <p className="font-medium text-[14px]">CPF</p>
          {/*cargo filtro*/}
          <p className="font-medium text-[14px]">Colaborador(a)</p>
        </div>
      </div>

      <hr className="opacity-20" />
    </div>
  )
}

export function CardUnidade() {
  return (
    <Link href='/unidades/nomedaunidade'>
      <div className="flex flex-col w-[276px] h-[93px] justify-around">
        <hr />

        <div className="flex flex-col gap-1 my-[16.5px]">
          <p className="font-semibold">Nome da Unidade</p>
          <p className="font-medium text-[14px]">Info</p>
          {/*cargo filtro*/}
          <p className="font-medium text-[14px]">Info 2</p>
        </div>

        <hr />
      </div>
    </Link>
  )
}