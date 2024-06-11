import Img3 from '@/assets/img/2.jpg'
import Linha from '@/assets/img/linha.png'
import { Users } from 'lucide-react'
import { TbTargetArrow, TbCheckupList } from 'react-icons/tb'

import { FaRegHandshake } from 'react-icons/fa6'

export default function About() {
  return (
    <div className="flex flex-col mt-[70px] md:flex-row" id="about">
      <div className="mt-[50px] md:flex md:w-full">
        <img src={Img3} alt="#" className="object-contain w-[600px]" />
      </div>
      <div className="space-y-7 md:w-full md:flex md:flex-col ">
        <div className="flex flex-col items-center justify-center md:mt-[-70px] md:mr-[80px] mb-[90px]">
          <h1
            className="text-[32px] font-bold m
          l-[20px] mt-[80px] text-center "
          >
            Sobre nós
          </h1>
          <img src={Linha} alt="Line" />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-20 md:mr-[100px]">
          <div className="ml-[20px] flex flex-col space-x-6 mb-6">
            <div className="flex flex-row  items-center ml-10 mb-2">
              <Users size={60} color="#CC0D03" />
              <h1 className="text-[16px] font-bold ml-5">Quem Somos</h1>
            </div>
            <div>
              <p className="text-gray-400 ml-[25px] min-w-[250px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia explicabo aliquid voluptas quod quos, eaque.
              </p>
            </div>
          </div>
          <div className="ml-[20px] flex flex-col space-x-6 mb-6">
            <div className="flex flex-row  items-center ml-10 mb-2">
              <TbTargetArrow size={60} color="#CC0D03" />
              <h1 className="text-[16px] font-bold ml-5">Nossa Missão</h1>
            </div>
            <div>
              <p className="text-gray-400 ml-[25px] min-w-[250px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia explicabo aliquid voluptas quod quos, eaque.
              </p>
            </div>
          </div>

          <div className="ml-[20px] flex flex-col space-x-6 mb-6">
            <div className="flex flex-row items-center ml-10 mb-2">
              <TbCheckupList size={60} color="#CC0D03" />
              <h1 className="text-[16px] font-bold ml-5">
                Produtos e Serviços
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-[25px] min-w-[250px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia explicabo aliquid voluptas quod quos, eaque.
              </p>
            </div>
          </div>
          <div className="ml-[20px] flex flex-col space-x-6 mb-6">
            <div className="flex flex-row items-center ml-10 mb-2">
              <FaRegHandshake size={60} color="#CC0D03" />
              <h1 className="text-[16px] font-bold ml-5">
                Compromisso com o Cliente
              </h1>
            </div>
            <div>
              <p className="text-gray-400 ml-[25px] min-w-[250px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia explicabo aliquid voluptas quod quos, eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
