import React, { useState } from 'react'

type Props = {}

const useLanguageSelector = () => {
    const [language, setLanguage] = useState('javascript');

      const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
    };



    return {
        language, handleLanguageChange
    }
}

export default useLanguageSelector