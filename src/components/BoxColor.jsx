function BoxColor(props) {
    const {r, g, b} = props;
    const arrayRGB = [r, g, b]
    const colors = arrayRGB.map(() => Math.floor(Math.random() * 256))
    console.log(colors)
  return (
    <div style={{backgroundColor: `rgb ${colors}`, fontSize: "30px"}}>NO ENTIENDOOO</div>
  )
}

export default BoxColor