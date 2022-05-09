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
import { TYPES } from "../constants/userConstants";

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
  const initInput = { value: "", test: null };
  const [searchParams, setSearchParams] = useSearchParams();

  const { height, width } = useWindowDimensions();
  const [show, setShow] = useState(false);
  const [showOutputModal, setShowOutputModal] = useState(false);
  const [reset, setReset] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("Test Message");
  const [toastVariant, setToastVariant] = useState("success");
  const [input, setInput] = useState(initInput);
  const [type, setType] = useState("");
  const [imageData, setImageData] = useState("");
  const [inputArray, setInputArray] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (toConvertFlag = false) => {
    if (toConvertFlag) {
      handelTest(toConvertFlag);
    }
    setShow(true);
  };

  useEffect(() => {
    localStorage.clear();
    setType(searchParams.get("type") || "DFA");
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

  // const handelValidate = async () => {
  //   try {
  //     let res = await axios.post("http://127.0.0.1:5050/api/isDFA", {
  //       data: JSON.parse(localStorage.getItem("fsm")),
  //     });
  //     console.log("res", res);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };

  const handelTest = async (toConvertFlag = false) => {
    try {
      let data;
      if (input.value) data = [...inputArray, input].map(({ value }) => value);
      else data = inputArray.map(({ value }) => value);
      let res = await axios.post(
        // "http://127.0.0.1:5050/api/isNfaAccept_input",
        "http://127.0.0.1:5050/api/Test",
        {
          data: JSON.parse(localStorage.getItem("fsm")),
          input_string: toConvertFlag ? "" : data,
          type,
        }
      );
      if (!res.data.res) {
        throw res.data.msg;
      }
      if (!toConvertFlag) {
        if (input.value) {
          data = inputArray.map((data, i) => {
            data.test = res.data.res[i];
            return data;
          });
          let inputData = { ...input };
          inputData.test = res.data.res[inputArray.length];
          setInputArray(data);
          setInput(inputData);
        } else {
          data = inputArray.map((data, i) => {
            data.test = res.data.res[i];
            return data;
          });
          setInputArray(data);
        }
        setReset(true);
        setMessage("Test Successful");
        setToastVariant("success");
        setShowToast(true);
      } else {
        setMessage("Converted Successfully");
        setToastVariant("success");
        setShowToast(true);
        setImageData(res.data.converted);
      }
      console.log("res", res);
    } catch (e) {
      setMessage(e.toString());
      setToastVariant("danger");
      setShowToast(true);
      console.log("error", e);
    }
  };

  const handelAddInput = () => {
    if (input.value) {
      setInputArray([...inputArray, input]);
      setInput(initInput);
    }
  };

  const handelRemoveInput = (index) => {
    let temp = [...inputArray];
    temp.splice(index, 1);
    setInputArray(temp);
  };

  const handelReset = () => {
    setInputArray([]);
    setInput(initInput);
    setReset(false);
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

      <Button
        className="mb-5 mt-4 ms-4"
        variant="primary"
        onClick={() => handleShow(TYPES.NFA_DFA === type)}
      >
        {TYPES.NFA_DFA !== type ? "Test" : "Convert"}
      </Button>
      {/*TYPES.DFA_NFA === type && <Button className="mb-5 mt-4 ms-4" variant="primary" onClick={handleShow}>
        Convert
    </Button>*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {TYPES.NFA_DFA !== type && (
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                {inputArray.map((item, i) => (
                  <InputGroup key={i} className="mb-3">
                    <FormControl
                      placeholder="Input"
                      className={
                        item.test !== null &&
                        (item.test
                          ? "bg-success text-light"
                          : "bg-danger text-light")
                      }
                      value={item.value}
                      onChange={(e) => {
                        let temp = [...inputArray];
                        temp[i] = e.target.value;
                        setInputArray(temp);
                      }}
                      onBlur={() => {
                        if (!item.value) {
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
                    className={
                      input.test !== null &&
                      (input.test
                        ? "bg-success text-light"
                        : "bg-danger text-light")
                    }
                    value={input.value}
                    onChange={(e) =>
                      setInput({ value: e.target.value, test: null })
                    }
                  />
                  <Icon
                    initialClass={"bi-plus-circle"}
                    onHoverClass={"bi-plus-circle-fill"}
                    handelInputButton={handelAddInput}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          )}
          {TYPES.NFA_DFA === type && (
            <img
              src={imageData}
              alt="Converted Image"
              style={{ width: "-webkit-fill-available" }}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={TYPES.NFA_DFA === type ? "primary" : "secondary"}
            onClick={handleClose}
          >
            Close
          </Button>
          {!reset && TYPES.NFA_DFA !== type && (
            <Button
              variant="primary"
              disabled={!(inputArray.length || input.value)}
              onClick={() => handelTest(false)}
            >
              Test
            </Button>
          )}
          {reset && TYPES.NFA_DFA !== type && (
            <Button variant="primary" onClick={handelReset}>
              Reset
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimulationScreen;
