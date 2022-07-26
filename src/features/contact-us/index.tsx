import React, { useState } from 'react';
import { Hero, Text } from 'components';
import {
  ContactUsPageContent,
  ContactUsPageMain,
  ContactUsPageInfo,
  ContactUsPageForm,
  ContactUsPageInput,
  ContactUsPageSubmit,
  ContactUsPageHeading,
  ContactUsPageInfoSingle,
  ContactUsPageInfoAll,
  ContactUsPageInfoSingleSvg,
} from 'features/contact-us/styles';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { useLanguageContext } from 'context';
import axios from 'axios';

const ContactUsPage = () => {
  const { t } = useLanguageContext();
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const sendEmail = async () => {
    await axios.post('https://formsubmit.co/lju@djspotdoo.com', state);
    setState({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <ContactUsPageMain>
      <Hero
        title="CONTACT US"
        description="Peek into our world"
        background="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      <ContactUsPageContent>
        <ContactUsPageInfo>
          <ContactUsPageHeading variant="h2">{t`Get in touch`}</ContactUsPageHeading>
          <Text>
            {t`If you are interested in our products and would like to find out some more information, one of our advisors is excited to help.`}
          </Text>
          <ContactUsPageInfoAll>
            <ContactUsPageInfoSingle>
              <ContactUsPageInfoSingleSvg>
                <Email />
              </ContactUsPageInfoSingleSvg>
              lju@djspotdoo.com
            </ContactUsPageInfoSingle>
            <ContactUsPageInfoSingle>
              <ContactUsPageInfoSingleSvg>
                <Phone />
              </ContactUsPageInfoSingleSvg>
              +381695196425
            </ContactUsPageInfoSingle>
            <ContactUsPageInfoSingle>
              <ContactUsPageInfoSingleSvg>
                <LocationOn />
              </ContactUsPageInfoSingleSvg>
              Kapetana Koče Anđelkovića 4, Lapovo 34220, Srbija
            </ContactUsPageInfoSingle>
          </ContactUsPageInfoAll>
        </ContactUsPageInfo>
        <ContactUsPageForm>
          <ContactUsPageHeading variant="h2">
            {t`Say something`}
          </ContactUsPageHeading>
          <ContactUsPageInput
            value={state.name}
            onChange={(e: any) => setState({ ...state, name: e.target.value })}
            variant="outlined"
            color="primary"
            label="Your name"
            fullWidth
          />
          <ContactUsPageInput
            value={state.email}
            onChange={(e: any) => setState({ ...state, email: e.target.value })}
            variant="outlined"
            color="primary"
            label="Your email"
            fullWidth
          />
          <ContactUsPageInput
            value={state.message}
            onChange={(e: any) =>
              setState({ ...state, message: e.target.value })
            }
            fullWidth
            variant="outlined"
            color="primary"
            label="Message"
            multiline
            rows={5}
          />
          <ContactUsPageSubmit
            variant="contained"
            color="primary"
            fullWidth
            onClick={sendEmail}
          >
            {t`Submit`}
          </ContactUsPageSubmit>
        </ContactUsPageForm>
      </ContactUsPageContent>
    </ContactUsPageMain>
  );
};

export default ContactUsPage;
