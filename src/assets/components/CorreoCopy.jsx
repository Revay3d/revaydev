import React, { useRef, useState, useEffect } from 'react';
import "./styles/correoCopy.scss";

const EmailForm = ({ initialEmail }) => {
  const inputRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand('copy');
      setCopySuccess(true);
    }
  };

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  return (
    <div className='copy'>
      <input  className={`copy_gmail ${copySuccess ? 'copied' : ''}`} 
        ref={inputRef}
        type="email"
        defaultValue={initialEmail}
        readOnly
        onClick={handleCopyToClipboard}
      />
      <button 
        className={`copy_botom ${copySuccess ? 'copied' : ''}`} 
        onClick={handleCopyToClipboard}
      >
        <i class="fa-solid fa-copy"></i>
      </button>
    </div>
  );
};

export default EmailForm;
