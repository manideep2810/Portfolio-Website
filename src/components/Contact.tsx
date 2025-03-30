import React, { useState, useRef, FormEvent, ChangeEvent, Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
// Import EarthCanvas with error handling
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  // Add state for tracking if Earth component fails to render
  const [earthError, setEarthError] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your actual public key
    emailjs.init("EymnO6xykDzI1s-1W");
    console.log("EmailJS initialized");
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map the field names to the form state properties
    const fieldNameMap: Record<string, keyof typeof form> = {
      'from_name': 'name',
      'from_email': 'email',
      'message': 'message'
    };
    
    // Use the mapped name or the original name if no mapping exists
    const formField = fieldNameMap[name] || name as keyof typeof form;
    
    setForm({ ...form, [formField]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) {
      console.error("Form reference is null");
      setLoading(false);
      alert("Something went wrong. Please try again.");
      return;
    }

    // Create template parameters with explicit recipient
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: 'ManiDeep',
      to_email: 'manideepnaidugorle@gmail.com', // Your email address
      reply_to: form.email
    };

    console.log("Sending email with params:", templateParams);

    // Use send instead of sendForm
    emailjs
      .send(
        "service_kho0ncb",
        "template_fpdr7cm",
        templateParams,
        "EymnO6xykDzI1s-1W"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
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
          setLoading(false);
          alert(`Something went wrong. Please try again. Error: ${error.text || 'Unknown error'}`);
        }
      );
  };

  // Error boundary for 3D component
  const handleEarthError = () => {
    setEarthError(true);
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
          <Suspense fallback={
            <div className="w-full h-full bg-tertiary rounded-2xl flex items-center justify-center">
              <p className="text-secondary">Loading 3D Model...</p>
            </div>
          }>
            <EarthCanvas />
          </Suspense>
        )}
      </motion.div>
    </div>
  );
};

export default Contact; 