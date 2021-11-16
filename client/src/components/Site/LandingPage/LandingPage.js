import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    return (
        <>
            <div className="row mx-auto">
                <p className='lead text-center pt-5'>2 minutes à perdre ?</p>
                <div className="col d-flex justify-content-center">
                    <Link to='/quizz'><button className="btn btn-success">C'est parti !</button></Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage;