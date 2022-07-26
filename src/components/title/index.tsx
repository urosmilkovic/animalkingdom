import React from 'react';
import Head from 'next/head';
import Project from 'constants/project';
import { TitleType } from 'components/title/title';

const { prefix, sufix } = Project.title;

const Title = ({ children }: TitleType) => (
  <Head>
    <title>{[prefix, children, sufix].map((x) => String(x)).join('')}</title>
  </Head>
);

export default Title;
