import Image from "next/image";
import perfil from '../../public/images/perfil.png'
import Link from "next/link";

interface CardProps {
  title?: string;
  cpf?: string;
  acesso?: string;
  endereco?: string;
  hasBorder?: boolean;
}

export function Card({ title, cpf, acesso, hasBorder = true }: CardProps) {
  function formatCPF(cpf: string): string {
    const cleaned = cpf.replace(/\D/g, '');
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  const borderClass = hasBorder ? 'border border-black/10' : '';

  return (
    <div className="flex flex-col items-start justify-around border border-black/10 bg-[#FFFFFF] hover:bg-blue-100 cursor-pointer rounded-xl">
      {/* <hr className="opacity-20" /> */}

      <div className="flex flex-row items-center justify-start gap-3 py-[18px] px-4 w-full">
        <Image
          src={perfil}
          alt="foto de identificação colaborador"
          width={60}
          height={60} />

        <div className="flex flex-col gap-px">
          <p className="font-semibold truncate w-[180px]">{title ?? "Nome desconhecido"}</p>
          <p className="font-medium text-[14px] text-[#000000]/80">{cpf ? formatCPF(cpf) : "Nenhum CPF"}</p>
          {/*cargo filtro*/}
          <p className="font-semibold text-[14px] text-[#000000]/80">{acesso === "Paciente" ? "Atendido(a)" : acesso === "Colaborador" ? "Colaborador(a)" : acesso ?? "Nenhum acesso"}</p>
        </div>
      </div>

      {/* <hr className="opacity-20" /> */}
    </div>
  )
}

export function CardUnidade({ title, endereco, hasBorder = true }: CardProps) {

  const borderClass = hasBorder ? 'border border-black/10' : '';

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