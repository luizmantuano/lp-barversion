import Logo from '@/assets/img/logo.png'
import Linha from '@/assets/img/linha.png'

export default function Header() {
  return (
    <div className="flex flex-col justify-center bg-bg-banner bg-center bg-cover h-[600px] lg:h-[800px]">
      <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          className="flex absolute top-0 mt-[35px]"
        />
      </div>
      <div className="ml-5 mt-[140px]">
        <h1 className="text-white text-[15px]">
          ÓTIMA COMIDA E CERVEJA INCRÍVEL
        </h1>
        <h2 className="text-white text-[30px] max-w-[200px]">
          Um lugar de bom gosto
        </h2>
        <img src={Linha} alt="Linha" className="mt-5" />
      </div>
    </div>
  )
}
