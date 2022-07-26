import React from 'react';
import {
  SectionMain,
  SectionTitle,
  SectionDescription,
  SectionActions,
} from 'components/section/styles';

const Section = ({
  title,
  description,
  actions,
  color = 'primary',
  ...props
}: any) => (
  <SectionMain {...props}>
    <SectionTitle variant="h2" color={color}>
      {title}
    </SectionTitle>
    <SectionDescription>{description}</SectionDescription>
    {actions && <SectionActions>{actions}</SectionActions>}
  </SectionMain>
);

export default Section;
