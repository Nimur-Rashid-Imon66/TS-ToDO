import React from 'react';
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Completed = ({todos,setTodos}:Props) => {
    return (
        <div className="w-[90%] flex flex-col items-center mt-9 md:mt-0 md:self-start">
            <h1 className="w-[90%] md:w-[70%] text-2xl px-3 py-2 bg-black rounded">Completed Task</h1>
            
                {
                    todos.map((todo) => {
                        return (
                            todo.isDone && <SingleTodo key={todo.id} todoItem={todo} todos={todos} setTodos={setTodos} />
                        );
                    })
                }
            
        </div>
    );
};

export default Completed;