import React, { useState } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [modal, setModal] = useState("Modal");
  const [url, setUrl] = useState("https://contact.mediusware.com/api/contacts/?page=1&page_size=1000");

  const setALL = (link) => {
    setModal(link);
    if (link === "Modal-A") {
      setUrl(
        "https://contact.mediusware.com/api/contacts/?page=1&page_size=1000"
      );
    } else if (link === "Modal-B") {
      setUrl(
        "https://contact.mediusware.com/api/country-contacts/United%20States/"
      );
    }
  };
  
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Modal modal={modal} setModal={setModal} url={url} setUrl={setUrl}/>
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${modal}`}
            onClick={() => setALL("Modal-A")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#${modal}`}
            onClick={() => setALL("Modal-B")}
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
