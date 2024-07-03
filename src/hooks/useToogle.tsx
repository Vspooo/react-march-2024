// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"

import {FC, useState} from "react";
import React from 'react';


interface IProps {
    value : boolean
}

const useToggle = (initialState:boolean) =>{
    const [value, setValue] = useState<boolean>(initialState)
    const toggleValue = () => setValue(prevState => !prevState)
    console.log(value)
    return [value, toggleValue] as const
}
const ToggleComponent:FC<IProps> = ({value}) => {
    const [currentValue,toggleValue] = useToggle(value)
    return (
        <div>
         <button onClick={toggleValue}>toggle value {currentValue ? "true" : "false"}</button>
        </div>
    );
};

export default ToggleComponent;