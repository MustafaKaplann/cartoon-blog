
function Giveaways() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <div className="">
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


    </div>
  )
}

export default Giveaways