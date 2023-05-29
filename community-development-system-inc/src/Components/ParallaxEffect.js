// https://paulamcgeesims.staging.digital-dada.com/wp-content/uploads/2022/05/pexels-august-de-richelieu-4262424-scaled.jpg
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxEffect = () => {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 0], [0, -0]); // Adjust the range of scroll and transformation values as needed
  const scale = useTransform(scrollY, [0, 0], [1, 0.5]); // Adjust the range of scroll and transformation values as needed

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <motion.div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://paulamcgeesims.staging.digital-dada.com/wp-content/uploads/2022/05/pexels-august-de-richelieu-4262424-scaled.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            translateY: translateY,
            scale: scale
          }}
        />

        <motion.div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: '4rem',
            color: 'white',
            translateY: translateY,
          }}
        >
          {/* Add your text content here */}
          <h1>Parallax Effect</h1>
          <p>Scroll to see the parallax effect</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ParallaxEffect;
