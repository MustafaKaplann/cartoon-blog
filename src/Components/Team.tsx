import React from 'react';
import { Instagram, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: '@mabelpineesss', url: 'https://instagram.com/mabelpineesss', image: 'src/assets/instapp/mabelpines.png', type: 'instagram' },
  { name: '@clarenceturkiye', url: 'https://instagram.com/clarenceturkiye', image: 'src/assets/instapp/clarence.png', type: 'instagram' },
  { name: '@kelebekstarr', url: 'https://instagram.com/kelebekstarr', image: 'src/assets/instapp/starbutterfly.png', type: 'instagram' },
  { name: '@benfinieas', url: 'https://instagram.com/benfinieas', image: 'src/assets/instapp/finieas.png', type: 'instagram' },
  { name: '@cartoondropp', url: 'https://tiktok.com/@cartoondropp', image: 'src/assets/instapp/daphne.jpeg', type: 'tiktok' },
];

function Team() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-white text-shadow-lg text-shadow-stone-500">Ekibimiz</h2>
      <div className="flex flex-col space-y-6">
        {teamMembers.map(member => (
          <motion.a
            key={member.name}
            href={member.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-6 bg-gradient-to-r from-purple-700 via-gray-700 to-gray-900 shadow-lg rounded-3xl hover:shadow-xl hover:text-shadow-sm text-shadow-stone-700 transition-shadow duration-300 border border-gray-700"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{ touchAction: 'manipulation' }}
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-14 h-14 rounded-full object-cover mr-5 border-2 border-pink-500 shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="text-lg sm:text-xl font-semibold text-white group-hover:text-pink-400 transition-all duration-200">
                {member.name}
              </span>
              {member.type === 'instagram' ? (
                <Instagram className="w-9 h-9 text-pink-500 mt-2 sm:mt-0 sm:ml-4" />
              ) : (
                <Music2 className="w-9 h-9 text-pink-500 mt-2 sm:mt-0 sm:ml-4" />
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Team;
