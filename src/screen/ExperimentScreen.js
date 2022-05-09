import React from "react";
import experiments from "../experiments";
import { createSearchParams, useNavigate, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function ExperimentScreen() {
  const navigate = useNavigate();

  const handelSimulation = (type) => {
    navigate({
      pathname: "/simulation",
      search: `?${createSearchParams({
        type,
      })}`,
    });
  };

  return (
    <Container>
      <div className="row mb-2">
        {experiments.map((experiment) => (
          <div className="col-md-6" key={experiment._id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                {/*<h3 className="mb-0">{experiment.Objective}</h3>*/}
                <h3 className="mb-0" title={experiment.Objective}>
                  {experiment.Objective.length > 50
                    ? `${experiment.Objective.slice(0, 50)}...`
                    : experiment.Objective}
                </h3>
                <p className="card-text mb-auto">
                  {" "}
                  {experiment.Intro.length > 300
                    ? `${experiment.Intro.slice(0, 300)}...`
                    : experiment.Intro}
                </p>
                <hr />
                <div className="d-flex gap-1  justify-content-end">
                  <Link
                    className="btn btn-primary"
                    to={`/experiment/${experiment._id}`}
                  >
                    Continue Reading
                  </Link>
                  {experiment.simulation && (
                    <Button
                      onClick={() => handelSimulation(experiment.simulation)}
                    >
                      Simulation
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ExperimentScreen;
