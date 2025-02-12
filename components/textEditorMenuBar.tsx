'use client'

import { Editor } from "@tiptap/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Toggle } from "./ui/toggle";
import { cn } from "@/lib/utils";
import {
    Bold,
    Italic,
    Strikethrough,
    Code,
    Heading1,
    Heading2,
    Heading3,
    List,
    ListOrdered,
    Undo,
    Redo,
  } from "lucide-react";
import { Button } from "./ui/button";

interface iAppProps{
    editor: Editor | null
}

export default function TextEditorMenuBar({editor}: iAppProps) {
    if(!editor){
        return null
    }

    return (
        <div className="border border-border rounded-t-lg p-2 bg-card flex flex-wrap gap-1 items-center">
        <TooltipProvider>
          <div className="flex flex-wrap gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("bold")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                  }
                  className={cn(
                    editor.isActive("bold") && "bg-muted text-muted-foreground"
                  )}
                >
                  <Bold className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Bold</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("italic")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                  }
                  className={cn(
                    editor.isActive("italic") && "bg-muted text-muted-foreground"
                  )}
                >
                  <Italic className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Italic</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("strike")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                  }
                  className={cn(
                    editor.isActive("strike") && "bg-muted text-muted-foreground"
                  )}
                >
                  <Strikethrough className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Strikethrough</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("code")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleCode().run()
                  }
                  className={cn(
                    editor.isActive("code") && "bg-muted text-muted-foreground"
                  )}
                >
                  <Code className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Code</TooltipContent>
            </Tooltip>
          </div>
  
          <div className="w-px h-6 bg-border mx-2" />
  
          <div className="flex flex-wrap gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("heading", { level: 1 })}
                  onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className={cn(
                    editor.isActive("heading", { level: 1 }) &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  <Heading1 className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Heading 1</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("heading", { level: 2 })}
                  onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  className={cn(
                    editor.isActive("heading", { level: 2 }) &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  <Heading2 className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Heading 2</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("heading", { level: 3 })}
                  onPressedChange={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                  className={cn(
                    editor.isActive("heading", { level: 3 }) &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  <Heading3 className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Heading 3</TooltipContent>
            </Tooltip>
          </div>
  
          <div className="w-px h-6 bg-border mx-2" />
  
          <div className="flex flex-wrap gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("bulletList")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={cn(
                    editor.isActive("bulletList") &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  <List className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Bullet List</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("orderedList")}
                  onPressedChange={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className={cn(
                    editor.isActive("orderedList") &&
                      "bg-muted text-muted-foreground"
                  )}
                >
                  <ListOrdered className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Ordered List</TooltipContent>
            </Tooltip>
          </div>
  
          <div className="w-px h-6 bg-border mx-2" />
    
          <div className="flex flex-wrap gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                >
                  <Undo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
  
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  type="button"
                  variant="ghost"
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                >
                  <Redo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    )
}
