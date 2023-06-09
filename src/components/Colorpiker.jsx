import * as THREE from "three"
import state from "../State";


const ColorPicker = props => {

  const handleCklick = (e) => {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(e.target.style.background)
  }

  return(
    <div style={{
      position: 'absolute', 
      zIndex: 1,
      left: 0,
      right: 0,
      margin: 'auto',
      width: "fit-content",
      display: "flex",
      top: '15px'
      }}>
         
        <div
          onClick={handleCklick} 
          style={{
          background: 'blue', height: 50, 
          width: 50}}></div>
          <div 
          onClick={handleCklick} 
          style={{
          background: 'yellow', height: 50, 
          width: 50}}></div>
          <div
          onClick={handleCklick} 
          style={{
          background: 'white', height: 50, 
          width: 50}}></div>
      </div>
  )
}


export default ColorPicker
