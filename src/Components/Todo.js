import React from 'react';

const Todo = ({text,todo,todos,setTodos}) => {
    const deleteHandler = () =>{
        setTodos(todos.filter((item) => item.id !== todo.id));
    };

    const completeHandler = () =>{
        setTodos(
            todos.map(item => {
                if(item.id===todo.id){
                    return{
                        ...item,completed:!todo.completed
                    };
                }
                return item;
            })

        );

    };
  
    return (
        <div className="todo">
            <li className={`todo-item  ${todo.completed ? 'completed' :''}`}>{text}</li>
            <button onClick={completeHandler} className='sucess-btn'><i className="fa fa-check-square fa-2x"></i></button>
            <button onClick={deleteHandler}  className='trash-btn'><i className="fa fa-trash fa-2x"></i></button>
            
        </div>
    )
}

export default Todo;
