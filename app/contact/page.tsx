'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50">
        <Link href="/">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:border-[#14B8A6] transition-all duration-300 group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-[#14B8A6] transition-colors" />
            <span className="font-semibold text-sm sm:text-base text-gray-700 group-hover:text-[#14B8A6] transition-colors">
              Back to Home
            </span>
          </motion.button>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-12 md:mb-16 pt-12 sm:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4">Contact</h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-[#14B8A6]"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">GET IN TOUCH</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#F5F5F5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    Name<span className="text-[#14B8A6]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm sm:text-base placeholder:text-gray-400 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10 outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    Email<span className="text-[#14B8A6]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm sm:text-base placeholder:text-gray-400 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm sm:text-base placeholder:text-gray-400 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10 outline-none transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700">
                    Message<span className="text-[#14B8A6]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 rounded-lg sm:rounded-xl border-2 border-gray-200 bg-white text-gray-900 text-sm sm:text-base placeholder:text-gray-400 focus:border-[#14B8A6] focus:ring-4 focus:ring-[#14B8A6]/10 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl text-red-700 text-xs sm:text-sm"
                  >
                    {errorMessage}
                  </motion.div>
                )}

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 sm:p-4 bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl text-green-700 text-xs sm:text-sm flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
