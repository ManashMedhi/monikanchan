import React from 'react'
import { motion } from 'motion/react'

const Animated = ({
  children,
  delay = 0,
  x = 50,
  y = 0,
  scale = 1,
  className,
  ...props
}) => {

  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
        scale
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 70,
        mass: 1
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Animated