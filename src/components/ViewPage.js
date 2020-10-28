import { useEffect, useState } from "react";
import ImageService from "../imageService";
import "./ViewPage.css";

function ViewPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    ImageService.getImages().then((response) => {
      setImages(response.data || []);
    });
  }, []);

  return (
    <div className="ViewPage">
      <p> Uploaded Images</p>
      <div className="main">
        {images.map((img, i) => {
          return (
            <div className="image-container" key={JSON.stringify(img) + i}>
              <span>{img.name}</span>
              <img
                className="image"
                src={`data:image/jpg;base64,${img.image}`}
                alt="user upload"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewPage;
