import { Title } from 'components';
import { BlogPage } from 'features';
import BlogPosts from 'constants/blogposts';
import React from 'react';

const Blog = ({ posts }: any) => (
  <>
    <Title>Blog</Title>
    <BlogPage posts={posts} />
  </>
);

export const getStaticProps = async () => ({
  props: { posts: BlogPosts },
});

export default Blog;
