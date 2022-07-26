import React from 'react';
import {
  PackagePreviewInner,
  PackagePreviewMain,
  PackagePreviewBackground,
  PackagePreviewImage,
  PackagePreviewSide,
  PackagePreviewSection,
  PackagePreviewBagHolder,
  PackagePreviewBagImage,
} from 'components/package-preview/styles';

const PackagePreview = ({
  title,
  description,
  image,
  actions,
  bagImage,
  color,
}: any) => (
  <PackagePreviewMain>
    <PackagePreviewBackground>
      <PackagePreviewImage src={image} />
    </PackagePreviewBackground>
    <PackagePreviewInner>
      <PackagePreviewSide>
        <PackagePreviewBagHolder>
          <PackagePreviewBagImage src={bagImage} />
        </PackagePreviewBagHolder>
      </PackagePreviewSide>
      <PackagePreviewSide>
        <PackagePreviewSection
          title={title}
          description={description}
          actions={actions}
          color={color}
        />
      </PackagePreviewSide>
    </PackagePreviewInner>
  </PackagePreviewMain>
);

export default PackagePreview;
