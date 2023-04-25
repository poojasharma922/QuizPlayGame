

import { Button } from "@material-ui/core";
import { useEffect } from "react";
// import { useHistory } from "react-router";
import { useNavigate } from 'react-router-dom';

import "./Result.css";

const Result = ({ name, score }) => {
  // const history = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      // history.push("/");
      navigate('/');
    }
  }, [name, navigate]);

  const handleGoToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button variant="contained" color="secondary" size="large" style={{ alignSelf: "center", marginTop: 20 }} onClick={handleGoToHomePage}>Go to homepage</Button>
    </div>
  );
};

export default Result;
