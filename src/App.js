import { useState } from 'react';
import './App.css';
import ImageService from './imageService';
import UploadPage from './components/UploadPage';
import ViewPage from './components/ViewPage';

function App() {

  const [page, setPage] = useState('upload');
  const switchPage = () => setPage(page === 'upload' ? 'images' : 'upload');

  return (
    <div className="App">
      <div className="menu">
        <span className="navigation" onClick={switchPage}>Upload</span>
        <span className="navigation" onClick={switchPage}>Images</span>
      </div>
      {
        page === 'upload' ? <UploadPage /> : <ViewPage/>
      }

    </div>
  );
}

export default App;
