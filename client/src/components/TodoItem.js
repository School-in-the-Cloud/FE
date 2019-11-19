import React, { useState } from 'react';

const TodoItem = ({ addTodo }) => {
    const [ todo, setTodo ] = useState('');
    const [ isAdded, setIsAdded ] = useState(false);

    const handleChanges = event => {
        setTodo(event.target.value);
    }

    const submitItem = event => {
        event.stopPropagation();
        event.preventDefault();
        addTodo(todo); 
        setIsAdded(true);
    }

    return (
        <div>
            <form onSubmit={submitItem}>
                <input value={todo} onChange={handleChanges} disabled={isAdded} />
                <button type='submit'>+</button>
            </form>
        </div>
    );
}

export default TodoItem;