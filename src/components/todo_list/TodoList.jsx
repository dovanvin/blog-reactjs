import React, { useState } from 'react';
import Todo from './Todo';
import TodoFrom from './TodoFrom';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        if( !todo.text || /^\s*$/.test(todo.text)) {
            return ;
        }
        const newTodos = [todo, ...todos] ;
        setTodos(newTodos);
    }
    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if( todo.id === id ) {
                todo.completeTodo = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <>
          <div className='heading-todo'>What's your blog base ?</div>
          <TodoFrom onSubmit={addTodo}></TodoFrom>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </>
      );
};

export default TodoList;