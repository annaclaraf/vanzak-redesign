"use client"

import { useState, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, User, Mail, MessageSquare, FileText } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }

    if (serverError) {
      setServerError(null)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres."
    }

    if (!formData.email) {
      newErrors.email = "Email é obrigatório."
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, insira um email válido."
    }

    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = "Assunto deve ter pelo menos 5 caracteres."
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setServerError(data.error || "Ocorreu um erro ao enviar o formulário");
      }
    } catch (error) {
      console.error(error);
      setServerError("Não foi possível conectar ao servidor. Verifique sua conexão.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const errorVariants = {
    hidden: { opacity: 0, y: -10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2 },
    },
  }

  if (isSubmitted) {
    return (
      <section className="py-10 md:py-15">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-[#111827] rounded-lg shadow-xl border border-surface"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-4"
            >
              <CheckCircle size={64} className="text-primary" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              className="mb-2 text-3xl font-bold text-light"
            >
              Mensagem Enviada!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
              className="mb-8 text-muted"
            >
              Obrigado pelo contato. Responderemos o mais breve possível.
            </motion.p>

            <MagneticButton onClick={() => setIsSubmitted(false)} className="bg-transparent border border-primary text-primary px-8 py-3 rounded-md font-medium text-[14px] md:text-lg">
              Enviar Outra Mensagem
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 md:py-15">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="p-6 md:p-8 bg-[#111827] rounded-lg shadow-xl border border-surface"
        >
          <motion.h2 variants={itemVariants} className="mb-6 text-center text-3xl lg:text-5xl md:text-4xl font-bold">
            Entre em Contato
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <motion.div variants={itemVariants}>
              <div className="mb-1">
                <label htmlFor="name" className="flex items-center text-sm font-medium text-light">
                  <User size={16} className="mr-2 text-primary" />
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={`mt-1 block w-full px-3 py-2 bg-[#364153] border ${
                    errors.name ? "border-red-500" : "border-surface"
                  } rounded-md shadow-sm text-light placeholder-muted focus:outline-none focus:border-primary`}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-1 text-sm text-red-400 pl-2"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-1">
                <label htmlFor="email" className="flex items-center text-sm font-medium text-light">
                  <Mail size={16} className="mr-2 text-primary" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className={`mt-1 block w-full px-3 py-2 bg-[#364153] border ${
                    errors.email ? "border-red-500" : "border-surface"
                  } rounded-md shadow-sm text-light placeholder-muted focus:outline-none focus:border-primary`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-1 text-sm text-red-400 pl-2"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-1">
                <label htmlFor="subject" className="flex items-center text-sm font-medium text-light">
                  <FileText size={16} className="mr-2 text-primary" />
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que é esta mensagem?"
                  className={`mt-1 block w-full px-3 py-2 bg-[#364153] border ${
                    errors.subject ? "border-red-500" : "border-surface"
                  } rounded-md shadow-sm text-light placeholder-muted focus:outline-none focus:border-primary`}
                />
                <AnimatePresence>
                  {errors.subject && (
                    <motion.p
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-1 text-sm text-red-400 pl-2"
                    >
                      {errors.subject}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-1">
                <label htmlFor="message" className="flex items-center text-sm font-medium text-light">
                  <MessageSquare size={16} className="mr-2 text-primary" />
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Diga-nos o que você precisa..."
                  rows={4}
                  className={`mt-1 block w-full px-3 py-2 bg-[#364153] border ${
                    errors.message ? "border-red-500" : "border-surface"
                  } rounded-md shadow-sm text-light placeholder-muted focus:outline-none focus:border-primary`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      variants={errorVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-1 text-sm text-red-400 pl-2"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-light px-8 py-3 rounded-md font-medium text-[14px] md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center">
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <motion.span
                    initial={{ x: 0 }}
                    animate={isSubmitting ? { x: 0 } : {}}
                    whileHover={{ x: 4 }}
                    className="ml-2"
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                </span>
              </MagneticButton>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
