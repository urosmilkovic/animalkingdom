import React, { useState } from 'react';
import { Hero, Post } from 'components';
import {
  BlogPageMain,
  BlogWrapper,
  BlogList,
  BlogAll,
  BlogListResults,
  BlogFilterSearch,
} from 'features/blog/styles';
import { useLanguageContext } from 'context';

const BlogPage = ({ posts }: any) => {
  const [search, setSearch] = useState('');

  const { t } = useLanguageContext();
  return (
    <BlogPageMain>
      <Hero
        title="BLOG"
        description={t`Peek into our world`}
        background="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      <BlogWrapper>
        <BlogFilterSearch
          fullWidth
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <BlogList>
          <BlogListResults variant="h2">{t`Search results`}</BlogListResults>
          <BlogAll>
            {posts
              .filter(
                (x: any) =>
                  [x.title, x.description.join(' ')].filter((y) =>
                    y.toLowerCase().includes(search.toLowerCase())
                  ).length
              )
              .map((x: any) => (
                <Post {...x} key={x.title} />
              ))}
          </BlogAll>
        </BlogList>
      </BlogWrapper>
    </BlogPageMain>
  );
};

export default BlogPage;
