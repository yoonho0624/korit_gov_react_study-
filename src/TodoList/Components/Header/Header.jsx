/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as s from "./styles";
import { TbClipboardSearch } from "react-icons/tb";

function Header({ setSearchKeyword, setFilterMode, filterMode }) {
    // const [searchValue, setSearchValue] = useState("");

    const searchInputOnChangeHandler = (e) => {
        // setSearchValue(e.target.value);
        setSearchKeyword(e.target.value)
    };

    const filterModeOnChangeHandler = (e) => {
        setFilterMode(e.target.id)
    }

    // const onKeyDownHandler = (e) => {
    //     if (e.keyCode !== 13) {
    //         return
    //     }

    //     setSearchKeyword(searchValue)
    // }

    // const searchButtonOnClick = () => {
    //     setSearchKeyword(searchValue)
    // }
    return (
        <>
            <div css={s.container}>
                <input css={s.searchInput} type="text" placeholder="검색어를 입력해주세요." onChange={searchInputOnChangeHandler}/>
                {/* <button css={s.searchButton} onClick={searchButtonOnClick}>
                    <TbClipboardSearch />
                </button> */}
            </div>
            <div css={s.filterContainer}>
                <input type="radio" id="all" name="filter" checked={filterMode === "all"} onChange={filterModeOnChangeHandler}/>
                <label htmlFor="all">전체</label>
                <input type="radio" id="complete" name="filter" checked={filterMode === "complete"} onChange={filterModeOnChangeHandler}/>
                <label htmlFor="complete">완료</label>
                <input type="radio" id="incomplete" name="filter" checked={filterMode === "incomplete"} onChange={filterModeOnChangeHandler}/>
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    );
}

export default Header;
