import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    console.log(price)
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_X3ILO4mS5dgAWvgg5WLK5bTg00OgAF8qVB";
    

    return (
        <StripeCheckout
        label='Pay Now'
        name= 'Collegemall OU.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={'Your total is '+ price}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;