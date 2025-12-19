import React, { useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";

/**
 * state란 컴포넌트가 가질 수 있는 상태를 의미
 * state를 이용해서 컴포넌트가 렌더링될 때 데이터를 보유하고, 이 데이터를 업데이트해서 화면을
 * 다시 렌더링 할 수 있다.
 */
function CountState() {
    console.log("CountState 렌더링 됨")
    const [count, setCount] = useState(0)

    const plusOnclickHandler = () => {
        setCount(count + 1) 
    }

    const minusOnclickHandler = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <Count count={count}/>
            <CountButton onClickHandler={plusOnclickHandler} text={"+1"}/>
            <CountButton onClickHandler={minusOnclickHandler} text={"-1"}/>
        </div>
    );
}

export default CountState;
