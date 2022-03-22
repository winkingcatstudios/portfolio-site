import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

// custom components must be capitalized
// function called by onClick is not evaluated with ()
// could have used annonymous arrow function with onClick; ie, onClick={() => {}}
function Todo(props) {
  // array destructuring to pull 2 elements from useStates. First is state, second is function to set state
  const [modalOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }



  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      {modalOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;
