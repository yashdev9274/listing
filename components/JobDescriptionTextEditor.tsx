'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextEditorMenuBar from './textEditorMenuBar'


export default function JobDescriptionTextEditor(){

    const editor = useEditor({
        extensions: [StarterKit],
        immediatelyRender: false

    })
    return (
        <div>
            <TextEditorMenuBar editor ={editor}/>
            <EditorContent editor={editor} />
        </div>
    )
}