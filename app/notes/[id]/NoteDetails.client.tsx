"use client";

import { useQuery } from "@tanstack/react-query"
import css from "../../../components/NoteList/NoteList.module.css"
import type { Note } from "../../../types/note"
import { fetchNotes } from "@/lib/api"


export default function NoteDetails(note: Note) {

 const {data} = useQuery({
          queryKey: ["noteQuery", {search: "",page: 1}],
          queryFn: () => fetchNotes("", 1),
          refetchOnMount: false,
  
 })
  console.log(data);
  
  
    return (
        <li className={css.listItem} key={note.id}>
            <h2 className={css.title}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <p className={css.content}>was created at: {note.createdAt}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
            </div>
          </li>
    )
}