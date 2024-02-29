import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price* 100;
    const publishableKey = 'pk_test_51NAzgJSAQiGEAF6mLbAgP1YvqOl9bzs3ftEuLF8Af6NWqMQCVWf8UFwZvG8yuLyQmqzC1MANwroQCabEdP04yGrE00tBXTNlgq'

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout
          label='Pay Now'
          name='CRWN Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://sendeyo.com/up/d/f3eb2117da'
          description={`Your total is $${price}`}
          amount= {priceForStripe}
          panelLabel = 'Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;