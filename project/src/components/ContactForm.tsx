import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mbjnbjkd");

  if (state.succeeded) {
    return (
      <motion.div
        className="rounded-lg bg-dark-800/50 dark:bg-dark-800/50 border border-primary-500/20 p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle className="mx-auto h-16 w-16 text-primary-500 mb-4" />
        <h3 className="text-2xl font-medium text-white dark:text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300 dark:text-gray-300">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="rounded-lg bg-dark-800/50 dark:bg-dark-800/50 border border-primary-500/20 p-6 md:p-8"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full px-4 py-2 rounded-md bg-dark-700 dark:bg-dark-700 text-white dark:text-white border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-2 rounded-md bg-dark-700 dark:bg-dark-700 text-white dark:text-white border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 rounded-md bg-dark-700 dark:bg-dark-700 text-white dark:text-white border border-dark-600 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md inline-flex items-center justify-center transition-colors disabled:bg-primary-800 disabled:cursor-not-allowed"
      >
        {state.submitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ContactForm;