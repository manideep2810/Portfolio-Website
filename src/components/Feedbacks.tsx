import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface CertificationCardProps {
  index: number;
  title: string;
  organization: string;
  date: string;
  credentialID: string;
  credentialURL: string;
  image: string;
}

const CertificationCard = ({
  index,
  title,
  organization,
  date,
  credentialID,
  credentialURL,
  image,
}: CertificationCardProps) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px] mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>

    <div>
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="mt-2 text-secondary text-[14px]">
        {organization} • {date}
      </p>
      <p className="mt-1 text-secondary text-[12px]">
        Credential ID: {credentialID}
      </p>
      <div className="mt-4">
        <a
          href={credentialURL}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 bg-purple-gradient text-white font-semibold rounded-lg inline-block"
        >
          Verify Credential
        </a>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div id="certifications" className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.title} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
};

export default Certifications; 