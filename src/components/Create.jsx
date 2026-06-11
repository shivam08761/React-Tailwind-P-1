import React from 'react'
import { useState } from 'react'
import { nanoid} from 'nanoid'


const Create = (props) => {
   

        
    


    const todos = props.todos;
    const settodos = props.settodos;



      const [title,settitle] = useState("");
       const [iscompleted,setiscompleted] = useState();
      const submithandler = (e) => {
              e.preventDefault();
              const newtodos= {
                id: nanoid(),
                title,
                iscompleted,
              };
            
          let copytodos= [...todos];
          copytodos.push(newtodos);
          settodos(copytodos);

          settitle("");
          setiscompleted(false);
            }
   


  return (
    <div className='w-[60%]  p-20 m-10 '>
         <h1 className='text-6xl font-thin ' >Set <span className='text-red-500' > Reminder</span> for <br /> {" "}Tasks</h1> 
            <form  onSubmit={submithandler}>
              
                <input className='p-2 border-b outline-0 py-1 mt-15 font-thin w-full text-3xl' onChange={(e)=>settitle((e.target.value))} value={title} type="text" placeholder="title"/>
                <br/>
               <br/>
                


                             
                              
                             

                <button className="border text-xl rounded px-10 py-2 mt-10 ">create todo</button>
                <br/>
                <br/>


                
            </form>
    </div>
  )
}

export default Create
