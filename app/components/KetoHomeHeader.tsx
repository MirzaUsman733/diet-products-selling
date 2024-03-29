import React from 'react';
import TypingComponent from './TypingComponent';

const KetoHomeHeader: React.FC = () => {
  const typedStrings = ['Ketonic Calculator'];

  return (
    <div>
      <div className='ketoHomeHeader'>
        <div className='txt-mid'>
          <TypingComponent strings={typedStrings} speed={200} delay={50000} />
        </div>
      </div>
      <div className='container text-end'>
        <i className='opacity-50'>Updated Oct 21nd, 2023 – Written by Mr.Muhammad Usman</i>
      </div>
    </div>
  );
};

export default KetoHomeHeader;
