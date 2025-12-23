/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./Styles"
import Header from "../Header/Header";


function Layout({children, setSearchKeyword, filterMode, setFilterMode}) {
    return (
        <div css={s.layout}>
            <div css={s.conatiner}>
              <Header setSearchKeyword={setSearchKeyword} setFilterMode={setFilterMode} filterMode={filterMode}/>
              {children}
            </div>
        </div>
    );
}

export default Layout;
