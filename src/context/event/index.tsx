import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const initialState = { scroll: { x: 0, y: 0 } };

const EventContext = createContext(initialState);

export const EventContextProvider = ({ children }: any) => {
  const [state, setState] = useState(initialState);

  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    const trackScroll = () => {
      const scroll = {
        x: window.scrollX,
        y: window.scrollY,
      };
      setState({ ...stateRef.current, scroll });
    };

    window.addEventListener('scroll', trackScroll);
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  return (
    <EventContext.Provider value={{ ...state }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
