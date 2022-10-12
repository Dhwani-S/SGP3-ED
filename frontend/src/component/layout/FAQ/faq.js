import React from 'react';
import Accordion from './Accordion';
import './faq.css';

const Faq = () => {
  const accordionData = [
    {
      title: 'Do I need to create an account to place an order?',
      content: `Yes, you need to create an account to place any orders with us.
       It’s a way to provide users easy access to their order history.`
    },
    {
      title: 'What if I need to change my order after I hit “SUBMIT”?',
      content: `Once your order is placed, we start working on it right away. Unfortunately, this means we can’t make changes to an order once its placed. 
      In limited circumstances, we may be able to cancel orders if they have not shipped. Please contact us for assistance.`
    },
    {
      title: 'What do I do if something in my order is damaged or missing?',
      content: `In case you have received a damaged product or any ordered item is missing, kindly contact us. You can contact us by email(….@xyz.com) or call us(978xxxxxxx). 
      Please remember to include the order number, full shipping address and the product that is damaged/missing.`
    },
    {
      title: 'What is your return policy?',
      content: `You can return all purchases up to 30 days from the date you receive them.`
    },
    {
      title: 'What information do I need to checkout?',
      content: `While checking-out you will need to provide your full address and contact information and make a payment through the provided payment gateway. 
      Before proceeding for the payment please make sure your address and contact information provided is correct.`
    },
  ];

  return (
    <div className=''>
      <h1 className="faq-heading">FAQs</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Faq;