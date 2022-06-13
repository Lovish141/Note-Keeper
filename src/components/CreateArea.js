import React from "react";
import { useState } from "react";
import Add from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props) {
    const [item,setItem]=useState({
        title:'',
        content:''
    })
    const [visible,setVisible]=useState(false);

    const HandleChange=(event)=>{
        const {name,value}=event.target;
        setItem((prevValue)=>{
           return ( 
            {...prevValue,
            [name]:value}
           )
        })

    }
    const handleClick=(event)=>{
        event.preventDefault();
        props.onAdd(item);
        setItem({
            title:'',
            content:''
        })
    }
    const expand=()=>{
        setVisible(true)
    }
  return (
    <div>
      <form className="create-note">
        { visible &&
        <input name="title" placeholder="Title" onChange={HandleChange} value={item.title} /> 
        }
        <textarea name="content" placeholder="Take a note..." rows={visible?'3':'1'} onChange={HandleChange}  value={item.content} onClick={expand}/>
        <Zoom in={visible}>
        <Fab onClick={handleClick}><Add/></Fab>
        </Zoom>
      </form>
      
    </div>
  );
}

export default CreateArea;
