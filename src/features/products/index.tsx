import React, { useState } from 'react';
import { Hero, Item } from 'components';
import {
  ProductsPageMain,
  ProductsWrapper,
  ProductsFilter,
  ProductsFilterItem,
  ProductsList,
  ProductsAll,
  ProductsListResults,
  ProductsFilterItems,
  ProductsFilterSearch,
} from 'features/products/styles';
import { useLanguageContext } from 'context';
import allProducts from 'constants/packages';

const ProductsPage = () => {
  const { t } = useLanguageContext();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  return (
    <ProductsPageMain>
      <Hero
        title={t`PRODUCTS`}
        description={t`Peek into our world`}
        background="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      <ProductsWrapper>
        <ProductsFilter>
          <ProductsFilterSearch
            fullWidth
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
          />
          <ProductsFilterItems>
            <ProductsFilterItem
              onClick={() => setCategory('')}
              active={category === ''}
            >
              {t`All`}
            </ProductsFilterItem>
            <ProductsFilterItem
              onClick={() => setCategory('adult')}
              active={category === 'adult'}
            >
              {t`Adult`}
            </ProductsFilterItem>
            <ProductsFilterItem
              onClick={() => setCategory('puppy')}
              active={category === 'puppy'}
            >
              {t`Puppy`}
            </ProductsFilterItem>
            <ProductsFilterItem
              onClick={() => setCategory('active')}
              active={category === 'active'}
            >
              {t`Active`}
            </ProductsFilterItem>
          </ProductsFilterItems>
        </ProductsFilter>
        <ProductsList>
          <ProductsListResults variant="h2">{t`Search results`}</ProductsListResults>
          <ProductsAll>
            {allProducts
              .filter(
                (x: any) => x.category.includes(category) || category === ''
              )
              .filter(
                (x: any) =>
                  [x.title, x.description].filter((y) =>
                    y.toLowerCase().includes(search.toLowerCase())
                  ).length
              )
              .map((x: any) => (
                <Item {...x} key={x.id} />
              ))}
          </ProductsAll>
        </ProductsList>
      </ProductsWrapper>
    </ProductsPageMain>
  );
};

export default ProductsPage;
