 import React from 'react';
 import {MainVisualWrapper,
    // MainVisualHeader,
    MainVisualH1,
    MainVisualP} from './MainVisualBorad';
// 메인비쥬얼 Post 담당

export function MainBoard() {
     return (
        <MainVisualWrapper>
            {/* <MainVisualHeader> */}
                <MainVisualH1>MyBlog Welcome</MainVisualH1>
                <MainVisualP>첫번째 posts</MainVisualP>
                <MainVisualP>두번째 posts</MainVisualP> 
                <MainVisualP>세번째 posts</MainVisualP>
                <MainVisualP>네번째 posts</MainVisualP>
            {/* </MainVisualHeader> */}
        </MainVisualWrapper>
     );
 }


 export default MainBoard;