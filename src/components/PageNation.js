import React from "react";
import styled from "styled-components"

const PageUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: center;
    border : 1px solid black;
`;

const PageLi = styled.li`
    padding : 5px;
    font-size : 20px;
    display : inline-block;
    margin : 3px;
    color : white;
    font-weight : 700;
    border-radius : 50%;
    &:hover {
        color : gold;
        cursor : pointer;
    }
    background : blue;
`;

const PageSpan = styled.span`
    
`;

function PageNation({paginate, postPerPage, totalPosts}) {

    const pageNumbers = [];
    const total = Math.ceil(totalPosts / postPerPage) ;

    for (let i = 1; i <= total; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <PageUl>
                    {pageNumbers.map((pageNumber) => {
                        return (
                            <PageLi key={pageNumber}>
                                <PageSpan onClick={()=>{
                                    paginate(pageNumber)
                                }}>{pageNumber}</PageSpan>
                            </PageLi>
                        )
                    })}
                </PageUl>
            </nav>
        </div>
    );
}

export default PageNation