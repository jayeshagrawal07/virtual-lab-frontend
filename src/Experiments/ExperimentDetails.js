import React from "react";
import experiments from "../experiments";
import { Container } from "react-bootstrap";
import {
  useParams,
  Link,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
function ExperimentDetails() {
  const { id } = useParams();
  const experiment = experiments.find((p) => p._id === id);
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
      <div className="row g-5">
        <div className="col-md-11">
          <h3 className="pb-4 mb-4 fst-italic text-center border-bottom">
            {" "}
            Experiment- {experiment._id}{" "}
          </h3>

          <article className="blog-post">
            <h2 className="blog-post-title">
              Objective: {experiment.Objective}
            </h2>

            <hr />
            <h2>Requirement: {experiment.Requirement} </h2>

            <hr />
            <h3>Theory :</h3>
            <h5>{experiment.heading1}</h5>
            <p>
              {experiment.paragraph1.split("<br>").map((item, i) => (
                <>
                  {item}
                  <br />
                </>
              ))}
            </p>
            {experiment.img1 && (
              <img className="mt-3  mb-3" src={experiment.img1} alt="exp img" />
            )}
            <h5>{experiment.heading2}</h5>
            <p>
              {experiment.paragraph2.split("<br>").map((item, i) => (
                <>
                  {item}
                  <br />
                </>
              ))}
            </p>
            {experiment.img2 && (
              <img className="mt-3  mb-3" src={experiment.img2} alt="exp img" />
            )}
            <h5>{experiment.heading3}</h5>
            <p>
              {experiment.paragraph3.split("<br>").map((item, i) => (
                <>
                  {item}
                  <br />
                </>
              ))}
            </p>
            {experiment.img3 && (
              <img className="mt-3  mb-3" src={experiment.img3} alt="exp img" />
            )}
          </article>
        </div>
      </div>
      <div className="d-flex gap-2 ">
        <Link className="btn btn-primary mb-5 mt-4  " to={`/experiments`}>
          Go Back
        </Link>
        {/*<Link className="btn btn-primary mb-5 mt-4  " to={`/simulation`}>Simulation</Link>*/}

        {experiment.simulation && (
          <a
            className="btn btn-primary mb-5 mt-4  "
            onClick={() => handelSimulation(experiment.simulation)}
          >
            Simulation
          </a>
        )}
      </div>
    </Container>
  );
}

export default ExperimentDetails;
