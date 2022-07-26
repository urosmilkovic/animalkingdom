import React from 'react';
import {
  ItemCard,
  ItemCardImage,
  ItemCardImageHolder,
  ItemCardImageHolderInner,
  ItemCardContent,
  ItemCardContentTitle,
  ItemCardButton,
  ItemCardContentDescription,
} from 'components/item/styles';
import { Card } from 'components';
import Link from 'next/link';
import { useLanguageContext } from 'context';

const Item = ({
  image = 'http://animalkingdom.rs/wp-content/uploads/2020/06/active_bag.png',
  title = 'SUPER BOX ACTIVE ASDAS DASD ASDAS asdas daS das das',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laborum. Dolor, aut nobis. Incidunt dicta consectetur facilis quidem itaque, nihil repellendus suscipit. Vitae assumenda, sed obcaecati accusamus iste eius natus.',
  link = '/',
}: any) => {
  const { t } = useLanguageContext();
  return (
    <Card style={{ width: '100%' }}>
      <ItemCard>
        <ItemCardImageHolder>
          <ItemCardImageHolderInner>
            <ItemCardImage src={image} />
          </ItemCardImageHolderInner>
        </ItemCardImageHolder>
        <ItemCardContent>
          <ItemCardContentTitle variant="h5">{t`${title}`}</ItemCardContentTitle>
          <ItemCardContentDescription>{t`${description}`}</ItemCardContentDescription>
          <Link href={link}>
            <ItemCardButton variant="contained" color="primary">
              {t`See more`}
            </ItemCardButton>
          </Link>
        </ItemCardContent>
      </ItemCard>
    </Card>
  );
};

export default Item;
