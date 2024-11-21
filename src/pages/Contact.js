import React, { useState, useRef, useContext } from 'react';

// import images
import WomanImg from '../img/contact/woman.png';

// import motion
import { motion } from 'framer-motion';

// import transition
import { transition1 } from '../transitions';

// import context
import { CursorContext } from '../context/CursorContext'; 

const Contact = () => {
  const [formStatus, setFormStatus] = useState(''); // '' | 'success' | 'error'
  const [errors, setErrors] = useState({});
  const messageRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleInput = () => {
    const textarea = messageRef.current;
    textarea.style.height = 'auto'; 
    textarea.style.height = `${textarea.scrollHeight}px`; 
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name ist erforderlich';
    } else if (/[^a-zA-Z\s]/.test(data.name)) {
      errors.name = 'Name darf keine Sonderzeichen oder Zahlen enthalten';
    }

    if (!data.email.trim()) {
      errors.email = 'E-Mail-Adresse ist erforderlich';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errors.email = 'Ungültige E-Mail-Adresse';
    }

    if (!data.message.trim()) {
      errors.message = 'Nachricht ist erforderlich';
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://formspree.io/f/mgvwkzod', {
          method: 'POST',
          body: new FormData(event.target),
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          setFormStatus('success');
          event.target.reset(); // Reset form after successful submission
        } else {
          setFormStatus('error');
        }
      } catch (error) {
        setFormStatus('error');
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }} 
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }} 
      transition={transition1}
      className='section bg-white'>
      <div className='h-full mx-auto container'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div 
            initial={{ opacity: 0, y: '100%' }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }} 
            transition={transition1}
            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div>
          <div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt32 px-4'
          >
            <h1 className='h1'>Kontaktieren</h1>
            <p className='mb-12'> Ich freue mich über deine Nachricht.</p>
            <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input 
                  className={`outline-none border-b h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ${errors.name ? 'border-red-500' : 'border-b-primary'}`} 
                  type='text' 
                  name='name'
                  placeholder='Dein Name' 
                />
                {errors.name && <p className='text-red-500'>{errors.name}</p>}
                <input 
                  className={`outline-none border-b h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] ${errors.email ? 'border-red-500' : 'border-b-primary'}`} 
                  type='email'
                  name='email'
                  placeholder='Deine E-Mail' 
                />
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
              </div>
              <textarea 
                ref={messageRef}
                onInput={handleInput}
                className={`outline-none border-b bg-transparent font-secondary w-full pb-3 pl-3 placeholder:text-[#757879] resize-none overflow-hidden ${errors.message ? 'border-red-500' : 'border-b-primary'}`}
                name='message'
                placeholder='Deine Nachricht'
                rows={1} 
              />
              {errors.message && <p className='text-red-500'>{errors.message}</p>}

              <button 
                type='submit' 
                className='btn mb-[30px] mt-[30px] mx-auto lg:mx-0 self-start'
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                Senden
              </button>
            </form>
            {formStatus === 'success' && (
              <p className='mt-4 text-sm text-green-500'>Nachricht erfolgreich gesendet!</p>
            )}
            {formStatus === 'error' && (
              <p className='mt-4 text-sm text-red-500'>Fehler beim Senden der Nachricht. Bitte versuche es später erneut.</p>
            )}
          </div>
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }} 
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }} 
            transition={{transition: transition1, duration: 1.5 }}
            className='lg:flex-1'
          >
            <img src={WomanImg} alt='Portrait des Fotografen' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
