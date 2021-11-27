import React from 'react'

const Books: React.FC = () => {
    return (
        <div>
        <div className="m-5 d-flex justify-content-between flex-wrap">
           <div className="alert alert-info mx-5" style={{width:"300px"}}>
                <h2>Title</h2>
                <h5>Description</h5>
                <h3>Price</h3>
           </div>
        </div>
        <div>
            <form className="mx-5"> 
                <div className="d-flex">
                    <input className="form-control mx-3" type="text" placeholder="Title"/>
                    <input className="form-control mx-3" type="text" placeholder="Description"/>
                    <input className="form-control mx-3" type="text" placeholder="Price"/>
                </div>
                <button className="btn btn-primary m-3">Add</button>
                <button className="btn btn-danger m-3">Remove</button>
            </form>
        </div>
        </div>
    )
}

export default Books
