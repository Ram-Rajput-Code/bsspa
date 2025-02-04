import "./test.css";

function Test() {
  return (
    <>
      {/* <div className="row1">
        <div className="col1 col1"> col-1 </div>
        <div className="col2 col1"> col-2 </div>
        <div className="col3 col1"> col-3 </div>
        <div className="col4 col1"> col-4 </div>
        <div className="col5 col1"> col-5 </div>
      </div> */}

      <div className="container">
        <div className="collapsible">
          This div collapses on smaller screens!
        </div>
        <div className="content">This content always remains visible.</div>
      </div>
    </>
  );
}

export default Test;
