function Random(props) {
    const {min, max} = props;
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    const cardStyles = {
        padding: "10px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        margin: "10px",
        borderColor: "blue"
      }
  return (
    <div style={cardStyles}>Random value bewteen {min} and {max} is {randomNum}</div>
  )
}

export default Random