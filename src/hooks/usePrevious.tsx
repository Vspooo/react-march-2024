// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import React, {useEffect, useRef, useState} from 'react';

const usePrevious = (value:number) =>{
    const ref = useRef<number>()
    useEffect(() => {
        ref.current = value
    }, [value]);
    return ref.current
}

const UsePrevious = () => {
    const [count, setCount] = useState<number>(0)
    const previousCount = usePrevious(count)
    return (
        <div>
            <p>current value : {count}</p>
            <p>previous value : {previousCount ? previousCount:"there is no prev value"}</p>
            <button onClick={()=> setCount(count+1)}>increase value</button>
        </div>
    );
};

export default UsePrevious;
