import { useFrame } from "react-three-fiber"
import state from "../State"


const CameraControls = () =>{

  

  useFrame(({camera, scene})=>{

    if(state.activeMesh.name !== state.activeMeshName){
      state.activeMesh = scene.getObjectByName(
        state.activeMeshName
      ) || {}
    }
    
    if (state.shouldupdate){
       camera.position.lerp(state.cameraPos, 0.1)
       const diff = 
       camera.position.clone()
       .sub(state.cameraPos).length()
      
       if (diff < 0.1) state.shouldupdate = false
    }
   
    
  })

  return (
    null
  )
}

export default CameraControls