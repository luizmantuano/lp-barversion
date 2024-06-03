import { Search, Menu } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useState } from 'react'
import Line from '@/assets/img/linha.png'
import Logo from '@/assets/img/logo.png'

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ): void => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <header id="home">
        <nav className="flex items-center justify-between shadow-xl w-full bg-white transition-all p-4 fixed">
          <div>
            <a
              href="#"
              className="flex items-center text-[#CC0D03] size-3 font-extrabold w-[250px] text-[25px] gap-3"
            >
              <img src={Logo} alt="Logo" width={80} height={80} />
              Bar Version
            </a>
          </div>
          <ul className="items-center gap-20 mr-10 hidden menu-break:flex">
            <li className="nav-item">
              <a
                href="#home"
                className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                onClick={(e) => handleSmoothScroll(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                onClick={(e) => handleSmoothScroll(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#menu"
                className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                onClick={(e) => handleSmoothScroll(e, 'menu')}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                Contact
              </a>
            </li>
            <Search className="cursor-pointer size-6 mr-[100px]" />
          </ul>

          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="menu-break:hidden"
          >
            <Menu className="cursor-pointer" />
          </button>
        </nav>
      </header>
      <main>
        <Sheet open={menuIsOpen} onOpenChange={setMenuIsOpen}>
          <SheetContent className="flex items-center justify-center w-[200px] h-[320px] rounded-2xl">
            <ul className="space-y-10">
              <li>
                <a
                  href="#home"
                  className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                  onClick={(e) => {
                    closeMenu()
                    handleSmoothScroll(e, 'home')
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                  onClick={(e) => {
                    closeMenu()
                    handleSmoothScroll(e, 'about')
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                  onClick={(e) => {
                    closeMenu()
                    handleSmoothScroll(e, 'menu')
                  }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-900 text-[17px] font-medium transition-all hover:text-[#CC0D03]"
                  onClick={(e) => {
                    closeMenu()
                    handleSmoothScroll(e, 'contact')
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
        <section
          id="home"
          className="flex justify-center h-screen bg-bg-banner bg-center bg-cover menu-break:flex menu-break:justify-center menu-break:items-center lg:flex lg:justify-around 3xl:flex 3xl:justify-around"
        >
          <div className="flex flex-col justify-center items-start mt-[20px] xl:w-[950px] lg:m-[40px] lg:items-start w-full ml-9 ">
            <h1 className="text-[18px] text-white font-extrabold text-center mobile-m:text-[28px] mobile-l:text-[30px] md:text-[40px] md:mb-2 md:mt-[40px] menu-break:text-2xl menu-break:mb-4 menu-break:font-extrabold xl:text-[25px] xl:text-start 3xl:text-[30px] 3xl:mb-4">
              ÓTIMA COMIDA E CERVEJA INCRÍVEL
            </h1>
            <h2 className="text-start text-[40px] leading-[40px] mb-4 font-extrabold text-white mobile-m:text-[30px] mobile-l:text-[40px] mobile-l:leading-[45px] md:text-[60px] md:leading-[59px] menu-break:text-[50px] xl:text-[69px] xl:text-start lg:text-start">
              Um lugar de <br />
              bom gosto
            </h2>
            <img src={Line} alt="line" className="mt-3" />
          </div>
        </section>
      </main>
    </div>
  )
}
