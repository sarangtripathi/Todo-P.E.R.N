import React,{Fragment,useState} from 'react'

const EditTodo = ({todo}) => {
    console.log(todo);
    const[desc,setDesc]=useState(todo.description);

    const updateDescription = async e => {
      e.preventDefault();
      try{
        const body = {desc};
        const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
        method: "PUT",
        headers : { "content-Type":"application/json" },
        body: JSON.stringify(body)
      })
      console.log(response);
      window.location = "/"
      }catch(err){
        console.log(err.message);
      }
    }

  return (
    
    <Fragment>
        <button type="button" class="btn btn-warning" data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}>
  Edit
</button>


<div class="modal" id={`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit Your Todo</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

     
      <div class="modal-body">
        <input type='text' className='form-control' value={desc}
        onChange={(e)=>setDesc(e.target.value)} />
      </div>

      
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)} >Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
    
  )
}

export default EditTodo