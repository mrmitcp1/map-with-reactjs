import './App.css';
import {useState} from "react";
import Map from "./components/Map";

function App() {
  const [zoomLevel, setZoomLevel] = useState(0)
  return (
  <>
    Zoom: {zoomLevel}x
    <button onClick={()=> setZoomLevel(zoomLevel+1)}>+</button>
    <button onClick={()=> setZoomLevel(zoomLevel-1)}>+</button>
    <br/>
    <Map zoomLevel={zoomLevel} />
  </>
  );
}

export default App;
