import { useState } from "react";
import "./UploadPage.css";
import ImageService from "../imageService";

function UploadePage({ name }) {

  const [imgSrc, setImgSrc] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [fileValue, setFileValue] = useState("");

  const fileReader = (event) => {
    setFileValue(event.target.value);
    const files = Array.from(event.target.files);
    if (files && files[0]) {
      setImgData(files[0]);
      setImgSrc(URL.createObjectURL(files[0]));
    }
  };

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('image', imgData);
    formData.append('name', name);

    ImageService.uploadImage(formData).then((response) => {
      if (response.status === 200) {
        setImageUploaded(true);
      }
    });
  };

  const restart = () => {
    setImgSrc(null);
    setImageUploaded(false);
    setFileValue("");
  }

  return (
    <div className="UploadePage">
      <header>Image Sharing</header>

      <div className="main">
        <p>Click below to select an image</p>
        <input type="file" onChange={fileReader} value={fileValue} />

        <div className={"image-container" + (!imgSrc ? " hidden" : "")}>
          <p className="picture-label">Nice picture!</p>
          <img className="img" src={imgSrc} alt="user upload" />

          {imageUploaded && <p className="success-label">Success</p>}
          {imageUploaded ? (
            <button className="restart-button btn" onClick={restart}>
              Restart
            </button>
          ) : (
            <button className="upload-button btn" onClick={uploadImage}>
              Upload
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadePage;
