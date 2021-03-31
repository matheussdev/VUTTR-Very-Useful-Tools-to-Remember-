import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface tool {
  id: number;
  title: string;
  description: string;
  link: string;
  tags: string[];
}
type toolInput = Omit<tool, "id">;

interface ToolsProviderProps {
  children: ReactNode;
}

interface ToolsContextData {
  tools: tool[];
  addNewTool: (trasaction: toolInput) => Promise<void>;
  removeTool: (toolId: number) => Promise<void>;
  searchTools: (url: string) => Promise<void>;
}

export const ToolsContext = createContext<ToolsContextData>(
  {} as ToolsContextData
);

export function TooslProvider({ children }: ToolsProviderProps) {
  const [tools, setTools] = useState<tool[]>([]);
  const [updateList, setUpdateList]= useState(0);
  useEffect(() => {

    async function getTools(){
      const newTools = await api.get("tools")
      setTools(newTools.data);
    }
    getTools()
    
  }, [updateList]);
  
  async function addNewTool(toolInput: toolInput) {
    const response = await api.post("tools", toolInput);
    const tool = response.data;
    console.log(tool);

    setTools([...tools, tool]);
  }
  async function removeTool(toolId: number) {
    const response = await api.delete(`tools/${toolId}`).then(() => {
      setUpdateList(updateList+1);
    });
  }
  async function searchTools(url:string) {
    const newTools = await api.get(url)
    setTools(newTools.data);
  }

  return (
    <ToolsContext.Provider value={{ tools, addNewTool, removeTool, searchTools }}>
      {children}
    </ToolsContext.Provider>
  );
}

export function useTools() {
  const context = useContext(ToolsContext);
  return context;
}
