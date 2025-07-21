// import React, { useState } from 'react'
import "./effect.css";

function Header() {
  // const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="relative flex items-center justify-center min-h-screen">
        <div className="container absolute opacity-70">
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="bubble">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

      <div className="container w-300 absolute flex justify-end opacity-75 hidden md:flex">
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
          <div className="bubble">
        <span />
        <span />
        <span />
        <span />
        <span />
          </div>
      </div>

        
    
        <div className="z-1 w-full flex items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            <ul className="my-30 flex flex-col gap-5 text-shadow-lg  font-medium tracking-wide items-center space-y-4 text-lg text-gray-200">
              {/* <li>
                <a
                  href="/"
                  className="hover:text-[1.61rem] hover:text-yellow-100 text-2xl transition-all"
                >
                  Anasayfa
                </a>
              </li> */}
              <li>
                <a
                  href="/sizdengelenler"
                  className="hover:text-[1.61rem] hover:text-yellow-100 text-2xl transition-all"
                >
                  Sizden Gelenler
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="hover:text-[1.61rem] hover:text-yellow-100 text-2xl transition-all"
                >
                  Ekippp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
