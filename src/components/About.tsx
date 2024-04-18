import Img3 from '@/assets/img/2.jpg'
import Linha from '@/assets/img/linha.png'

export default function About() {
  return (
    <div className="flex flex-col mt-[70px]">
      <div className="mt-[50px]">
        <img src={Img3} alt="#" width={450} />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-bold ml-[20px] mt-[20px] text-center">
            Sobre nós
          </h1>
          <img src={Linha} alt="" />
        </div>
        <div className="ml-[50px] mt-[50px]">
          <h1 className="text-[16px] font-bold">Quem Somos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
            sapiente dolorem ipsam consectetur recusandae! Animi praesentium
            mollitia odit qui ut?
          </p>
        </div>
        <div className="ml-[50px]">
          <h1 className="text-[16px] font-bold">Nossa Missão</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
            sapiente dolorem ipsam consectetur recusandae! Animi praesentium
            mollitia odit qui ut?
          </p>
        </div>
        <div className="ml-[50px]">
          <h1 className="text-[16px] font-bold">Produtos e Serviços</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            explicabo aliquid voluptas quod quos, eaque, itaque ab fugit hic
            sapiente dolorem ipsam consectetur recusandae! Animi praesentium
            mollitia odit qui ut?
          </p>
        </div>
        <div className="ml-[50px]">
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
  )
}
