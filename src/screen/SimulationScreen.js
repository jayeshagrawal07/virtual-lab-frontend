import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}

function SimulationScreen() {
  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    localStorage.clear();
  }, []);
  // useEffect(() => {
  //   setBoxSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // }, [window.innerWidth, window.innerHeight]);

  const handelValidate = async () => {
    try {
      let res = await axios.post("http://127.0.0.1:5050/api/isDFA", {
        data: JSON.parse(localStorage.getItem("fsm")),
      });
      console.log("res", res);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handelTest = async () => {
    try {
      let res = await axios.post(
        // "http://127.0.0.1:5050/api/isNfaAccept_input",
        "http://127.0.0.1:5050/api/Test",
        { type:'DFA_NFA',
          data: JSON.parse(localStorage.getItem("fsm")),
          input_string: input,
        }
      );
      console.log("res", res);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <canvas
          className="border rounded shadow-lg"
          id="canvas"
          width={width - 50}
          height={height - 50}
        >
          <span className="error">
            Your browser does not support
            <br />
            the HTML5 &lt;canvas&gt; element
          </span>
        </canvas>
      </div>
      {/*<button disabled={true} className="btn btn-primary mb-5 mt-4 ms-4"></button>*/}
      <Button
        className="mb-5 mt-4 ms-4"
        variant="primary"
        onClick={handelValidate}
      >
        Validate
      </Button>
      <Button className="mb-5 mt-4 ms-4" variant="primary" onClick={handleShow}>
        Test
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Input</Form.Label>
              <Form.Control
                type="text"
                placeholder="Input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!input} onClick={handelTest}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimulationScreen;
