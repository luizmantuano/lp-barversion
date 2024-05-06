import Img3 from '@/assets/img/2.jpg'
import Linha from '@/assets/img/linha.png'
import { Users } from 'lucide-react'
import { TbTargetArrow, TbCheckupList } from 'react-icons/tb'

import { FaRegHandshake } from 'react-icons/fa6'

export default function About() {
  return (
    <div className="flex flex-col mt-[70px]" id="about">
      <div className="mt-[50px]">
        <img src={Img3} alt="#" width={450} />
      </div>
      <div className="space-y-7">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-bold ml-[20px] mt-[20px] text-center">
            Sobre nós
          </h1>
          <img src={Linha} alt="Line" />
        </div>
        <div className="ml-[20px] flex items-center space-x-6">
          <div>
            <Users size={60} color="#CC0D03" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold">Quem Somos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>
        <div className="ml-[20px] flex items-center space-x-6">
          <div>
            <TbTargetArrow size={60} color="#CC0D03" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold">Nossa Missão</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>

        <div className="ml-[20px] flex items-center space-x-6">
          <div>
            <TbCheckupList size={60} color="#CC0D03" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold">Produtos e Serviços</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>
        <div className="ml-[20px] flex items-center space-x-6">
          <div>
            <FaRegHandshake size={60} color="#CC0D03" />
          </div>
          <div>
            <h1 className="text-[16px] font-bold">Compromisso com o Cliente</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
