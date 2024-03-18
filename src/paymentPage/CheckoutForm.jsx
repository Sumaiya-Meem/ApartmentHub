/* eslint-disable react/prop-types */
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js'
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { ContextProvider } from '../Context/AuthProvider';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const CheckoutForm = ({memberData, month , rent}) => {

    const {user} = useContext(ContextProvider);
    const stripe = useStripe();
    const elements = useElements();
    const [error , setError] = useState();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');    

    useEffect(()=> {
         axiosSecure.post('/create-payment-intent', {price: rent})
         .then(res=> {
            setClientSecret(res.data.clientSecret)
         })
 
    },[axiosSecure, rent])

    

    // member's some data
    
    const floor = memberData.map(item=> item?.floorNo)
    const blockName = memberData.map(item=> item?.blockName)
    const apartmentNo =  memberData.map(item=> item?.apartmentNo)



const handleSubmit = async(event) =>{
       event.preventDefault();

       if(!stripe || !elements){
          return;
       }

       const card = elements.getElement(CardElement);

      if(card === null){
         return
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
      })

      if(error){
           console.log(error,'error card');
           setError(error.message);
      }else{
        console.log(paymentMethod,' card');
           setError('')
      }

   const {paymentIntent, error: cardError} = await stripe.confirmCardPayment(clientSecret , {
        payment_method: {
            card: card,
            billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous',
            }
        }
   });

   if(cardError){
    
       setError(cardError.message)
   }else{
        if(paymentIntent.status === 'succeeded'){
            
            

            const paymentInfo = {
                email: user?.email,
                rent,
                transactionId: paymentIntent.id,
                month,
                blockName,
                floor,
                apartmentNo,
                date: new Date() 
            };

        const res = await axiosSecure.post('payment', paymentInfo);
        if(res.data.acknowledged){
            toast.success('payment succeeded')
        }
       

        }    
   }


}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out my-5" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-600'>{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;