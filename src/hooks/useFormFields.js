import { useState } from 'react';

const useFormFields = (initialValue) => {
    const [fields, setFormFields] = useState(initialValue);
    
    const changeFieldValue = (e) => {
        const { name, value} = e.target;
        setFormFields(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return { fields, changeFieldValue };
};

export default useFormFields;