const Form = (props) => {
  return (
    <>
      <h1>Create account</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (props.password !== props.password2) {
            // alert("vos deux mots de passe ne sont identiques");
            props.setActive(true);
          } else {
            props.setStepTwo(true);
          }
        }}
      >
        <label htmlFor="name"> Name </label>
        <input
          value={props.name}
          type="text"
          name="name"
          onChange={(event) => {
            props.setName(event.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          value={props.email}
          type="email"
          name="email"
          onChange={(event) => {
            props.setEmail(event.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          className={props.active ? "active" : undefined}
          type="password"
          name="password"
          onChange={(event) => {
            props.setPassword(event.target.value);
          }}
        />

        <label htmlFor="password">Confirm your password</label>
        <input
          className={props.active ? "active" : undefined}
          type="password"
          name="password"
          onChange={(event) => {
            props.setPassword2(event.target.value);
          }}
        />

        <input type="submit" value="REGISTER" />
      </form>
    </>
  );
};

export default Form;
