import { useState } from 'react';
import { Header,Note,Footer,CreateArea} from './components'

function App() {
  const [Notes,setNotes]=useState([]);

  const AddToNotes=(item)=>{
    if(item.title===''){
      alert("The title of note cannot be empty")
    }else if(item.content === ''){
      alert("The note cannot be empty")
    }else{
    setNotes((prevNotes)=>{
      return(
      [ ...prevNotes, item]
      )
    });
  }
  }
  const handleDelete=(id)=>{
    setNotes((prevNotes)=>{

      return prevNotes.filter((Note,index)=>{
        return index !== id
      })
    })

  }

  return (
    <div>
    <Header />
    <CreateArea onAdd={AddToNotes}/>

    
    {Notes && Notes.map((NewNote,index)=>{
      return(<Note key={index} id={index} title={NewNote.title} content={NewNote.content}  onDelete={handleDelete}/>)
    })}
    <Footer />
  </div>
  );
}

export default App;
