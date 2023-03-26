import * as THREE from "three"
import {
  
  useLoader
} from "react-three-fiber"




const Background = props =>{
  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL+ "/gio.jpg")

  return (
    <primitive attach = "background" object={texture}/>
  )
}

export default Background