import React from "react";

export default function React02() {
    console.log("CountState 렌더링 됨")
    const student = {
        name: "박윤호",
        age: 25,
        hobby: ["여행가기", "노래듣기", "영화보기"],
    };
    return (
        <div>
            <div>이름 : {student.name}</div>
            <div>나이 : {student.age} ({student.age > 19 ? "성인" : "미성년자"})</div>
            <div>
                <p>취미</p>
                <ul>
                    {student.hobby.map((hobbyName) => (
                        <li>{hobbyName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
