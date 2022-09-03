import React from 'react'

export default function BlogPosts(props) {
    return (
        <>  
            <div className="row justify-content-center">
            <h1 className='text-center mt-4'>Blog Posts</h1>

                <div className="card m-3 p-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/200/302" 
                                className="img-fluid rounded-start" alt=''/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blog Title</h5>
                                <p className="card-text">This is a wider card with 
                                    supporting text below as a natural lead-in to 
                                    additional content. This content is a little bit 
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                                <a href="/" className="btn btn-primary">Read Full Post</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card m-3 p-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/200/301"
                                className="img-fluid rounded-start" alt=''/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blog Title</h5>
                                <p className="card-text">This is a wider card with 
                                    supporting text below as a natural lead-in to 
                                    additional content. This content is a little bit 
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                                <a href="/" className="btn btn-primary">Read Full Post</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card m-3 p-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/201/300"
                                className="img-fluid rounded-start" alt=''/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blog Title</h5>
                                <p className="card-text">This is a wider card with 
                                    supporting text below as a natural lead-in to 
                                    additional content. This content is a little bit 
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                                <a href="/" className="btn btn-primary">Read Full Post</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card m-3 p-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://picsum.photos/201/301"
                                className="img-fluid rounded-start" alt=''/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Blog Title</h5>
                                <p className="card-text">This is a wider card with 
                                    supporting text below as a natural lead-in to 
                                    additional content. This content is a little bit 
                                    longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Last updated 3 mins ago
                                    </small>
                                </p>
                                <a href="/" className="btn btn-primary">Read Full Post</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </>
    )
}
