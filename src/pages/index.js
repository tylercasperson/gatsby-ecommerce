import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const stripe = window.Stripe(process.env.stripe_api_key);
  const [sku, setSku] = useState('price_1HMnPOD9PqAGwk1K8JzrFHIA');

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
    <Layout>
      <SEO title='Home' />
      <h1>Gatsby Ecommerce Store</h1>
      <div>
        <article>
          <img
            src='https://picsum.photos/200/300'
            alt='gatsbyEcommerceTshirt'
          />
          <h3>Gatsby Ecommerce T-Shirt</h3>
          <select value={sku} onChange={(e) => setSku(e.target.value)}>
            <option value='price_1HMnPOD9PqAGwk1K8JzrFHIA'>Small</option>
            <option value='price_1HMkrlD9PqAGwk1KHi3XFc4A'>Medium</option>
            <option value='price_1HMnOFD9PqAGwk1K3YQL4xY1'>Large</option>
          </select>
          <button onClick={placeOrder}>Buy Me</button>
        </article>
      </div>
    </Layout>
  );
};

export default IndexPage;
