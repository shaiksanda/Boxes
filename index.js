const Box = (props) => {
  //  Write your code here.
  const { bgColor, content, width, height } = props;
  const cardStyle = {
    backgroundColor: bgColor,
    width: width,
    height: height,
    padding: "10px",
  };
  return (
    <div style={cardStyle} className="card-style">
      <p>{content}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 style={{ fontFamily: "Roboto" }} className="heading">
      Boxes
    </h1>
    <div className="box-container">
      <Box bgColor="#fbbf24" content="Small" width="50px" height="40px" />
      <Box bgColor="#38bdf8" content="Medium" width="100px" height="70px" />
      <Box bgColor="#ec4899" content="Large" width="150px" height="130px" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
