import { createContext, useContext, useState, type ReactNode } from "react";
import data from "../data.json";
import type { Tinfos } from "../data";

interface IContext {
  notes: Tinfos;
  setNotes: React.Dispatch<React.SetStateAction<Tinfos>>;
}

const noteContext = createContext<IContext>({
  notes: data,
  setNotes: () => {},
});

export default function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Tinfos>(data);
  return (
    <>
      <noteContext.Provider value={{ notes, setNotes }}>
        {children}
      </noteContext.Provider>
    </>
  );
}

export const useNoteContext = () => {
  const context = useContext(noteContext);
  return context;
};
