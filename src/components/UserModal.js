import "./UserModal.css";

function UserModal({ closeModal, setName }) {
  return (
    <div className="UserModal">

      <div className="modal">
       <p>Enter Username</p>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <button onClick={closeModal}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default UserModal;
