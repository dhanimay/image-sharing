import { useState } from 'react';
import './App.css';
import UploadPage from './components/UploadPage';
import ViewPage from './components/ViewPage';
import UserModal from './components/UserModal';

function App() {
  const [name, setName] = useState('');
  const [page, setPage] = useState('upload');
  const [showModal, setShowModal] = useState(true);

  const switchPage = () => setPage(page === 'upload' ? 'images' : 'upload');

  return (
    <div className="App">
      {showModal && <UserModal setName={setName} closeModal={() => setShowModal(false)} />}

      <div className="menu">
        <span className="navigation" onClick={switchPage}>Upload</span>
        <span className="navigation" onClick={switchPage}>Images</span>
      </div>
      {
        page === 'upload' ? <UploadPage name={name} /> : <ViewPage/>
      }

    </div>
  );
}

export default App;
