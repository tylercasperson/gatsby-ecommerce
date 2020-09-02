import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Products from '../components/products';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <h1>Gatsby Ecommerce Store</h1>
      <div>
        <Products />
      </div>
    </Layout>
  );
};

export default IndexPage;
