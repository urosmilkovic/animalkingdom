import React from 'react';
import { Hero } from 'components';
import {
  AboutUsPageContent,
  AboutUsPageContentLeft,
  AboutUsPageContentRight,
  AboutUsPageMain,
  AboutUsPageContentTitle,
  AboutUsPageContentNote,
  AboutUsPageContentText,
  AboutUsPageContentList,
  AboutUsPageImageHolder,
  AboutUsPageImage,
  AboutUsPageContentLeftWrapper,
} from 'features/about-us/styles';
import { useLanguageContext } from 'context';

const AboutUsPage = () => {
  const { t } = useLanguageContext();

  return (
    <AboutUsPageMain>
      <Hero
        title={t`ABOUT US`}
        description={t`Peek into our world`}
        background="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      />
      <AboutUsPageContent>
        <AboutUsPageContentLeft>
          <AboutUsPageContentLeftWrapper>
            <AboutUsPageImageHolder>
              <AboutUsPageImage src="http://animalkingdom.rs/wp-content/uploads/2020/06/pocetna_proizvodi1-1.png" />
            </AboutUsPageImageHolder>
          </AboutUsPageContentLeftWrapper>
        </AboutUsPageContentLeft>
        <AboutUsPageContentRight>
          <AboutUsPageContentTitle>{t`ANIMAL KINGDOM`}</AboutUsPageContentTitle>
          <AboutUsPageContentNote>
            {t`Animal Kingdom doo is a family company. Located in Lapovo near Kragujevac and engaged in the production of granulated dog food.`}
          </AboutUsPageContentNote>
          <AboutUsPageContentText>
            {t`The production is based on the concept of a healthy diet for your pets with the aim of eating quality food and developing properly. We use the highest quality raw materials that we analyze before use in order to maintain a constant quality of our products. We have successful years of business behind us and satisfied customers whose number is increasing day by day. We owe gratitude for our successes to our customers and we hope that their number will continue to increase, and we will, as before, justify their trust with constant quality and stable price. Our range includes products for dogs:`}
          </AboutUsPageContentText>
          <AboutUsPageContentList
            items={[
              'ANIMAL KINGDOM SUPER ACTIVE 30/20',
              'ANIMAL KINGDOM ACTIVE 29/16',
              'ANIMAL KINGDOM PUPPY 31/16',
              'ANIMAL KINGDOM ADULT 22/12',
              'ANIMAL KINGDOM CLASSIC MIX 18/10',
              'ANIMAL KINGDOM CLASSIC 17/9',
            ]}
          />
          <AboutUsPageContentText>
            {t`In the near future, we plan to enrich our production with an assortment for cats. Let your pets get the meal they deserve.`}
          </AboutUsPageContentText>
          <AboutUsPageContentText>Animal Kingdom D.O.O.</AboutUsPageContentText>
        </AboutUsPageContentRight>
      </AboutUsPageContent>
    </AboutUsPageMain>
  );
};

export default AboutUsPage;
