import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      const randomTask = catTasks[Math.floor(Math.random() * catTasks.length)];
      setTodos([...todos, { id: Date.now(), todo: randomTask, isDone: false }]);
      setTodo("");
    }
  };

  const catTasks = [
    "Chase invisible mice",
    "Take a 5-hour nap",
    "Plot world domination",
    "Knock stuff off tables",
    "Practice stealth mode",
    "Hunt for the red dot",
    "scratch sensitive things",
    "Stare at the wall",
    "meow",
    "meow",
    "meeeoow",
    "meowmeow",
    "woof?",
    "MEEEEOOOWW",
    "lick",
    "attack",
    "ATTACK",
    "clean fur",
    "eat food",
    "blink",
    "stick claws into the expensive sofa",
  ];

  return (
    <div className="App">
      <span className="heading">🐱 To Meow List 🐱</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
