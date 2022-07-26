import { Title } from 'components';
import { ProductPage } from 'features';
import React from 'react';
import Packages from 'constants/packages';

const Product = ({ product }: any) => (
  <>
    <Title>Product</Title>
    <ProductPage {...product} />
  </>
);

export const getStaticProps = async ({ params }: any) => {
  const resultPackage = Packages.find((x: any) => String(x.id) === params.id);
  return {
    props: { product: resultPackage },
  };
};
export const getStaticPaths = () => {
  const paths = Packages.map((post: any) => ({
    params: { id: String(post.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Product;
