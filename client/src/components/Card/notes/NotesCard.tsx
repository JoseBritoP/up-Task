import { Note } from '@/schema/TaskSchema'
import { formatDate } from '@/utils/index'

interface NoteCardProps {
  note:Note
}
export default function NotesCard({note}:NoteCardProps) {
  return (
    <div className='p-3 flex justify-between items-center'>
      <p className='font-semibold'>{note.content} by <span className='font-bold'>{note.createdBy.name}</span></p>
      <p className='text-xs text-slate-500'>{formatDate(note.createdAt)}</p>
    </div>
  )
}
