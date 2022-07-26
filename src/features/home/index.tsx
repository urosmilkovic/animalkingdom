import React from 'react';
import { Hero, PackagePreview, Button, Image, Heading } from 'components';
import {
  HomePageMain,
  HomePageNewBags,
  HomePageNewBagsImage,
  HomePageNewBagsButton,
  HomePagePackages,
} from 'features/home/styles';
import { useLanguageContext } from 'context';

const HomePage = () => {
  const { t } = useLanguageContext();

  return (
    <HomePageMain>
      <Hero
        title={t`ANIMAL KINGDOM`}
        description={t`Peek into our world`}
        background="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        isBig
      />
      <HomePageNewBags>
        <HomePageNewBagsImage>
          <Image src="http://animalkingdom.rs/wp-content/uploads/2021/02/new_bag_package_small.png" />
        </HomePageNewBagsImage>
        <Heading variant="h2">
          {t`CHOOSE THE PERFECT COMBINATION FOR YOUR PET`}
        </Heading>
        <HomePageNewBagsButton
          variant="contained"
          color="primary"
          href="/products"
        >
          {t`Learn more`}
        </HomePageNewBagsButton>
      </HomePageNewBags>
      <HomePagePackages>
        <PackagePreview
          color="warning"
          image="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          title={t`PUPPY NUTRITION`}
          description={t`It is very important how the puppy develops, we need to assess his need for food well. What is also important and should take into account the diversity of breeds and how much the puppy is able to digest food. Complete food, dry or in soup, is recommended, with the puppy best regulating his daily consumption.`}
          bagImage="https://img.bazzar.cloud/BnAiZ-E/rs:fit:1000:1000:1:1:ce/t:0/fn:puppy_20kg_l/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L01YWGZKb3VFTjky/dk10YzhhbXZldkVn/bg"
          actions={[
            <Button color="warning" variant="contained" href="/products/2">
              {t`Learn more`}
            </Button>,
          ]}
        />
        <PackagePreview
          color="success"
          image="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          title={t`ADULT DOG NUTRITION`}
          description={t`For adult dogs, the diet should maintain weight with good digestibility of food. Fat should not be given excessively to the dog. If the dog is not overly active, one should take care and achieve the state of overall health, avoid the tendency towards obesity, which is very common in dogs.`}
          bagImage="https://img.bazzar.cloud/5YdiZXQ/rs:fit:1000:1000:1:1:ce/t:0/fn:adult_20kg_r/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L1ZHeEdCRHFtV0hG/amUzVmN6WHZCTkc0/QQ"
          actions={[
            <Button color="success" variant="contained" href="/products/3">
              {t`Learn more`}
            </Button>,
          ]}
        />
        <PackagePreview
          color="error"
          image="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title={t`NUTRITION OF AN ACTIVE DOG`}
          description={t`Energy intake in active dogs depends on the type of dog, dog activity, time, etc. All intensely active dogs require a diet rich in calories and nutrients. Active dogs require 1.5 to 2.5 times more energy than ordinary dogs.`}
          bagImage="https://img.bazzar.cloud/AzLqANE/rs:fit:1000:1000:1:1:ce/t:0/fn:active_20kg_l/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L01ZaWFLTVQ3TE5y/OVY4UWV4V21SR2tN/Zg"
          actions={[
            <Button color="error" variant="contained" href="/products/1">
              {t`Learn more`}
            </Button>,
          ]}
        />
        <PackagePreview
          color="success"
          image="https://images.unsplash.com/photo-1568393691080-d016376b767d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          title={t`Food for highly active dogs`}
          description={t`Composition: nutrients of plant origin-grain nutrients, oil industry products, animal nutrition products-processed protein of animal origin, fish flour, mineral nutrients-Ca, P, Na. Additives: vitamins, minerals, amino acids.`}
          bagImage="https://img.bazzar.cloud/t2brccs/rs:fit:1000:1000:1:1:ce/t:0/fn:super_active_20kgr/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L0VhckVtRFJ5aUZy/Nko1dksyVnRkNGlo/eA"
          actions={[
            <Button color="success" variant="contained" href="/products/0">
              {t`Learn more`}
            </Button>,
          ]}
        />
        <PackagePreview
          color="important"
          image="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title={t`Processed pet food - food for adult dogs`}
          description={t`Composition: nutrients of plant origin - grain nutrients, oil industry products, animal nutrition products - processed protein of animal origin. Classic does not contain GMO.`}
          bagImage="https://img.bazzar.cloud/avWqUYM/rs:fit:500:500:1:1:ce/t:0/fn:classic_mix_2kg_l/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L0c0YUtXV29QeGVQ/Q2JSc0RQdVFlYmpS/Rw"
          actions={[
            <Button color="important" variant="contained" href="/products/5">
              {t`Learn more`}
            </Button>,
          ]}
        />
        <PackagePreview
          color="info"
          image="https://images.unsplash.com/photo-1514373941175-0a141072bbc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          title={t`CLASSIC - Food for adult dogs`}
          description={t`Composition: nutrients of plant origin - grain nutrients, oil industry products, animal nutrition products - processed protein of animal origin. Classic does not contain GMO.`}
          bagImage="https://img.bazzar.cloud/aJTKUH8/rs:fit:1000:1000:1:1:ce/t:0/fn:classic_10kg_r/czM6Ly9kYXRhc3Rv/cmUuYmF6emFyLmhy/L1c2MnoxQjhTb0hm/NjIycWVLZ2tDTVND/eQ"
          actions={[
            <Button color="info" variant="contained" href="/products/4">
              {t`Learn more`}
            </Button>,
          ]}
        />
      </HomePagePackages>
    </HomePageMain>
  );
};

export default HomePage;
