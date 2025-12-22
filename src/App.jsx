import "./App.css";
import Emotion1 from "./Emotion/Emotion1";
import Hook01 from "./React_study/Hook01";
import FruitsFilter from "./React_study/LifeCycle/FruitsFilter";
import LifeCycleApp from "./React_study/LifeCycle/LifeCycleApp";
import Render from "./React_study/LifeCycle/Render";
import SignupForm from "./React_study/LifeCycle/SignupForm";
import ReackHook09 from "./React_study/ReackHook09";
import React01 from "./React_study/React01";
import React02 from "./React_study/React02";
import React03 from "./React_study/React03";
import React04 from "./React_study/React04";
import ReactHook03 from "./React_study/ReactHook03";
import ReactHook04 from "./React_study/ReactHook04";
import ReactHook05 from "./React_study/ReactHook05";
import ReactHook06 from "./React_study/ReactHook06";
import ReactHook07 from "./React_study/ReactHook07";
import ReactHook08 from "./React_study/ReactHook08";
import Layout from "./TodoList/Components/Layout/Layout";
import Index from "./TodoList/Pages/Index";

function App() {
    const name = "박윤호"
    const age = 25
    return (
        <>
            {/* <React01 />  */}
            {/* <React02 /> */}
            {/* <React03 name={name} age={age} address={"김해시"} tel={"010-1234-5678"}/> */}
            {/* <React04>
                <h1>자식요소</h1>
            </React04> */}
            {/* <Hook01 /> */}
            {/* <ReactHook03 /> */}
            {/* <ReactHook04 /> */}
            {/* <ReactHook05 /> */}
            {/* <ReactHook06 /> */}
            {/* <ReactHook07 /> */}
            {/* <Render /> */}
            {/* <LifeCycleApp /> */}
            {/* <FruitsFilter /> */}
            {/* <SignupForm /> */}
            {/* <ReactHook08 /> */}
            {/* <Emotion1 /> */}
            {/* <ReackHook09 /> */}
            <Index />
        </>
    );
}

export default App;
