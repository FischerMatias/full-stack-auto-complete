import {useEffect, useState} from "react";

const useTimedRunOrReset = (runFn, condition, deps) => {
    const [ timed, setTimed] = useState(0);

    useEffect(() => {
        clearTimeout(timed);

        if(condition) {
            setTimed(setTimeout(runFn, 500))
        }
    }, deps);
};

export default useTimedRunOrReset;