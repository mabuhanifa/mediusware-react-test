import React, { useState } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [modal, setModal] = useState("Modal");

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Modal modal={modal} />
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${modal}`}
            onClick={() => setModal("ModalA")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${modal}`}
            onClick={() => setModal("ModalB")}
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
