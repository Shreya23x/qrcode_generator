import React, { useState } from 'react';
import "./QrGenerator.css";

function QrGenerator() {
  const [qrText, setQrText] = useState('');
  const [image, setImage] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const generateQr = async () => {
    if (qrText.length === 0) {

      setIsShaking(true);
      setTimeout(()=> setIsShaking(false) , 500);
      return "noQr";
    } else {
      const apiKey = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
      setImage(apiKey);
    }
  };

  return (
    <div className='container'>
      <div className='qrBox'>
        {/* title */}
        <div className='heading'>
          <p>Enter your text or URL</p>
        </div>
        {/* input box */}
        <div className={`inputBox ${isShaking ? 'shake' : ''}`}>
          <input
            type="text"
            value={qrText}
            onChange={(e) => setQrText(e.target.value)}
          />
        </div>
        {/* QR display */}
        <div className='showQr' style={{ display: image ? 'flex' : 'none'}}>
          {image && <img src={image} alt="QR code " className={image ? 'visible' : 'none'} /> }
        </div>
        {/* button */}
        <div className="btn">
          <button onClick={generateQr}>Generate QR Code</button>
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
