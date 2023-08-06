import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const typedOptions = {
      strings: ['Fundraiser', 'Mental Health Assistance.'],
      typeSpeed: 85,
    };

    const typed = new Typed(typedElementRef.current, typedOptions);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div ref={typedElementRef}></div>
  );
};

export default TypedText;