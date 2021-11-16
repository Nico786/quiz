import React from 'react';

const ProgressionBar = ({idQuestion}) => {
    
    const progression = `${idQuestion + 1}0%`
    
    return (
        <>
            <div>
                Question: {idQuestion + 1}/10
            </div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: progression}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default ProgressionBar;