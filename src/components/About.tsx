import Img3 from '@/assets/img/2.jpg'
import Linha from '@/assets/img/linha.png'
import { Users } from 'lucide-react'
import { TbTargetArrow, TbCheckupList } from 'react-icons/tb'

import { FaRegHandshake } from 'react-icons/fa6'

export default function About() {
  return (
    <div className="flex flex-col mt-[70px] md:flex-row" id="about">
      <div className="mt-[50px] md:flex md:w-full md:bg-red-400">
        <img src={Img3} alt="#" width={450} />
      </div>
      <div className="space-y-7 md:grid md:grid-cols-2 md:w-[900px] md:bg-red-50">
        <div className="flex flex-col items-center justify-center md:absolute md:mt-[-70px] ">
          <h1
            className="text-[32px] font-bold m
          l-[20px] mt-[20px] text-center z-"
          >
            Sobre nós
          </h1>
          <img src={Linha} alt="Line" />
        </div>
        <div className="ml-[20px] flex flex-col items-center space-x-6">
          <div className="flex flex-row w-full items-center ml-10 mb-2">
            <Users size={60} color="#CC0D03" />
            <h1 className="text-[16px] font-bold ml-5">Quem Somos</h1>
          </div>
          <div>
            <p className="text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>
        <div className="ml-[20px] flex flex-col items-center space-x-6">
          <div className="flex flex-row w-full items-center ml-10 mb-2">
            <TbTargetArrow size={60} color="#CC0D03" />
            <h1 className="text-[16px] font-bold ml-5">Nossa Missão</h1>
          </div>
          <div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>

        <div className="ml-[20px] flex flex-col items-center space-x-6">
          <div className="flex flex-row w-full items-center ml-10 mb-2">
            <TbCheckupList size={60} color="#CC0D03" />
            <h1 className="text-[16px] font-bold ml-5">Produtos e Serviços</h1>
          </div>
          <div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
              explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
              sapiente dolorem ipsam consectetur recusandae! Animi praesentium
              mollitia odit qui ut?
            </p>
          </div>
        </div>
        <div className="ml-[20px] flex flex-col items-center space-x-6">
          <div className="flex flex-row w-full items-center ml-10 mb-2">
            <FaRegHandshake size={60} color="#CC0D03" />
            <h1 className="text-[16px] font-bold ml-5">
              Compromisso com o Cliente
            </h1>
          </div>
          <div>
            <p className="text-gray-400">
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
