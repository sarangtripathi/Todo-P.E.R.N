import React,{Fragment,useEffect,useState} from 'react'
import EditTodo from './EditTodo';

const ListTodos = () => {
    const[todos,setTodos] = useState([]);

    const getTodos = async () => {
        try{
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
        }catch(err){
            console.log(err.message);
        }
    }

    const deleteTodo = async (todo_id) => {
        try{
        const response = await fetch(`http://localhost:5000/todos/${todo_id}` ,{
            method: "DELETE"
        });
        
        // window.location="/";      REFRESHES EVERY TIME
                        // OR
        // if (response.ok) {
        //     window.location.reload();
        // }
                        // OR    WITHOUT  REFRESHING (IDEAL METHOD)
        console.log(todos);
        setTodos(todos.filter(todo => todo.todo_id !== todo_id));

        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    },[]);

    
    // console.log(todos);

  return (
    <Fragment>
        <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => (
        <tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td><EditTodo todo={todo} /></td>
        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
    ))}
  </tbody>
  </table>
    </Fragment>
  )
}

export default ListTodos