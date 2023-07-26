import React, { useRef } from "react";
import "./styles.css";
import pawPrint from "../img/icons8-paw-100.png";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="add a task"
        className="input_box"
        value={todo}
      ></input>
      <button className="input_submit" type="submit">
        <img src={pawPrint} className="paw" alt="paw button"></img>
      </button>
    </form>
  );
};

export default InputField;
