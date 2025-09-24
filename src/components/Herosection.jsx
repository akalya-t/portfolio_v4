import React, {useState,useRef,useEffect} from 'react'

const Herosection = () => {
 
    const typeTextRef = useRef(null);
    
      useEffect(() => {
        const phrase = "Akalya";
        const typeTextElement = typeTextRef.current;
    
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 150; // typing speed
        const deletingSpeed = 100; // deleting speed
        const delayBetween = 1500; // pause after full word
    
        function type() {
  if (!typeTextElement) return;

  if (isDeleting) {
    typeTextElement.textContent = phrase.slice(0, charIndex);
    charIndex--;

    if (charIndex < 1) {   // ✅ stop deleting when empty
      isDeleting = false;
      setTimeout(type, typingSpeed);
      return;
    }
  } else {
    typeTextElement.textContent = phrase.slice(0, charIndex);
    charIndex++;

    if (charIndex > phrase.length) {
      isDeleting = true;
      setTimeout(type, delayBetween); 
      return;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

    
type();
}, []

);
         
      return (
        <main className="flex w-screen h-screen flex-shrink justify-center flex-col items-center">
          <h1
            ref={typeTextRef}
            className=" lg:text-9xl lg:h-[9rem] md:text-9xl md:h-[9rem] text-9xl inline-block whitespace-nowrap relative after:content-['|'] after:absolute after:ml-2 after:animate-blink mb-5 bg-gradient-to-r from-purple-600 via-violet-400 to-violet-200 bg-clip-text text-transparent "
          ></h1> 

          <p className="text-4xl text-violet-300">Front-End Developer</p>
        </main>
      );
}

export default Herosection