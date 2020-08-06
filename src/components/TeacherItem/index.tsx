import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/30336824?s=460&u=22e6d0eadf348c587e9ab09ee70882e4ff690e3e&v=4" alt="Lucas Siqueira" />

                <div>
                    <strong>Lucas Siqueira</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem Ipsum
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 50,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;