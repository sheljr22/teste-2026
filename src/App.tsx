/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Mail, Download, MessageCircle, ArrowRight, Instagram, Facebook, Globe } from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-maternity-bg selection:bg-maternity-soft">
      <main className="max-w-4xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Hero Section - Simple and Elegant */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-maternity-soft p-5 rounded-full inline-block mb-4 shadow-sm border border-white/50">
              <CheckCircle2 className="w-14 h-14 text-maternity-primary" />
            </div>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-6xl md:text-8xl text-maternity-primary leading-tight font-medium"
            >
              ¡Bienvenida a bordo, mamá!
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-maternity-primary/60 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Tu pedido ha sido procesado con éxito. Todo está listo para que comiences este hermoso camino con nosotras. 
              Pronto recibirás un correo electrónico con todos los detalles de tu acceso.
            </motion.p>
          </div>

          {/* Kiwify Upsell Block */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 py-10 px-6 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-maternity-soft shadow-xl shadow-maternity-primary/5 max-w-2xl mx-auto"
          >
            <div id="kiwify-upsell-jRFHpUQ" data-upsell-url="" data-downsell-url="" className="flex flex-col items-center">
              <button 
                id="kiwify-upsell-trigger-jRFHpUQ" 
                className="pulse-upsell transition-all"
                style={{
                  backgroundColor: '#E84B3C',
                  padding: '16px 24px',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '22px',
                  width: '100%',
                  maxWidth: '450px'
                }}
              >
                ✅ Sí, acepto esta oferta especial✅
              </button>
              <div 
                id="kiwify-upsell-cancel-trigger-jRFHpUQ" 
                className="hover:text-red-600 transition-colors"
                style={{
                  marginTop: '1.5rem',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textDecoration: 'underline',
                  fontFamily: 'sans-serif',
                  opacity: 0.6
                }}
              >
                ❌ No, me gustaría rechazar esta oferta❌
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-10">
             <div className="inline-block px-1 w-24 h-1 bg-maternity-accent/30 rounded-full" />
          </motion.div>

          {/* Minimalist Support Link */}
          <motion.div variants={itemVariants} className="pt-4">
            <p className="text-sm text-maternity-primary/40 uppercase tracking-widest font-medium">
              ¿Dudas? Escríbenos a <a href="mailto:arturaguiar884@gmail.com" className="hover:text-maternity-accent transition-colors">arturaguiar884@gmail.com</a>
            </p>
          </motion.div>
        </motion.div>
      </main>

      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-maternity-primary/40 font-medium">
          <p>© 2024 Maternidad Serena. Diseñado con amor para ti.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-maternity-primary transition-colors">Términos legales</a>
            <a href="#" className="hover:text-maternity-primary transition-colors">Política de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
