import React from 'react';
import { Todo } from '../modal';
import SingleTodo from './SingleTodo';
// import Pandding from './Pandding';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Pandding = ({todos,setTodos}:Props) => {
    return (
        <div className="w-[90%] flex flex-col items-center md:self-start">
            <h1 className="text-2xl px-3 py-2 bg-black rounded w-[90%] md:w-[70%] ">Pandding Task</h1>
            
                {
                    todos.map((todo) => {
                        return (
                            !todo.isDone && <SingleTodo key={todo.id} todoItem={todo} todos={todos} setTodos={setTodos} />
                        );
                    })
                }
            
        </div>
    );
};

export default Pandding;