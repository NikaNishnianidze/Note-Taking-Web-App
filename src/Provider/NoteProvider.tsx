import { createContext, useContext, useState, type ReactNode } from "react";
import data from "../data.json";
import type { Tinfos } from "../data";
import { string } from "yup";

interface IContext {
  notes: Tinfos;
  setNotes: React.Dispatch<React.SetStateAction<Tinfos>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const noteContext = createContext<IContext>({
  notes: data,
  setNotes: () => {},
  search: "",
  setSearch: () => {},
});

export default function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Tinfos>(data);
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <noteContext.Provider value={{ notes, setNotes, search, setSearch }}>
        {children}
      </noteContext.Provider>
    </>
  );
}

export const useNoteContext = () => {
  const context = useContext(noteContext);
  return context;
};
