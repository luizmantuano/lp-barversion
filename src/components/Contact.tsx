import Linha from '@/assets/img/linha.png'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <div className="mt-[90px]">
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[13px]">ONDE NOS ENCONTRAR</p>
        <h1 className="text-[32px]">Contate-nos</h1>
        <img src={Linha} alt="linha" />
      </div>
      <div className="mt-[30px]">
        <p className="max-w-[455px] ml-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          repellendus nostrum suscipit. Alias voluptates id tenetur unde cumque
          nihil sunt inventore! Quo adipisci eius saepe, voluptatibus sint
          maiores laborum similique.
        </p>
      </div>
      <div className="mt-[20px]">
        <h1 className="ml-4 font-bold">Localização</h1>
        <div className="ml-3 space-y-3 mt-3">
          <div className="flex flex-row">
            <MapPin color="#CC0D03" />
            <p className="text-gray-400 ml-4">
              Rua Dev Testando 105, Rio de Janeiro
            </p>
          </div>
          <div className="flex flex-row ml-1">
            <Phone width={20} color="#CC0D03" />
            <p className="text-gray-400 ml-4">
              Cassio e Júnior : (00) 0000-0000
            </p>
          </div>
          <div className="flex flex-row ml-1">
            <Clock width={20} color="#CC0D03" />
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-400 ml-4">
                <strong>Segunda a Sábado:</strong> 7h ás 20h
              </p>
              <p className="text-gray-400 ">
                <strong>Domingo:</strong> 7h ás 12h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
