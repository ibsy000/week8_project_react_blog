import React from 'react'

export default function DeletePostbutton(props) {
    return (
        <>
            <button type="button" className="btn btn-danger mt-2" 
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                >Delete Post</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" 
                aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">

                <h5 className="modal-title" id="exampleModalLabel">Delete Post?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" 
                    aria-label="Close"></button>
                </div>

                <div className="modal-body">
                    Are you sure you want to delete "{props.title}"?
                    <br></br>
                    This decision cannot be reversed.
                </div>

                <div className="modal-footer">

                    <button type="button" className="btn btn-secondary" 
                        data-bs-dismiss="modal">Abort</button>
                    <button type="button" className="btn btn-danger"
                    onClick={props.deletePost}>Delete Post</button>

                </div>
            </div>
            </div>
            </div>
        </>
    )
}
