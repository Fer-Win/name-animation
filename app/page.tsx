'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const languages = ['English', 'Spanish', 'French', 'German', 'Italian', 'Hindi', 'Bengali', 'Tamil', 'Telugu', 'Marathi'];
const translatedNames = {
  English: 'Ferwin',
  Spanish: 'Ferwin',
  French: 'Ferwin',
  German: 'Ferwin',
  Italian: 'Ferwin',
  Hindi: 'फर्विन',
  Bengali: 'ফারউইন',
  Tamil: 'ஃபெர்வின்',
  Telugu: 'ఫెర్విన్',
  Marathi: 'फर्विन'
};

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('English');

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
      setCurrentLanguage(randomLanguage);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <main className="main">
        <motion.h1
          className="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {translatedNames[currentLanguage]}
        </motion.h1>
      </main>
    </div>
  );
}
