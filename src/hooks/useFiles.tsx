import { FileTab, useTabsStore } from '@/store/store';
import React, { useState } from 'react'

export type FileNode = {
  id: string;
  name: string;
  type: 'file' | 'folder'
  children?: FileNode[];
};

const initialFiles: FileNode[] = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    children: [
      { id: '2', name: 'App.tsx', type: 'file' },
      {
        id: '5',
        name: 'components',
        type: 'folder',
        children: [{ id: '6', name: 'Button.tsx', type: 'file' }],
      },
    ],
  },
  { id: '3', name: 'public', type: 'folder', children: [{ id: '4', name: 'index.html', type: 'file' }] },
];

const useFiles = () => {
     const [files, setFiles] = useState<FileNode[]>(initialFiles);
  const { addTab, setcurrentFileId } = useTabsStore();

  const fileName = "React-Amusement";

  const addFile = () => {
    const newFile: FileNode = { id: Date.now().toString(), name: 'NewFile.tsx', type: 'file' };
    setFiles([...files, newFile]);
  };

  const openFile = (file: FileTab) => {
  addTab(file);
  setcurrentFileId(file?.id)
};

  const deleteFile = (id: string) => {
    const removeFileById = (files: FileNode[], id: string): FileNode[] => {
      return files.reduce<FileNode[]>((acc, file) => {
        if (file.id === id) return acc; 
        if (file.children) {
          // recursively check children
          file = { ...file, children: removeFileById(file.children, id) };
        }
        return [...acc, file];
      }, []);
    };

    const filteredFiles = removeFileById(files, id);
    setFiles(filteredFiles);
  };
  return { files, addFile, openFile, deleteFile, fileName, setcurrentFileId }
}

export default useFiles