import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

     const [cardError, setError]=useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || elements){
            return
        }
       const card = elements.getElement(CardElement);

       if(card === null){
           return;
       }
       const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
       });
   if(error){
    console.log(error);

    setError(error?.message || '');
   }
  
      
    }
    return (
        <>
               <form onSubmit={handleSubmit}>
        <CardElement />
        <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            
        </>
    );
};

export default CheckoutForm;