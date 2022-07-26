import { Title } from 'components';
import BlogPosts from 'constants/blogposts';
import { BlogSinglePage } from 'features';
import React from 'react';

const PostPage = ({ post, otherPosts }: any) => (
  <>
    <Title>{post.title}</Title>
    <BlogSinglePage {...post} otherPosts={otherPosts} />
  </>
);

export const getStaticProps = async ({ params }: any) => {
  const post = BlogPosts.find((x: any) => String(x.id) === params.id);
  const otherPosts = BlogPosts.filter((x: any) => String(x.id) !== params.id);
  return {
    props: { post, otherPosts },
  };
};
export const getStaticPaths = () => {
  const paths = BlogPosts.map((post: any) => ({
    params: { id: String(post.id), post },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
