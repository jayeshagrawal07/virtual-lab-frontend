import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContext,
  Button,
  Card,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Toast,
  useAccordionButton,
} from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

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

function Icon({ initialClass, onHoverClass, handelInputButton }) {
  const [toggle, setToggle] = useState(true);
  return (
    <InputGroup.Text
      onClick={handelInputButton}
      onMouseOver={(e) => {
        setToggle(!toggle);
      }}
      onMouseOut={(e) => {
        setToggle(!toggle);
      }}
    >
      <i className={`bi ${toggle ? initialClass : onHoverClass}`}></i>
    </InputGroup.Text>
  );
}

function SimulationScreen() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(true);
  const [message, setMessage] = useState("Test Message");
  const [toastVariant, setToastVariant] = useState("success");
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    localStorage.clear();
    setType(searchParams.get("type")||"DFA");
    // localStorage.setItem(
    //   "fsm",
    //   '{"nodes":[{"x":328,"y":140,"index":0,"text":"q0","isAcceptState":false,"isInitialState":true},{"x":780,"y":132,"index":2,"text":"q2","isAcceptState":false,"isInitialState":false},{"x":770,"y":423,"index":3,"text":"q3","isAcceptState":false,"isInitialState":false},{"x":328,"y":296,"index":1,"text":"q1","isAcceptState":false,"isInitialState":false},{"x":536,"y":259,"index":4,"text":"q4","isAcceptState":false,"isInitialState":false},{"x":913,"y":259,"index":5,"text":"q5","isAcceptState":false,"isInitialState":false}],"links":[],"availableIndexes":[]}'
    // );
  }, []);

  function CustomToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <div
        className={`d-flex justify-content-center mb-${
          isCurrentEventKey ? 2 : 1
        }`}
      >
        <a
          className="btn btn-primary"
          style={{ width: width - 50 }}
          onClick={decoratedOnClick}
        >
          {children}
        </a>
      </div>
    );
  }

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
      let data;
      if (input) data = [...inputArray, input];
      else data = inputArray;
      let res = await axios.post(
        // "http://127.0.0.1:5050/api/isNfaAccept_input",
        "http://127.0.0.1:5050/api/Test",
        {
          data: JSON.parse(localStorage.getItem("fsm")),
          input_string: data,
          type
        }
      );
      console.log("res", res);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handelAddInput = () => {
    if (input) {
      setInputArray([...inputArray, input]);
      setInput("");
    }
  };

  const handelRemoveInput = (index) => {
    let temp = [...inputArray];
    temp.splice(index, 1);
    setInputArray(temp);
  };

  return (
    <>
      <Toast
        className={"text-white"}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide={true}
        bg={toastVariant}
        style={{
          position: "fixed",
          top: "2rem",
          left: "1rem",
          zIndex: 1060,
        }}
      >
        <Toast.Body className={"text-white"}>{message}</Toast.Body>
      </Toast>

      <Accordion className="d-flex flex-column align-items-center">
        <CustomToggle eventKey="0">instructions</CustomToggle>
        <Card style={{ width: width - 50, top: "-0.4rem", zIndex: -1 }}>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  <strong>Add a state:</strong> double-click on the canvas
                </li>
                <li>
                  <strong>Add an arrow:</strong> shift-drag on the canvas
                </li>
                <li>
                  <strong>Make a final state:</strong> double-click on the state
                </li>
                <li>
                  <strong>Move something:</strong> drag it around
                </li>
                <li>
                  <strong>Delete something:</strong> click it and press the
                  delete key (not the backspace key)
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
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
          height={height - 100}
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
              {inputArray.map((item, i) => (
                <InputGroup key={i} className="mb-3">
                  <FormControl
                    placeholder="Input"
                    value={item}
                    onChange={(e) => {
                      let temp = [...inputArray];
                      temp[i] = e.target.value;
                      setInputArray(temp);
                    }}
                    onBlur={() => {
                      if (!item) {
                        handelRemoveInput(i);
                      }
                    }}
                  />
                  <Icon
                    initialClass={"bi-dash-circle"}
                    onHoverClass={"bi-dash-circle-fill"}
                    handelInputButton={() => {
                      handelRemoveInput(i);
                    }}
                  />
                </InputGroup>
              ))}
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <Icon
                  initialClass={"bi-plus-circle"}
                  onHoverClass={"bi-plus-circle-fill"}
                  handelInputButton={handelAddInput}
                />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!(inputArray.length || input)}
            onClick={handelTest}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimulationScreen;
