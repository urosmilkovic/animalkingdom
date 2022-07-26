import React, { useState } from 'react';
import { ImageMain } from 'components/image/styles';
import { ImageType } from 'components/image/types';

const Image = ({ onLoad, alt, ...props }: ImageType) => {
  const [loaded, setLoaded] = useState(false);

  const onLoaded = (e: any) => {
    setLoaded(true);

    if (onLoad) {
      onLoad(e);
    }
  };

  return <ImageMain loaded={loaded} onLoad={onLoaded} alt={alt} {...props} />;
};

export default Image;
