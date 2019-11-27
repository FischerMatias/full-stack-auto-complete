import {useState} from "react";

export const useFlag = () => {
    const [flag, setFlag] = useState(false);

    const toggleFlag = () => {
        const newVal = !flag;

        setFlag(newVal);

        return newVal;
    };

    return {flag, setFlag, toggleFlag};
};