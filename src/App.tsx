import React, { useState } from "react"
import InputField from "./components/InputField"
import { Todo } from "./modal";
import SingleTodo from "./components/SingleTodo";
import Completed from "./components/Completed";
import Pandding from "./components/Pandding";
import Swal from "sweetalert2";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);


  const addTodo = (e) => {
    e.preventDefault();
    if (todo === "")
    {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Add Task Name!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      return;
    }
    setTodos([...todos, { todo: todo, isDone: false, id:Date.now(),isEditable:false }]);
    setTodo("");
    
  }

  return (
    <>
      <div
        className="flex flex-col items-center pt-[20px] bg-gradient-to-t from-blue-200 to-blue-700 w-[100vw] h-[100vh] text-white font-inter ">
        <h1 className="text-3xl font-bold ">
          Plan Your Task
        </h1>
        <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <div className="w-full flex flex-col md:flex-row items-center md:px-9">
          <Pandding todos={todos} setTodos={setTodos}/>
          <Completed todos={todos} setTodos={setTodos}/>
        </div>
        

      </div>
    </>

  )
}