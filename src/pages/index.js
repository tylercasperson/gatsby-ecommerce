import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const stripe = window.Stripe(process.env.stripe_api_key);

  const placeOrder = (item) => {
    stripe.redirectToCheckout({
      lineItems: [
        {
          price: item,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:8000/',
      cancelUrl: 'http://localhost:8000/',
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
          <button onClick={() => placeOrder('price_1HMkrlD9PqAGwk1KHi3XFc4A')}>
            Buy Me
          </button>
        </article>
      </div>
    </Layout>
  );
};

export default IndexPage;
