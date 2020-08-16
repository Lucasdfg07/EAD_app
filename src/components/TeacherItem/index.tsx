import React, { useState } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

import ConnectionService from "../../services/connection";

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
  }

  interface TeacherItemProps {
    teacher: Teacher;
  }

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    const [connections, setConnections] = useState([]);

    async function createNewConnection() {
        await ConnectionService.create(teacher);
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Lucas Siqueira" />

                <div>
                    <strong>{teacher.name}</strong>
                    <span> {teacher.subject} </span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost} </strong>
                </p>

                <a  rel="noopener noreferrer"
                    target="_blank"
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}>

                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;