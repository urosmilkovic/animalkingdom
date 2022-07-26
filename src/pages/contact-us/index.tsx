import React from 'react';
import { Title } from 'components';
import { ContactUsPage } from 'features';
import { useLanguageContext } from 'context';

const ContactUs = () => {
  const { t } = useLanguageContext();

  return (
    <>
      <Title>{t`Contact us`}</Title>
      <ContactUsPage />
    </>
  );
};

export default ContactUs;
