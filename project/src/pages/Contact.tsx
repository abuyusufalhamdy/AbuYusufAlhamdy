import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { AtSign, MapPin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-3 font-display">
          Contact
        </h1>
        <p className="text-gray-300 dark:text-gray-300 mb-4">
          Get in touch with Abu Yusuf Alhamdy
        </p>
        <div className="h-1 w-20 bg-primary-500/30 rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-xl font-medium text-white dark:text-white mb-4">
              Send a Message
            </h2>
            <p className="text-gray-300 dark:text-gray-300 mb-6">
              Feel free to reach out with any questions, feedback, or inquiries. I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                  <AtSign className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-400">Email</h3>
                  <p className="text-gray-300 dark:text-gray-300">abuyusufalhamdy@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-400">Response Time</h3>
                  <p className="text-gray-300 dark:text-gray-300">Usually within 48 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-500/10 flex items-center justify-center mr-3">
                  <MapPin className="h-5 w-5 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-400">Youtube Channel</h3>
                  <a 
                    href="https://www.youtube.com/channel/UCoXzWPTne8dHYrftHpdIopw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    Abu Yusuf Alhamdy Channel
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;