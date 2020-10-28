import axios from "axios";

class ImageService {
  getImages() {
    return axios.get("http://localhost:8080/images");
  }

  uploadImage(data) {
    return axios.post(
      "http://localhost:8080/images",
      data,
      {
        headers: { 'Content-Type': `multipart/form-data; boundary=${data._boundary}`},
      }
    );
  }
}

export default new ImageService();
