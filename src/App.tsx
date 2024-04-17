import About from './components/About'
import { BackToTop } from './components/BackToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import WhatsApp from '@/assets/svg/whatsapp.svg'
import { ProductMockApi } from './mock/products'

function App() {
  return (
    <div>
      <Header />
      <BackToTop />
      <About />
      <Menu data={ProductMockApi.products} />
      <Contact />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.5589749178816!2d-43.685845923952876!3d-22.21886071364945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9929dc35461fa5%3A0x5e38cb464a878e55!2sMercearia%20tia%20Vera!5e0!3m2!1spt-PT!2sbr!4v1713359105310!5m2!1spt-PT!2sbr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-[48px] w-full"
        ></iframe>
      </div>
      <Footer />
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5500000000000&text=Quero%20fazer%20um%20agendamento%20hoje!"
          target="_blank"
          className="left-5 bottom-0 mb-5 fixed hover:scale-110"
          data-aos="zoom-in-up"
          data-aos-delay="400"
          rel="noreferrer"
        >
          <img src={WhatsApp} alt="Botao whatsapp" className="max-w-[60px]" />
        </a>
      </div>
    </div>
  )
}

export default App
