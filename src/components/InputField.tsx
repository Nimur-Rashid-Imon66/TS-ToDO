import React from 'react';

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e) => void;
}

const InputField = ({ todo, setTodo,addTodo }: Props) => {
    const hendleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }
    return (
        <form
            className="my-4 w-full flex justify-center"
            onSubmit={addTodo}
        >
            <input type="text"
                value={todo}
                className="w-[80%] rounded-l-full text-black px-5 text-xl"
                onChange={hendleChange}
            />
            <button
                className="px-6 py-3 bg-green-500 rounded-r-full"
                
            >
            ADD</button>
        </form>
    );
};

export default InputField;