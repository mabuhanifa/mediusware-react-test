import React, { useEffect, useState } from "react";

export default function Modal({ modal, setModal, url, setUrl }) {
  const [modalData, setData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    };
    fetchData();
  }, [url]);
  console.log(modalData);
  return (
    <div
      className="modal fade"
      id={modal}
      tabIndex="-1"
      aria-labelledby={`${modal}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${modal}Label`}>
              {modal}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                  </tr>
                </thead>
                <tbody>
                  {modalData &&
                    modalData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.phone}</td>
                        <td>{item.country.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-primary"
              onClick={() => setALL("Modal-A")}
            >
              All Contacts
            </button>
            <button
              className="btn btn-warning"
              onClick={() => setALL("Modal-B")}
            >
              US Contacts
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
