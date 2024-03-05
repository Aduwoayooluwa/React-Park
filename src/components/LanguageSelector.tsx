// LanguageSelector.js
import React, { useState } from 'react';
import { CodeOutlined } from '@ant-design/icons';
import { Select } from 'antd';
// import 'antd/dist/antd.dark.css';
import { LANGUAGE_VERSIONS } from '@/constants/languages';

const { Option } = Select;

const Languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({ onChangeLanguage }: {
    onChangeLanguage: any
}) => {

    return (
        <div className="flex items-center">
            <CodeOutlined className="mr-2 text-white" />
            <Select
                defaultValue="javascript"
                onChange={onChangeLanguage}
                className="w-40"
                dropdownClassName="dark:bg-gray-800"
            >
                {Languages.map(([lang, version]) => (
                    <Option key={lang} value={lang}>
                        {lang}
                    </Option>
                ))}
            </Select>
        </div>
    );
};

export default LanguageSelector;
