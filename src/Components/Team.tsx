// import React from 'react'
import TeamCards from "./TeamCards";
import "./effect.css";

function Team() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/"; 
  };
  return (
    <div className="">
                  <div className="container absolute top-50 opacity-70">
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


        <button onClick={(e)=>{handleClick(e)}} className=" rotate-90 absolute mt-8 ml-40 cursor-pointer bg-gray-300 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:bg-green-300 transition-colors duration-300">
        <svg
          className="w-5 h-10 text-black "
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
      </button>
    <div className="flex flex-col items-center justify-center min-h-screen ">
    

      <p className="my-10 text-white font-semibold text-4xl text-shadow-lg text-shadow-stone-500">
        BİZZİKO
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-2">
        <TeamCards
          name="Mabel Pines"
          username="mabelpineesss"
          image="./assets/instapp/mabelpines.png"
          link="https://instagram.com/mabelpineesss"
        />
        <TeamCards
          name="Clarence"
          username="clarenceturkiye"
          image="./assets/instapp/clarence.png"
          link="https://instagram.com/clarenceturkiye"
        />
        <TeamCards
          name="Star Butterfly"
          username="kelebekstarr"
          image="./assets/instapp/starbutterfly.png"
          link="https://instagram.com/kelebekstarr"
        />
        <TeamCards
          name="Finieas"
          username="benfinieas"
          image="./assets/instapp/finieas.png"
          link="https://instagram.com/benfinieas"
        />
      </div>
    </div>

    </div>


    // <>
    // <div className="flex items-center justify-center min-h-screen">

    //   {/* From Uiverse.io by Itskrish01 */}
    //   <div className="group transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
    //     <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-[350px]">
    //       <div className="absolute inset-0 z-0 overflow-hidden">
    //         <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
    //         <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500" />
    //         <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping" />
    //         <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000" />
    //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
    //       </div>
    //       <div className="p-8 relative z-10">
    //         <div className="flex flex-col items-center text-center">
    //           <div className="relative mb-6">
    //             <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping" />
    //             <div className="absolute inset-0 rounded-full border border-green-500/10 animate-pulse delay-500" />
    //             <div className="p-6 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-green-500/20">
    //               <div className="transform group-hover:rotate-180 transition-transform duration-700">
    //                 <img
    //                   src="./assets/bill.png"
    //                   alt="Mabel"
    //                   className="w-16 h-16 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300 filter drop-shadow-lg"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
    //             <p className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse">
    //               Mabel Pines
    //             </p>
    //           </div>
    //           <div className="space-y-1 max-w-sm">
    //             <p className="text-white font-semibold text-base transform group-hover:scale-105 transition-transform duration-300">
    //               INSTAGRAM
    //             </p>
    //             <button className="text-sm cursor-pointer group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-semibold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-15 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
    //               @mabelpineesss
    //             </button>
    //             {/* <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
    //               discover your music taste.
    //             </p> */}

    //           </div>
    //           <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />
    //           <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
    //             <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
    //             <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100" />
    //             <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    //       <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    //     </div>
    //   </div>
    //  </div>
    // </>
  );
}

export default Team;
