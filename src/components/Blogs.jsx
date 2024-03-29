import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import Spinner from "./Spinner";

const Blogs = () => {
    const { posts, loader } = useContext(AppContext);

    return (
        <div className="container" style={{padding:"100px"}}>
            {loader ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <p className="text-danger">No posts found</p>
            ) : (
                posts.map((post) => (
                    <div className="card mb-4" key={post.id}>
                        <div className="card-body">
                            <h4 className="card-title">{post.title}</h4>
                            <p className="card-text">
                                <small className="text-muted">
                                    by {post.author} on <span className='underline text-xl font-bold cursor-pointer'>{post.category}</span> 
                                </small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">posted on {post.date}</small>
                            </p>
                            <p className="card-text">{post.content}</p>
                            <div>
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="badge bg-secondary me-2">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Blogs;
