'use client';
import NavBar from "@/components/NavBar";
import { useRouter } from 'next/navigation'; 
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const fetchChangePasswordData = async (id: string) => {
    try {
      const colaboradorData = localStorage.getItem('Colaborador');
      const colaborador = colaboradorData?.toLowerCase();
      console.log(colaboradorData);

      const response = await fetch(`http://localhost:3002/${colaborador + 'es'}/id/${id}/changePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to change password");
      }

      const data = await response.json();
      console.log(data); 

    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  const [changePasswordIsVisible, setChangePasswordIsVisible] = useState(true);
  const [oldPassword, setOldPassword] = useState(''); 
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false); // Estado para mostrar/ocultar a antiga senha
  const [showNewPassword, setShowNewPassword] = useState(false); // Estado para mostrar/ocultar a nova senha

  const handleChangePassword = () => {
    const id = localStorage.getItem('userID'); 
    if (id) {
      fetchChangePasswordData(id);
      console.log('Senha mudada com sucesso');
      router.push('/configuracoes');
    } else {
      console.error("User ID not found in localStorage");
    }
  };

  function leaveAtipicidades() {
    localStorage.clear(); 
    router.push('/'); 
  }

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen">
        <div className="px-[137px] pt-[30px]">
          <div className="flex flex-col space-y-10">
            <h2 className="mb-7">Configurações</h2>
          </div>    
        </div>
      </div>
    </main>
  );
}
