import { useTabsStore } from "@/store/store";
import React, { useMemo, useState } from "react";
import MonacoEditor, { MonacoEditorProps, monaco } from "react-monaco-editor"
import LanguageSelector from "./LanguageSelector"
import useLanguage from "@/hooks/useLanguage";

export default function Editor(props: Readonly<{ code: any, onChange: (newVal: string, event: any) => void }>) {

    const { tabs, currentFileId } = useTabsStore();
    const { language } = useLanguage()

    const currentFile = useMemo(() => Array.from(tabs).find((file: any) => file.id === currentFileId), [tabs, currentFileId]) as any;
    const fileContent = currentFile ? currentFile.content : '';


    const editorMount: MonacoEditorProps["editorDidMount"] = (editor, monaco) => {
        editor.focus();
    }

    const { code, onChange } = props;
    const options: monaco.editor.IStandaloneEditorConstructionOptions = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
    };



    return (
        <div>
            <MonacoEditor
                width="800"
                height="600"
                language={language}
                theme="vs-dark"
                value={code}
                options={options}
                onChange={onChange}
                editorDidMount={editorMount}
            />
        </div>
    )
}