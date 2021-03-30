import { useState } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

import Switch from "react-switch";

import style from "./style.module.scss"

interface ControllersProps{
  onOpenNewToolModal:()=> void;
}

export function Controllers({onOpenNewToolModal}:ControllersProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(checked: boolean) {
    setIsChecked(checked);
  }
  return (
    <div className={style.container}>
      <div>
        <span>
            <FiSearch/>
          <input type="text" placeholder="search" />
        </span>
        <label>
          <Switch onChange={handleChange} checked={isChecked} />
          search in tags only
        </label>
      </div>
      <button onClick={onOpenNewToolModal}>
        <FiPlus />
        Add
      </button>
    </div>
  );
}
