import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Detalles2 = ({ match }) => {
  useEffect(() => {
    fetchPeli();
    console.log(match);
  }, []);
  const [peli, setPeli] = useState({});

  const fetchPeli = async () => {
    const fetchPeli = await fetch(
      `https://www.omdbapi.com/?apikey=fec0f00e&i=${match.params.id}&plot=full`
    );
    const peli = await fetchPeli.json();
    setPeli(peli);
  };
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const className = "asd";
  return (
    <div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Detalles</ModalHeader>
          <ModalBody>
            <h1>{peli.Title}</h1>
            <h4>Director: {peli.Director}</h4>
            <h4>Año: {peli.Year}</h4>
            <h4>{peli.Plot}</h4>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>{" "}
    </div>
  );
};

export default Detalles2;
