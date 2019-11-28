import {useEffect} from "react";

const useClearData =
    (condition, setDataFn, deps) =>
        useEffect(() => {
            if(condition)
                setDataFn(null);
        }, deps);

export default useClearData;