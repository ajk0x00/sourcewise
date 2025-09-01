import React from 'react';
import { useRef } from 'react';


const DocUploadButton = ({ icon: Icon, onChange }) => {
  const fileChooserRef = useRef(null)
  return (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white"
    >
      <input type='file' className='hidden' ref={fileChooserRef} onChange={onChange}/>
      <Icon className="w-5 h-5" onClick={() => fileChooserRef.current.click()}/>
    </div>
  );
};

export default DocUploadButton;