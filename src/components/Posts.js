import React, {useEffect, useState} from "react";
import styled from "styled-components"
import PageNation from "./PageNation";

const Layout = styled.div`
    margin : 0 auto;
    max-width: 700px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

function Posts() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;

    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);

        return currentPosts;
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [])

    return (
        <Layout>
            <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>
            {currentPosts(posts).map(post => (
                <div key={post.id}>
                    <h3>{post.id} - {post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
            <PageNation
                paginate={setCurrentPage}
                postPerPage={postPerPage}
                totalPosts={posts.length}
            />
        </Layout>
    );
}

export default Posts