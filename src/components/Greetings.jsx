function Greetings(props) {
    const {lang, children} = props;
    const cardStyles = {
        padding: "10px",
        borderStyle: "solid",
        display: "flex",
        flexDirection: "row",
        margin: "10px"
      }
    const greetings = {
        de: `Hallo ${children}`,
        es: `Hola ${children}`,
        en: `Hello ${children}`,
        fr: `Bonjour ${children}`
    }[lang]
  return (
    <div style={cardStyles}>{greetings}</div>
  )
}

export default Greetings