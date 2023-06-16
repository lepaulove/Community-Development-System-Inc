import React from 'react'
import { motion } from 'framer-motion'

export default function WaveLine() {
  return (
    <div>
        <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: -1, position:'absolute', marginTop:355}}>
            <motion.path
            initial={{strokeOpacity: 0, pathLength:0, pathOffset:1}}
            animate={{strokeOpacity: .4, pathLength:1, pathOffset:0}}
            transition={{duration: 2}} 
            d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#326078" strokeOpacity=".10" strokeWidth="10"/>
        </svg>
        <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: -1, position:'absolute', marginTop:600}}>
              <motion.path
              initial={{strokeOpacity: 0, pathLength:0, pathOffset:1, rotateY:180}}
              animate={{strokeOpacity: .4, pathLength:1, pathOffset:0, rotateY:180}}
              transition={{duration: 2}} 
              d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#326078" strokeOpacity=".10" strokeWidth="10"/>
          </svg>
    </div>
  )
}

export function WaveLineMobile() {
    return (
      <div>
          <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: -1, position:'absolute', marginTop:255}}>
            <motion.path
            initial={{strokeOpacity: 0, pathLength:0, pathOffset:1}}
            animate={{strokeOpacity: .4, pathLength:1, pathOffset:0}}
            transition={{duration: 2}} 
            d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#326078" strokeOpacity=".20" strokeWidth="20"/>
        </svg>
        <svg viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: -1, position:'absolute', marginTop:500}}>
              <motion.path
              initial={{strokeOpacity: 0, pathLength:0, pathOffset:1, rotateY:180}}
              animate={{strokeOpacity: .4, pathLength:1, pathOffset:0, rotateY:180}}
              transition={{duration: 2}} 
              d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5" stroke="#326078" strokeOpacity=".20" strokeWidth="20"/>
          </svg>
      </div>
    )
  }
