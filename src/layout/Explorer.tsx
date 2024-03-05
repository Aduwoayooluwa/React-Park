"use client"
import useFiles, { FileNode } from '@/hooks/useFiles';
import React, { memo } from 'react';
import { FiFolder, FiFileText, FiPlus, FiTrash2, FiFolderPlus } from 'react-icons/fi';
import { MdNavigateNext, MdKeyboardArrowDown } from "react-icons/md";



const Explorer = () => {
  const { files, addFile, deleteFile, openFile, fileName } = useFiles()

  

  const renderFiles = (files: FileNode[]) => files.map((file) => (
    <div key={file.id} className="flex items-center justify-between">
      {file.type === 'file' ? (
        <div className="flex space-x-2 items-center">
          <FiFileText className='cursor-pointer' />
          <button aria-label="file-name-btn" onClick={() => openFile(file)}>{file.name}</button>
          <button aria-label="btn" onClick={() => deleteFile(file.id)} className="">
            <FiTrash2 className="cursor-pointer text-red-500" />
          </button>
        </div>
      ) : (
        <details>
          <summary className='flex cursor-pointer items-center space-x-2'>
            <span className="flex items-center space-x-1">
              <MdNavigateNext className="summary-icon" />
              <FiFolder />
            </span>
            <p>{file.name}</p>
          </summary>
          <div className="pl-4">
            {file.children && renderFiles(file.children)}
          </div>
        </details>
      )}
    </div>
  ));

  return (
    <main className="p-4 min-w-[300px] bg-[#101010] min-h-full overflow-auto border-gray-600 border-r-[0.4px]">
      <div className="flex items-center justify-between">
        <p className='text-xs'>{fileName.toUpperCase()}</p>
        <div className="flex items-center space-x-2">
          <FiPlus className='cursor-pointer' onClick={addFile} />
          <FiFolderPlus className='cursor-pointer' />
       
        </div>
      </div>
      <div className="pt-4">
        {renderFiles(files)}
      </div>
    </main>
  );
};

export default Explorer;
