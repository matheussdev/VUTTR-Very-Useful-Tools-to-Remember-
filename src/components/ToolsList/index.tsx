import style from "./style.module.scss";

import {GoX} from "react-icons/go"
interface ToolsListProps{
  onOpenRemoveToolConfirmModal:()=> void;
}
export function ToolsList({onOpenRemoveToolConfirmModal}:ToolsListProps) {

  

  return (
    <main className={style.container}>
      <ul className={style.content}>
        <li>
          <div>
            <a href="#">Notion</a>
            <button onClick={onOpenRemoveToolConfirmModal}><GoX/>remove</button>
          </div>
          <p>
              all in one tool to  organize teams and ideas. write, plan, collaborate and get organized.
          </p>
          <div>
              #node #organization #collaboration
          </div>
        </li>
        <li>
          <div>
            <a href="#">Notion</a>
            <button onClick={onOpenRemoveToolConfirmModal}><GoX/>remove</button>
          </div>
          <p>
              all in one tool to  organize teams and ideas. write, plan, collaborate and get organized.
          </p>
          <div>
              #node #organization #collaboration
          </div>
        </li>
      </ul>
    </main>
  );
}
