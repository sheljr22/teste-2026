/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Leaf, 
  Eye, 
  ShieldCheck, 
  Users, 
  Heart, 
  Coffee, 
  BookOpen, 
  Smartphone, 
  Mail, 
  Calendar,
  Compass,
  Sun,
  HandHelping,
  Flower2
} from "lucide-react";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-maternity-beige selection:bg-maternity-blue/30 text-maternity-ink overflow-x-hidden font-sans">
      {/* Hero Upsell - Focus on Intimacy */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-block bg-maternity-rose text-white px-8 py-4 rounded-2xl text-lg md:text-2xl font-black uppercase tracking-widest shadow-2xl shadow-maternity-rose/50 border-4 border-white/20 mb-6"
            >
              ⚠️ ¡Espera! No cierres esta página todavía
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl md:text-7xl leading-tight font-medium"
            >
              Recupera la <span className="italic text-maternity-accent">chispa</span> y la conexión con tu pareja
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-maternity-ink/70 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Ya tienes la guía de recuperación general. Pero, ¿estás lista para el desafío de la <span className="font-medium text-maternity-ink">intimidad después del bebé</span>? 
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Problem & The Solution */}
      <main className="max-w-4xl mx-auto px-6 space-y-24 pb-32">
        
        {/* Pain Points Grid */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Heart, title: "Miedo al dolor", text: "Es normal sentir ansiedad por el contacto físico inicial." },
            { icon: Coffee, title: "Fatiga extrema", text: "Cómo encontrar el deseo cuando lo único que quieres es dormir." },
            { icon: Users, title: "Distanciamiento", text: "Evita convertirte en solo 'compañeros de cuarto'." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-white/60 rounded-[2rem] border border-maternity-lavender/50 text-center space-y-4"
            >
              <item.icon className="w-10 h-10 mx-auto text-maternity-blue" />
              <h3 className="font-serif text-xl">{item.title}</h3>
              <p className="text-sm text-maternity-ink/60 font-light leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* Kiwify Upsell Widget */}
        <section>
          <div
            style={{ textAlign: "center" }}
            id="kiwify-upsell-jRFHpUQ"
            data-upsell-url=""
            data-downsell-url=""
          >
            <button
              id="kiwify-upsell-trigger-jRFHpUQ"
              style={{
                backgroundColor: "#e6b3b3",
                padding: "12px 16px",
                cursor: "pointer",
                color: "#000000",
                fontWeight: 600,
                borderRadius: "4px",
                border: "1px solid #e6b3b3",
                fontSize: "20px",
              }}
            >
              ✅ Sí, acepto esta oferta especial.
            </button>
            <div
              id="kiwify-upsell-cancel-trigger-jRFHpUQ"
              style={{
                marginTop: "1rem",
                cursor: "pointer",
                fontSize: "16px",
                textDecoration: "underline",
                fontFamily: "sans-serif",
              }}
            >
              ❌ No, me gustaría rechazar esta oferta.✅
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 px-6 text-center border-t border-maternity-lavender/20 opacity-40">
      </footer>
    </div>
  );
}
