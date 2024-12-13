import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [heroText, setHeroText] = useState('');
  const [subText, setSubText] = useState('');

  // Typewriter effect for hero text with color effect on Tamer
  useEffect(() => {
    const heroFullText = "Selam, Ben Tamer";
    if (heroText.length < heroFullText.length) {
      const timeout = setTimeout(() => {
        setHeroText(heroFullText.slice(0, heroText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
    // When hero text is complete, start sub text
    if (heroText === "Selam, Ben Tamer") {
      const subFullText = "Ben kendimi geliştirirken insanlara bir çok şey öğretmekten zevk duyuyorum. Her geçen gün yeni şeyler öğreniyorum ve bu beni çok mutlu ediyor. Sürekli yeni projeler üzerine çalışmak istiyorum.";
      if (subText.length < subFullText.length) {
        const timeout = setTimeout(() => {
          setSubText(subFullText.slice(0, subText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [heroText, subText]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {heroText.split('Tamer').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index === 0 && (
                  <span 
                    className='text-[#915EFF]' 
                    style={{
                      opacity: heroText.includes('Tamer') ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out'
                    }}
                  >
                    Tamer
                  </span>
                )}
              </React.Fragment>
            ))}
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* Subtext'i dört satıra bölelim */}
            <span className="block sm:inline">{subText.slice(0, 50)}</span>
            <span className="block sm:inline">{subText.slice(50, 100)}</span>
            <span className="block sm:inline">{subText.slice(100, 150)}</span>
            <span className="block sm:inline">{subText.slice(150, 200)}</span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
