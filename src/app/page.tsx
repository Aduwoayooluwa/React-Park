"use client"
import { Editor as CodeEditor } from "@monaco-editor/react";
import React from "react";
import { useTabsStore } from "@/store/store";

// each file, will gave the name and the details of the file. 
/** 
 * use an array to display all the files for that user. 
 * create a state to maintain the current file the user is on
 * The array will contain objects which looks like what is below
 * {
    name: "", 
    code: "",
    id: ""
  }
  *

**/
export default function Home() {
  const { tabs, currentFileId } = useTabsStore();

  console.log(currentFileId=== null, "currentFileId")

  if (currentFileId === null) return <div className="h-[80vh] overflow-hidden grid place-items-center w-[60vw]">Welcome Page. Open a file to Get Started</div>

  return (
    <main>
      <CodeEditor height={"100vh"} width={"60vw"} defaultLanguage="javascript" 
      theme="vs-dark"
      />
    </main>

  );
}
