function IdCard(props) {
  const {lastName, firstName, gender, height, birth, picture} = props
  const cardStyles = {
    padding: "10px",
    borderStyle: "solid",
    display: "flex",
    flexDirection: "row",
    margin: "10px"
  }

  const cardContainer = {
    marginLeft: "10px",
    marginTop: "-15px",
    lineHeight: "80%",
  }

  const spanStyles = {
    fontWeight: "bold"
  }
  return (
    <div style={cardStyles}>
      <img src={picture} alt="picture" width="150px" height="150px"/>
      <div style={cardContainer} >
      <p><span style={spanStyles}>First Name:</span> {firstName}</p>
      <p><span style={spanStyles}>Last Name:</span> {lastName}</p>
      <p><span style={spanStyles}>Gender:</span> {gender}</p>
      <p><span style={spanStyles}>Height:</span> {height}</p>
      <p><span style={spanStyles}>Birth: </span>{birth}</p>
      </div>
    </div>
  )
}

export default IdCard