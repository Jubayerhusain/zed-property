import React from 'react';
import Banner from '../components/Contact/Banner';
import Question from '../components/Contact/Question';
import ContactForm from './../components/Shared/ContactForm';

const Contact = () => {
    return (
        <div className='px-4'>
            <Banner />
            <ContactForm />
            <Question></Question>
        </div>
    );
};

export default Contact;