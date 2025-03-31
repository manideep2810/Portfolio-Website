import React, { useState, useRef, FormEvent, ChangeEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

// Define EmailJS template parameters interface for type safety
interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<EmailFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [earthError, setEarthError] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("EymnO6xykDzI1s-1W");
    console.log("EmailJS initialized");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state properties
    const fieldNameMap: Record<string, keyof EmailFormData> = {
      'from_name': 'name',
      'from_email': 'email',
      'message': 'message'
    };
    
    const formField = fieldNameMap[name] || name as keyof EmailFormData;
    setForm({ ...form, [formField]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Log the form values for debugging
    console.log("Form values:", form);

    // Create template parameters with all necessary fields
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,  // Ensures you can reply directly
      to_name: 'Manideep'    // Your name as recipient
    };

    console.log("Sending with params:", templateParams);

    // Send email with updated parameters
    emailjs
      .send(
        "service_kho0ncb", 
        "template_yzipz8b",
        templateParams
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          if (error.text) console.error('Error details:', error.text);
          
          setLoading(false);
          alert(`Something went wrong. Please try again. Error: ${error.text || 'Unknown error'}`);
        }
      );
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='from_name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='from_email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-primary transition-colors duration-300'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {earthError ? (
          <div className="w-full h-full bg-tertiary rounded-2xl flex items-center justify-center">
            <p className="text-secondary">Contact me via the form</p>
          </div>
        ) : (
          <EarthCanvas />
        )}
      </motion.div>
    </div>
  );
};

export default Contact; 