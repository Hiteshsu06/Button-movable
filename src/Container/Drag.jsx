import React ,{useState} from 'react';
import './Drag.css';
import Draggable from 'react-draggable';

const Drag = () => {
    const[position,setPosition]=useState({x:0,y:0});
    const track =(data)=>{
        setPosition({x:data.x,y:data.y});
        console.log(position.x.toFixed(0));
    }
  return (
    <span className='main'>
        <Draggable axis="x" bounds="parent"  onDrag={(e,data) => track(data)}>
        <div className='box'>
            <h1>
                x:{position.x.toFixed(0)}, y: {position.y.toFixed(0)}
            </h1>
        </div>
        </Draggable>
        <span className='main2' style={{fontSize:`${position.x.toFixed(0)}px`}} >hitesh</span>
        
    </span>
  )
}

export default Drag