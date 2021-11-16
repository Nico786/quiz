import React from 'react';
import img1 from '../assets/img/Burger_Quiz.png'

const Header = (props) => {
    return (
        <header className="header text-center mb-2">
              <img src={img1} alt="logo du jeu Quizz"/>
        </header>
    )
}

export default Header;