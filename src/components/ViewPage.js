import { useEffect, useState } from 'react';
import ImageService from '../imageService';

function ViewPage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    ImageService.getImages().then((response) => {
      setImages(response.data || []);
    })

  }, []);

  return (
    <div className="ViewPage">
    <p> Uploaded Images</p>
     {
       images.map(() => <div>hello image</div>)
     }
    </div>
  );
}

export default ViewPage;
