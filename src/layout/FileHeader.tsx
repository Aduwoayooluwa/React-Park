import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useTabsStore } from '@/store/store';

type FileTab = {
  id: string;
  name: string;
};

const FileHeader: React.FC = () => {
  const { tabs, closeTab } = useTabsStore();

  return (
    <main>
      <div className="bg-[#101010] text-white flex">
      {Array.from(tabs).map((tab: any) => (
        <div
          key={tab.id}
          className="flex items-center px-3 py-1 border-b-2 border-transparent hover:border-blue-500 cursor-pointer"
        >
          <span className="mr-2 text-sm">{tab.name}</span>
          <CloseOutlined
            onClick={() => closeTab(tab.id)}
            className="text-gray-400 hover:text-gray-200"
          />
        </div>
      ))}
    </div>
    </main>
  );
};

export default FileHeader;
