import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {

            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that 
            // promise settles and return its result
            const response = await axios.get(
                "/posts");

            // After fetching data stored it in posts state.
            setPosts(response.data);

            // Closed the loading page
            setLoading(false);
        }

        // Call the function
        loadPost();
    }, []);
    return (
        <Fragment>
            {loading ? (
                <h4>Loading...</h4>) :
                (posts.map((item, index) =>
                    <div key={index} className="row">
                        <div className="col-12 mb-4 border rounded shadow p-3">
                            <h3>{item.title}</h3>
                            <p className='mb-0'>{item.body}</p>
                        </div>
                    </div>
                )
                )
            }
        </Fragment>
    )
}

export default Posts;