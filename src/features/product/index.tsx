import React from 'react';
import {
  ProductPageMain,
  ProductWrapper,
  ProductImageHolder,
  ProductContent,
  ProductContentInner,
  ProductSection,
  ProductImage,
  ProductTableHolder,
  ProductTable,
  ProductTableElement,
  ProductTableRow,
  ProductTableCell,
  ProductInfos,
  ProductInfosBackground,
  ProductInfosImage,
} from 'features/product/styles';
import { useLanguageContext } from 'context';

const ProductPage = ({
  title,
  image,
  description,
  table,
  ingredients,
  usage,
  storage,
}: any) => {
  const { t } = useLanguageContext();

  return (
    <ProductPageMain>
      <ProductWrapper>
        <ProductContent>
          <ProductInfos>
            <ProductInfosBackground>
              <ProductInfosImage src={image} />
            </ProductInfosBackground>
            <ProductImageHolder>
              <ProductImage src={image} />
            </ProductImageHolder>
            <ProductTableHolder>
              <ProductTable>
                <ProductTableElement>
                  <ProductTableRow>
                    <ProductTableCell colSpan={2} main>
                      {title.toUpperCase()}
                    </ProductTableCell>
                  </ProductTableRow>
                  <ProductTableRow>
                    <ProductTableCell>Masa pasa</ProductTableCell>
                    <ProductTableCell>Potrebna kolicina hrane</ProductTableCell>
                  </ProductTableRow>
                  {table.map((x: any) => (
                    <ProductTableRow key={x[0]}>
                      <ProductTableCell>{x[0]}</ProductTableCell>
                      <ProductTableCell>{x[1]}</ProductTableCell>
                    </ProductTableRow>
                  ))}
                </ProductTableElement>
              </ProductTable>
            </ProductTableHolder>
          </ProductInfos>
          <ProductContentInner>
            <ProductSection
              title={t`${title}`}
              description={t`${description}`}
            />
            <ProductSection
              title={t`In 1 kg of product is:`}
              description={t`${ingredients}`}
            />
            <ProductSection
              title={t`Instruction manual`}
              description={t`${usage}`}
            />
            <ProductSection title={t`Storage`} description={t`${storage}`} />
          </ProductContentInner>
        </ProductContent>
      </ProductWrapper>
    </ProductPageMain>
  );
};

export const getStaticPaths = async () => ({
  paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
  fallback: false, // can also be true or 'blocking'
});

export default ProductPage;
