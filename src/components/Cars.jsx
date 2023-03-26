import Dragable from "./Dragable"
import Model from "./Model"


const Cars = (props) => {

  
  return(
    <>
    <Dragable >
      <Model
        
        position = {[-4,0.3,0]}
        scale = {new Array(3).fill(0.5)}
        path = "/tesla_model_s/scene.gltf" />

    </Dragable>
    <Dragable>
      <Model
        position = {[4,0.8,0]}
        
        scale = {new Array(3).fill(0.9)}
        path = "/tesla_model_p/scene.gltf" />


    </Dragable>
    </>
    
  )
}

export default Cars