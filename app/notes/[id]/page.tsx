import { fetchNoteById } from "@/lib/api"
import NoteDetails from "./NoteDetails.client"

interface SingleNoteDetailsProps {
    params: Promise<{id: string}>

}

export default async function SingleNoteDetails({ params }: SingleNoteDetailsProps) {
    const { id } = await params 
    const data = await fetchNoteById(id)
    return (
        <NoteDetails {...data}/>
    )
}