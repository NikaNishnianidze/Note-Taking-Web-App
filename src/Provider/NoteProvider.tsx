import { createContext, useContext, useState, type ReactNode } from "react";
import data from "../data.json";
import type { Tinfos } from "../data";
import { string } from "yup";

interface IContext {
  notes: Tinfos;
  setNotes: React.Dispatch<React.SetStateAction<Tinfos>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  chosenTag: string;
  setChosenTag: React.Dispatch<React.SetStateAction<string>>;
}

const noteContext = createContext<IContext>({
  notes: data,
  setNotes: () => {},
  search: "",
  setSearch: () => {},
  chosenTag: "cooking",
  setChosenTag: () => {},
});

export default function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Tinfos>(data);
  const [search, setSearch] = useState<string>("");
  const [chosenTag, setChosenTag] = useState<string>("cooking");

  return (
    <>
      <noteContext.Provider
        value={{ notes, setNotes, search, setSearch, chosenTag, setChosenTag }}
      >
        {children}
      </noteContext.Provider>
    </>
  );
}

export const useNoteContext = () => {
  const context = useContext(noteContext);
  return context;
};
