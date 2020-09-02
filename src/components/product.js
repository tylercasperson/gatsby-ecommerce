import React, { useState } from 'react';

const Product = ({ skus, product }) => {
  const stripe = window.Stripe(process.env.stripe_api_key);
  const [sku, setSku] = useState(skus[0].node.id);

  const placeOrder = (sku) => {
    stripe.redirectToCheckout({
      lineItems: [
        {
          price: sku,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:8000/success',
      cancelUrl: 'http://localhost:8000/cancel',
    });
  };

  return (
    <article>
      <img src='https://picsum.photos/200/300' alt='gatsbyEcommerceTshirt' />
      <h3>{product}</h3>
      <select value={sku} onChange={(e) => setSku(e.target.value)}>
        {skus.map((edge) => (
          <option key={edge.node.id} value={edge.node.id}>
            {edge.node.nickname}
          </option>
        ))}
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  );
};

export default Product;
