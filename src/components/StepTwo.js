const StepTwo = (props) => {
  return (
    <>
      <h1> RESULTS </h1>
      <div className="stepTwo">
        <p> name : {props.name}</p>
        <p> email : {props.email}</p>
        <p> password : {props.password}</p>
      </div>
      <div
        className="return"
        onClick={() => {
          props.setStepTwo(false);
          props.setActive(false);
        }}
      >
        <h2>RETURN TO FORM</h2>
      </div>
    </>
  );
};

export default StepTwo;
