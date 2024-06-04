import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gratilog = () => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center bg-light rounded border shadow">
                <div className="d-flex flex-row justify-content-between w-100 align-items-center">
                    <div className="d-flex flex-column w-75 p-5 m-5 bg-white rounded shadow">
                        <h1 className="text-primary">What are you <mark className="m-1 rounded text-success">grateful</mark> for today?</h1>
                        <div className="form-group mt-4">
                            <label htmlFor="gratitude-1" className='text-primary'>Gratitude 1:</label>
                            <input type="text" id="gratitude-1" className="form-control" placeholder="Enter your gratitude" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="gratitude-2" className='text-primary'>Gratitude 2:</label>
                            <input type="text" id="gratitude-2" className="form-control" placeholder="Enter your gratitude" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="gratitude-3" className='text-primary'>Gratitude 3:</label>
                            <input type="text" id="gratitude-3" className="form-control" placeholder="Enter your gratitude" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="gratitude-4" className='text-primary'>Gratitude 4:</label>
                            <input type="text" id="gratitude-4" className="form-control" placeholder="Enter your gratitude" required/>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="gratitude-5" className='text-primary'>Gratitude 5:</label>
                            <input type="text" id="gratitude-5" className="form-control" placeholder="Enter your gratitude" required/>
                        </div>

                        <button type='button' className='btn btn-primary mt-5 w-100'>Submit</button>
                        <hr className="w-100 mt-4 border-success"/>
                    </div>

                    <div className="w-25 m-5 d-flex flex-column align-items-center">
                        <img draggable='false' src='pooh-gratitude.png' className='img-thumbnail mb-4' style={{ transform: 'rotate(15deg)'}}/>
                        <img draggable='false' src='pooh-gratitude-2.jpeg' className='img-thumbnail mb-4' style={{ transform: 'rotate(-15deg)'}} />
                        <img draggable='false' src='pooh-gratitude-3.jpeg' className='img-thumbnail' style={{ transform: 'rotate(15deg)'}} />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-primary m-5'>Your recent <mark className='text-success rounded'>gratitudes</mark> </h1>
            </div>
        </>
    );
}

export default Gratilog;
