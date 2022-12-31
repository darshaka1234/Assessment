const SideImage = () => {
  return (
    <div
      className="col  ps-5   d-flex flex-column justify-content-center ps-2"
      style={{
        borderRadius: "60% 40% 40% 60% / 0% 100% 100% 0%",
        background: "rgb(254,192,69)",
        background:
          "linear-gradient(90deg, rgba(254,192,69,1) 0%, rgba(253,148,30,1) 100%)",
      }}
    >
      <div className="d-flex flex-row col-5">
        <i className="bi bi-fire text-white" style={{ fontSize: "5rem" }} />
        <h1 className="text-white fw-bold pt-4 ps-3">Nothing.</h1>
      </div>
      <h2 className="text-white ">Welcome to Nothing!</h2>
    </div>
  );
};

export default SideImage;
