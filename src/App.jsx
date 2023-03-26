import {
  Canvas,
} from "react-three-fiber"

import {Physics} from "@react-three/cannon"

import Orbit from "./components/Orbit"

import Background from "./components/Background"
import Floor from "./components/Floor"
import Bulb from "./components/Bulb"
import ColorPicker from "./components/Colorpiker"
import Cars from "./components/Cars"
import CameraControls from "./components/CameraControls"
import CameraButtons from "./components/CameraButtons"




function App() {
 
  return (

    <div style={{width: '100vw', height: '100vh'}}>
      <ColorPicker />
      <CameraButtons />
      <Canvas 
      shadows = {true}
      style={{backgroundColor: "black"}}
      camera ={{position:[7,7,7]}}
      >
        <CameraControls />
        <ambientLight intensity={[0.2]} />
        <directionalLight 
        shadow-mapSize-height = {2**10}
        shadow-mapSize-width = {2**10}
        shadow-radius = {10}
        position={[6,3,0]} 
        intensity={2}
        castShadow
        />
        
        <Physics>
          
          <Bulb position = {[-6,3,0]} />
          <Bulb position = {[0,3,0]} />
          <Bulb position = {[6,3,0]} />
          <Cars/>
          <Background />
          <Floor position ={[0, -0.5, 0]}/>
        </Physics>
        <Orbit />
        <axesHelper args={[5]} />
        
      </Canvas>
      
    </div>
    
  );
}

export default App;
