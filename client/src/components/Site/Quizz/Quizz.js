import React, { useEffect, useState } from 'react';
import ProgressionBar from './ProgressionBar';
import Questions from './QuestionsList';
import QuizzEnd from './QuizzEnd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizz = () => {
    const [question, setQuestion] = useState(null);
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState(null);
    const [idQuestion, setIdQuestion] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [score, setScore] = useState(0);
    const [quizzEnd, setQuizzEnd] = useState(false)

    const quizz = Questions[0].quizz; //liste de questions + options + REPONSE

    useEffect(() => {
        const newQuizz = quizz.map(({ answer, ...quizzQuestionsOnly }) => quizzQuestionsOnly); //on enlève les réponses pour la cacher de l'user si il ouvre la console, on garde le reste qu'on appelle quizzQuestionOnly.
        //console.log(newQuizz);
        if (idQuestion < quizz.length) {
            setQuestion(newQuizz[idQuestion].question);
            setOptions(newQuizz[idQuestion].options);
            setIdQuestion(newQuizz[idQuestion].id);
        };
    }, [quizz, idQuestion]);



    function handleUserAnswer(selectedAnswser) {
        setAnswer(selectedAnswser);
        setDisabled(false);
    }

    function handleNextQuestion() {
        if (idQuestion < quizz.length - 1) {
            setIdQuestion(prevIdQuestion => prevIdQuestion + 1);
            setDisabled(true);
            setAnswer(null);

            const correctAnswer = quizz[idQuestion].answer;
            if (answer === correctAnswer) {
                setScore(prevScore => prevScore + 1);
                toast.success('+ 1 Bonne réponse !', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('La bonne réponse était: ' + correctAnswer, {
                    position: "top-right",
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            };
        } else {
            console.log("FIN DU QUIZZ")
            setQuizzEnd(true)
        }

    }

    return (
        <>
            <ProgressionBar 
                idQuestion={idQuestion}
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />

            {
                quizzEnd ?
                <QuizzEnd
                    score={score}
                />
                :
                <div>
                <h2 className='my-4'>{question}</h2>
                {
                    options.map((option, index) => (
                        <div className="row my-2" key={index}>
                            <button
                                className={`btn answerQuestion ${answer === option ? "selected" : null}`}
                                onClick={() => handleUserAnswer(option)}>
                                {option}
                            </button>
                        </div>
                    ))
                }

                <div className="row d-grid col-3 mx-auto my-3">
                    <button
                        disabled={disabled}
                        className="btn btn-success"
                        onClick={handleNextQuestion}>
                        Suivant
                    </button>
                </div>
            </div>
            }
            
        </>

    )
}

export default Quizz;