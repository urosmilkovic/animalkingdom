import React from 'react';
import {
  PostCard,
  PostCardImage,
  PostCardImageHolder,
  PostCardImageHolderInner,
  PostCardContent,
  PostCardContentTitle,
  PostCardButton,
  PostCardContentDescription,
} from 'components/post/styles';
import { Card } from 'components';
import Link from 'next/link';
import { useLanguageContext } from 'context';

const Post = ({ image, title, description, link, type = 'large' }: any) => {
  const { t } = useLanguageContext();

  return (
    <Card style={{ width: '100%' }}>
      <PostCard type={type}>
        <PostCardImageHolder>
          <PostCardImageHolderInner>
            <PostCardImage src={image} />
          </PostCardImageHolderInner>
        </PostCardImageHolder>
        <PostCardContent>
          <PostCardContentTitle variant="h4">{t`${title}`}</PostCardContentTitle>
          <PostCardContentDescription>
            {description.map((x: string) => t`${x}`).join(' ')}
          </PostCardContentDescription>
          <Link href={link}>
            <PostCardButton variant="outlined" color="default">
              {t`See more`}
            </PostCardButton>
          </Link>
        </PostCardContent>
      </PostCard>
    </Card>
  );
};

export default Post;
