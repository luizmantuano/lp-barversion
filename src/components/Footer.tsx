import { Facebook, Instagram, Twitter } from 'lucide-react'
import Logo from '../assets/img/logo.png'

export default function Footer() {
  const isActive = 'white'

  return (
    <footer className="bg-black h-[250px] items-center justify-center md:h-[120px]">
      <div>
        <div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-between">
          <img src={Logo} alt="Logo" width={120} />
          <div className="flex flex-row mt-6 gap-6 md:ml-[200px]">
            <div className="w-[30px] h-[30px] bg-[#CC0D03] rounded-full flex items-center justify-center text-white hover:text-[#CC0D03] hover:bg-white md:w-[35px] md:h-[35px]">
              <Facebook
                width={18}
                fill={isActive === 'white' ? 'white' : 'red'}
              />
            </div>
            <div className="w-[30px] h-[30px] bg-[#CC0D03] rounded-full flex items-center justify-center text-white hover:text-[#CC0D03] hover:bg-white md:w-[35px] md:h-[35px]">
              <Instagram width={18} />
            </div>
            <div className="w-[30px] h-[30px] bg-[#CC0D03] rounded-full flex items-center justify-center text-white hover:text-[#CC0D03] hover:bg-white md:w-[35px] md:h-[35px]">
              <Twitter width={18} />
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
