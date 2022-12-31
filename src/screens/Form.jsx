const Form = () => {
  return (
    <div className="col justify-content-center align-items-center  d-flex flex-column ">
      <div
        className="rounded-circle pb-5 "
        style={{ width: "90px", height: "90px", backgroundColor: "#cbcbcb" }}
      >
        <i
          className="bi bi-person-fill  ps-1 text-white"
          style={{ fontSize: "5rem" }}
        />
      </div>

      <p className="pt-3" style={{ color: "#cbcbcb" }}>
        Login below to get started
      </p>
      <form className="form-group gap-3">
        <div className="d-flex flex-raw text-bg-light align-items-center ps-4 py-3 rounded-5 ">
          <i className="bi bi-envelope  " style={{ color: "#cbcbcb" }}></i>
          <input
            style={{
              border: 0,
              ":focus": {
                border: 0,
              },
            }}
            type="email"
            className="text-bg-light ms-3 rounded-5"
            id="email"
            placeholder="Email Address"
          />
        </div>

        <div className="d-flex flex-raw text-bg-light align-items-center ps-4 pe-5 py-3 mt-4 rounded-5 ">
          <i className="bi bi-lock-fill " style={{ color: "#cbcbcb" }}></i>
          <input
            style={{
              border: 0,
              ":focus": {
                border: 0,
              },
            }}
            type="password"
            className="text-bg-light ms-3 rounded-5"
            id="password"
            placeholder={`Password`}
          />
        </div>
      </form>

      <button
        type="submit"
        className="btn mt-5 bg-warning  rounded-5 "
        style={{
          width: "15rem",
          background: "rgb(247, 151, 33)",
          background:
            "linear-gradient(90deg, rgba(247,151,33,1) 0%, rgba(255,85,3,1) 100%)",
        }}
      >
        <h5 className="text-white ">Login </h5>
      </button>
      <div className="d-flex flex-raw mt-2">
        <p className="ms-5 mt-2" style={{ color: "#cbcbcb" }}>
          New User?
        </p>
        <p className=" btn ms-1 text-danger">Register</p>
      </div>
    </div>
  );
};

export default Form;
