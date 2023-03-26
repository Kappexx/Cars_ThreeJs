import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import {
  useThree,
  extend
} from "react-three-fiber"

extend ({OrbitControls})

const Orbit = () =>{
  const {camera, gl} = useThree()
  new OrbitControls(camera, gl.domElement)
  return(
    null
  )
}


export default Orbit