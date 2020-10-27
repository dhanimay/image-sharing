import axios from 'axios';

class ImageService {
  getImages() {
    return axios.get('http://localhost:8080/images');
  }

  uploadImage(image) {
    axios.post('http://localhost:8080/images', {image});
  }
}

export default new ImageService();