import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function MotionTest(props) {
  return (
    <div>
        <motion.div
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y:0, transition:{delay:1, duration:2}}
            }}
            initial='hidden'
            animate='visible'>
            {props.children}
        </motion.div>
    </div>
  )
}

export default MotionTest