import React from 'react';

const QuizzEnd = ({ score }) => {
    let congratsMsg = '';
    if(score <= 4) congratsMsg = <i class="far fa-sad-tear"></i>;
    if(score > 4 && score <= 6) congratsMsg = "Pas mal!";
    if(score > 7) congratsMsg = "Bien joué !"
    

    return (
        <div className="row text-center">
            <div className="col mt-5">
                <p className="lead">Terminé !</p>
                <p className="lead">Votre score: {score} / 10 - <span>{congratsMsg}</span> </p>
                <a href="/quizz">Retenter ma chance</a>
            </div>
        </div>
    )
}

export default QuizzEnd;