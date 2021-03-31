import style from "./style.module.scss";

import { GoX } from "react-icons/go";
import { useTools } from "../../hooks/useTools";

import {BiCommentError} from "react-icons/bi"

interface ToolsListProps {
  onOpenRemoveToolConfirmModal: (id:number, toolName:string) => void;
}
export function ToolsList({ onOpenRemoveToolConfirmModal }: ToolsListProps) {
  const { tools } = useTools();

  return (
    <main className={style.container}>
      <ul className={style.content}>

        {
          tools.length>0?(
            tools.map((tool) => (
              <li key={tool.id}>
                <div>
                  <a target="blank" href={tool.link}>
                    {tool.title}
                  </a>
                  <button onClick={()=>onOpenRemoveToolConfirmModal(tool.id, tool.title)}>
                    <GoX />
                    remove
                  </button>
                </div>
                <p>{tool.description}</p>
                <div>
                  {tool.tags.map((tag) => (
                    <span key={tag}>#{tag} </span>
                  ))}
                </div>
              </li>
            ))
          ):(
            <li className={style.notFound}>
              <BiCommentError/>
              <h4>Tools not found</h4>
            </li>
          )
        }
        
      </ul>
    </main>
  );
}
