


const Bulb = props => {

  return(
    <mesh position={props.position}>
      <pointLight
       castShadow
       shadow-mapSize-height = {2**10}
       shadow-mapSize-width = {2**10}
       shadow-radius = {10}
       />
      <sphereGeometry args={[0.2, 20,20]} />
      <meshPhongMaterial
      emissive="yellow"
       />

    </mesh>
  )
}

export default Bulb