import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [posts, setPosts] = useState([]);

    async function fetchPostData(pageNumber) {
        setLoader(true);
        const url = "https://codehelp-apis.vercel.app/api/get-blogs?";
        const finalUrl =`${url}?page=${pageNumber}`;
        try {
            let result = await fetch(finalUrl);
            let data = await result.json();
            console.log(data);
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        } catch (e) {
            console.log("Error occurred: ", e);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoader(false);
    }
    function changePage(newPage){
        console.log("this is my new page",newPage)
        setPage(newPage)
        fetchPostData(newPage);
    }
    const value = {
        loader,
        setLoader,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchPostData,
        changePage
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
