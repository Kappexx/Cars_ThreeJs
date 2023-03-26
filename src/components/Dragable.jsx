import { useThree } from 'react-three-fiber'
import { useRef ,useEffect, useState} from 'react'
import { DragControls } from 'three/addons/controls/DragControls.js'


const Dragable = props => {
  const {camera, gl, scene} =useThree()
  
  const groupRef = useRef()
  
  const [ children, setChildren] = useState([])
  
  const controls = new DragControls(children, camera, gl.domElement)
  controls.transformGroup = true

  controls.addEventListener("drag", e=>{
    e.object.api?.position.copy(e.object.position)
    e.object.api?.velocity.set(0,0,0)
  })
  controls.addEventListener("dragstart", e=>{
    e.object.api?.mass.set(0)
    
    
    
  })
  controls.addEventListener("dragend", e=>{
    e.object.api?.mass.set(1)
  })
 

  useEffect(()=>{
    
    setChildren(groupRef.current.children)
  },[])
  return(
      <group ref={groupRef}>
        {props.children}
      </group>
  )
}

export default Dragable