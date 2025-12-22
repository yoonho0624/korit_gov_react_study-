/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./Styles"
import Header from "../Header/Header";


function Layout({children}) {
    return (
        <div css={s.layout}>
            <div css={s.conatiner}>
              <Header />
              {children}
            </div>
        </div>
    );
}

export default Layout;
