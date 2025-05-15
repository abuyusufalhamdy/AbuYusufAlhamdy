import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-8">
      <ContactInfo />
      <ContactForm />
    </div>
  );
}