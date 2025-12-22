/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./Styles";
import { IoTrash } from "react-icons/io5";

function Main() {
    return (
        <div css={s.container}>
            <div css={s.listContainer}>
                <ul>
                    <li>
                        <input type="checkbox" id="1" />
                        <label htmlFor="1"></label>
                        <label htmlFor="1">할 일 내용</label>
                        <div>
                            <div>
                                <IoTrash />
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="2" />
                        <label htmlFor="2"></label>
                        <label htmlFor="2">할 일 내용</label>
                        <div>
                            <div>
                                <IoTrash />
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="3" />
                        <label htmlFor="3"></label>
                        <label htmlFor="3">할 일 내용</label>
                        <div>
                            <div>
                                <IoTrash />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input type="text" placeholder="할 일을 입력하세요." />
            </div>
        </div>
    );
}

export default Main;
