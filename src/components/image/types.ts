import React from 'react';

export type ImageType = React.ImgHTMLAttributes<{}>;

export type ImageMainType = ImageType & {
  loaded?: boolean;
};
