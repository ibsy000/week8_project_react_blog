import React from 'react'

export default function SortBy(props) {
    return (
        <>
            <div className="row">
                <select className="form-select" onChange={event => props.handleSort(event.target.value)}>
                    <option>Sort By:</option>
                    <option value="id">Date Created (first to last)</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </>
    )
}
