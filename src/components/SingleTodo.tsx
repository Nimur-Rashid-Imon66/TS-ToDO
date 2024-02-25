import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../modal';
import { MdDone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRedoAlt } from "react-icons/fa";
type Props = {
    todoItem: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todoItem, todos, setTodos }: Props) => {
    let { id: tid, todo, isDone, isEditable } = todoItem;
    const [editText, setEditText] = useState(todo);
    const [editable,setEditable] = useState<boolean>(isEditable);
    const editRef = useRef<HTMLInputElement>(null);

    //Mark as done
    const hendleDone = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !isDone };
            }
            return todo;
        }))
    }
    // Delete todo
    const hendleDelete = (id: number) => {
        setTodos(todos.filter((todo) => { return todo.id !== id }))
    }
    
    // Edit todo
    const hendleEdit = (id: number) => {
        setEditable(true)
        setEditText(todo);
        console.log
    }
    const EditDone = (e,id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, todo:editText,isEditable:false};
            }
            return todo;
        }))
        setEditable(false);
    }
    useEffect(() => {
        editRef.current?.focus();
    },[editable])
    return (
        <div className="text-xl text-black px-5 py-3 bg-green-500 w-[90%] md:w-[70%] my-2 flex justify-between items-center rounded-lg">
            {
                editable && 
                <form
                        className="flex items-center justify-between w-full"
                        onSubmit={(e) => { EditDone(e,tid) }}
                    >
                        <input
                            ref={editRef}
                        className='w-[95%] px-2 rounded-lg'
                        value={editText}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEditText(e.target.value)}}
                    />
                   <span
                            className="hover:scale-125"
                            
                        >
                            <MdDone />
                    </span>
                </form>
            }
            {
               (editable === false) && <>
                    {
                        isDone && <s> {todo}</s>
                    }
                    {
                        !isDone && <span> {todo} </span >
                    }
                     <div className="flex gap-3 items-center justify-center">
                        {
                            !isDone && <span
                            className="hover:scale-125 text-2xl"
                            onClick={() => { hendleEdit(tid) }}>
                            <CiEdit />
                            </span>
                        }
                        <span
                            className="hover:scale-125"
                            onClick={() => { hendleDelete(tid) }}
                        >
                            <RiDeleteBin6Line />
                        </span>
                        {
                            !isDone && <span
                                className="hover:scale-125"
                                onClick={() => { hendleDone(tid) }}
                            >
                                <MdDone />
                            </span>
                        }
                        {
                            isDone && <span
                            className="hover:scale-125"
                            onClick={() => { hendleDone(tid) }}
                        >
                          <FaRedoAlt />
                        </span>
                        }
                    </div>
                </>
            }
                   
        </div>

    );
};

export default SingleTodo;