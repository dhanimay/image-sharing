import { useState } from 'react';
import './UploadPage.css';
import ImageService from '../imageService';

function UploadePage() {
  const [imgSrc, setImgSrc] = useState(null);

  const fileReader = (event) => {
    const files = Array.from(event.target.files);
    if (files && files[0]) {
      setImgSrc(URL.createObjectURL(files[0]));
    }
  };

  const uploadImage = () => {
    ImageService.uploadImage(imgSrc);
  }

  return (
    <div className="UploadePage">
      <header>
        Image Sharing
      </header>

      <div className="main">
        <p>
          Click below to select an image
      </p>
        <input type='file' onChange={fileReader} />
        <div className={"image-container" + (!imgSrc ? " hidden" : "")}>
          <p>Nice picture!</p>
          <img className="img" src={imgSrc} alt="uploaded image" />
          <button className="upload-button" onClick={uploadImage}>
            Upload
        </button>

        </div>
      </div>
    </div>
  );
}

export default UploadePage;
