import React from 'react';
import {
  BlogSinglePageMain,
  BlogSingleWrapper,
  BlogSingleContent,
  BlogSingleSimilar,
  BlogSingleImageHolder,
  BlogSingleImage,
  BlogSingleTitle,
  BlogSingleTitleHolder,
  BlogSingleTag,
  BlogSingleText,
  BlogSingleDate,
} from 'features/blog-single/styles';
import { Post } from 'components';
import { useLanguageContext } from 'context';

const BlogSinglePage = ({
  title,
  description,
  image,
  date,
  author,
  otherPosts = [],
}: any) => {
  const { t } = useLanguageContext();

  return (
    <BlogSinglePageMain>
      <BlogSingleWrapper>
        <BlogSingleContent>
          <BlogSingleImageHolder>
            <BlogSingleImage src={image} />
          </BlogSingleImageHolder>
          <BlogSingleTitleHolder>
            <BlogSingleTag>Author: {t`${author}`}</BlogSingleTag>
            <BlogSingleTitle variant="h3">{t`${title}`}</BlogSingleTitle>
          </BlogSingleTitleHolder>
          {description.map((x: string) => (
            <BlogSingleText>{t`${x}`}</BlogSingleText>
          ))}
          <BlogSingleDate>
            <span>{date}</span>
            <span>AnimalKingdom</span>
          </BlogSingleDate>
        </BlogSingleContent>
        <BlogSingleSimilar>
          {otherPosts.map((x: any) => (
            <Post type="small" key={x.id} {...x} />
          ))}
        </BlogSingleSimilar>
      </BlogSingleWrapper>
    </BlogSinglePageMain>
  );
};

export default BlogSinglePage;
