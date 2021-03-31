import { FormEvent, useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

import Switch from "react-switch";
import { useTools } from "../../hooks/useTools";

import style from "./style.module.scss";

interface ControllersProps {
  onOpenNewToolModal: () => void;
}

/*
este componente é reponsável pelos botões de controles 
como adicionar uma nova ferramenta e buscar ferramenta
*/

export function Controllers({ onOpenNewToolModal }: ControllersProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [searchUrl, setSearchUrl] = useState("/tools?q=");
  const [search, setSearch] = useState("");

  const { searchTools } = useTools();

  function handleChange(checked: boolean) {
    setIsChecked(checked);
    isChecked ? setSearchUrl("/tools?q=") : setSearchUrl("/tools?tags_like=");
  }

  function handleSearchTools(event: FormEvent) {
    event.preventDefault();
    searchTools(searchUrl + search);
  }
  return (
    <div className={style.container}>
      <div>
        <form onSubmit={handleSearchTools}>
          <span>
            <button type="submit">
              <FiSearch />
            </button>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </span>
        </form>
        <label>
          <Switch
            onChange={handleChange}
            checked={isChecked}
            checkedIcon={false}
            offColor="#EBEAED"
            onColor="#12DB89"
            handleDiameter={20}
            uncheckedIcon={false}
            width={50}
            height={25}
          />
          <span>search in tags only</span>
        </label>
      </div>
      <button onClick={onOpenNewToolModal}>
        <GoPlus />
        Add
      </button>
    </div>
  );
}
