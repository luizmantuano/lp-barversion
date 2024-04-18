import Logo from '@/assets/img/logo.png'
import { Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [isActive, setIsActive] = useState('white')
  return (
    <footer className="bg-black h-[250px] flex flex-col items-center justify-center">
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" width={100} />
          <div className="flex flex-row mt-6 space-x-6">
            <div className="w-[30px] h-[30px] bg-[#CC0D03] rounded-full flex items-center justify-center text-white hover:text-[#CC0D03] hover:bg-white">
              <Facebook width={18} fill={isActive ? 'white' : 'red'} />
            </div>
            <div className="w-[30px] h-[30px] bg-[#CC0D03] rounded-full flex items-center justify-center text-white hover:text-[#CC0D03] hover:bg-white">
              <Instagram width={18} />
            </div>
          </div>
          <p className="text-white max-w-[290px] text-center mt-6">
            © Copyright 2024. Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
