import { useRef } from "react"
import {
  useLoader,
  useFrame
} from "react-three-fiber"
import * as THREE from "three"
import { useBox } from "@react-three/cannon"


const Box = props => {
  const [ref, api] = useBox(()=> ({
    mass: 1, 
    ...props
  }))
  const texture = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL+"/vandaia.png")
  

  const handlePD = e =>{
    // aq xdeba saintereso rame
    // globalshi gagvaqvs window.activeMesh romelsac vighebt iventidan vamatebt propertis da vaglobalebt
    e.object.active=true
    if (window.activeMesh){
      scaleDown(window.activeMesh)
      window.activeMesh.active =false
    }
    window.activeMesh = e.object

  }
  const handlePE = e =>{

    e.object.scale.x = 1.5
    e.object.scale.y = 1.5
    e.object.scale.z = 1.5
  }
  const handlePL = e =>{

    // tu mousis dashorebis dros araaa true (active) mashin isev dzvel pormas daubrundes
    if(!e.object.active){
      scaleDown(e.object)
    }
  }
  const scaleDown = object => {
    object.scale.x = 1
    object.scale.y = 1
    object.scale.z = 1
  }
  return(
    <mesh 
    ref={ref}
    api = {api}
    position = {props.position}
    castShadow
    onPointerDown={handlePD}
    onPointerEnter ={handlePE}
    onPointerLeave ={handlePL}
    >
      <boxGeometry />
      <meshPhysicalMaterial 
      map={texture}
      />
    </mesh>
  )
}

export default Box