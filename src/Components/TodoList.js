import {React, useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
export default function TodoList(){
    const [todo, setTodo] = useState({
        header: '',
        isCompleted: false
    })
    const [todoList, setTodoList] = useState([]);
    const [todoListCopy, setTodoListCopy] = useState([]);
    const [search, setSearch] = useState("");
    const handleChange = e=>{
        const {name, value} = e.target;
        setTodo({
            ...todo,
            [name]:value
        })

    }

    const handleSearch = e=>{
        setSearch(e.target.value);
        filtrar(e.target.value);
    }
    const removeTodo = value=>{
        const idx = todoList.indexOf(value);
        console.log(value);
        console.log(idx);
        setTodoList(todoList.splice(idx+1));
        setTodoListCopy(todoListCopy.splice(idx+1));
    }
    const filtrar = busqueda => {
        let resultadoBusqueda = todoList.filter(todo => {
            if(todo.header.toString().toLowerCase().includes(busqueda.toLowerCase())){
                return todo;
            }
        })
        console.log(resultadoBusqueda)
        if(resultadoBusqueda.length == 0){
            setTodoList(todoListCopy);
        } else{
            setTodoList(resultadoBusqueda);
        }
    }
    const addTodo = () => {
        setTodoList(todoList.concat(todo));
        setTodoListCopy(todoListCopy.concat(todo));
    }

    return(
        <div className="content">
        <br/>
        <center>
        <div class="input-group">
            <div class="form-outline">
                <input onChange={handleSearch} value={search} type="search" name="search" id="form1" class="form-control" />
            </div>
            <button type="button" class="btn btn-primary" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
            </button>
        </div>
        <br/>
        <div class="input-group mb-3">
            <input type="text" class="form-control" name="header" onChange={handleChange} placeholder="Todo ..." />
            <div class="input-group-append">
                <button onClick={addTodo} class="btn btn-outline-success" type="button">Guardar</button>
            </div>
        </div>
        <br/>
        <table className="table table-editable table-striped table-hover">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Acciones</th>
            
          </tr>
        </thead>
        <tbody>
        {todoList.map(element =>{

            return(
        
            <tr>
            <td contenteditable="true">{element.header}</td>
            <td>
              <button className="btn btn-danger" onClick={() =>removeTodo(element)}>Completado</button>
            </td>
          </tr>
          
        )})}
        </tbody>
        </table>
        </center>
        </div>
        
    )    
}