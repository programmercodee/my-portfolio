import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        I'm a passionate web developer with experience in building responsive and dynamic websites using modern tools like React, Tailwind, and more.
      </motion.p>
    </section>
  )
}
