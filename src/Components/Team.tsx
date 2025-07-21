import { Instagram, Music2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import mabelImg from "../assets/instapp/mabelpines.png";
import clarenceImg from "../assets/instapp/clarence.png";
import starImg from "../assets/instapp/starbutterfly.png";
import finieasImg from "../assets/instapp/finieas.png";
import daphneImg from "../assets/instapp/daphne.jpeg";

const teamMembers = [
  {
    name: "@mabelpineesss",
    url: "https://instagram.com/mabelpineesss",
    image: mabelImg,
    type: "instagram",
  },
  {
    name: "@clarenceturkiye",
    url: "https://instagram.com/clarenceturkiye",
    image: clarenceImg,
    type: "instagram",
  },
  {
    name: "@kelebekstarr",
    url: "https://instagram.com/kelebekstarr",
    image: starImg,
    type: "instagram",
  },
  {
    name: "@benfinieas",
    url: "https://instagram.com/benfinieas",
    image: finieasImg,
    type: "instagram",
  },
  {
    name: "@cartoondropp",
    url: "https://tiktok.com/@cartoondropp",
    image: daphneImg,
    type: "tiktok",
  },
];

function Team() {
  const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/";
  };
  return (
    <div className="">
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.button
        onClick={(e) => {
          handleBack(e);
        }}
        className="cursor-pointer w-10 h-10 md:w-12 md:h-12 p-2 border border-pink-500 text-white p-2 rounded-full shadow-md hover:bg-pink-500 transition-colors duration-300"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ backdropFilter: "blur(8px)" }}
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=" text-3xl font-extrabold mb-10 text-center text-white text-shadow-lg text-shadow-stone-500"
      >
        Ekibimiz
      </motion.h2>
      <motion.div
        className="flex flex-col space-y-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {teamMembers.map((member) => (
          <motion.a
            key={member.name}
            href={member.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-6 bg-gradient-to-r from-purple-700 via-gray-700 to-gray-900 shadow-lg rounded-3xl hover:shadow-xl hover:text-shadow-sm text-shadow-stone-700 transition-shadow duration-300 border border-gray-700"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{ touchAction: "manipulation" }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover mr-5 border-2 border-pink-500 shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-400 transition-all duration-200">
                {member.name}
              </span>
              {member.type === "instagram" ? (
                <Instagram className="w-9 h-9 text-pink-500 mt-2 sm:mt-0 sm:ml-4" />
              ) : (
                <Music2 className="w-9 h-9 text-pink-500 mt-2 sm:mt-0 sm:ml-4" />
              )}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
    </div>
  );
}

export default Team;
