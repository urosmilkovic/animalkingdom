import { ArrowUpward } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollToTopButton } from 'components/scroll-to-top/styles';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleRef = useRef<any>();
  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  const trackScroll = () => {
    if (window.scrollY > 200 && !isVisibleRef.current) {
      setIsVisible(true);
    } else if (window.scrollY <= 200 && isVisibleRef.current) {
      setIsVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    trackScroll();
    window.addEventListener('scroll', trackScroll);
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  return (
    <ScrollToTopButton
      color="primary"
      variant="contained"
      onClick={scrollTop}
      visible={isVisible}
    >
      <ArrowUpward />
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
