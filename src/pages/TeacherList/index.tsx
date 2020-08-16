import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import TeacherService from '../../services/teacher_class';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [weekDay, setWeekDay] = useState("");
    const [subject, setSubject] = useState("");
    const [time, setTime] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const response = await TeacherService.index(weekDay, subject, time);
        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={handleSubmit}>
                    <Select name="subject" 
                                label="Matéria" 
                                options={
                                    [
                                        {value: 'Artes', label: 'Artes'},
                                        {value: 'Biologia', label: 'Biologia'},
                                        {value: 'Ciêcias', label: 'Ciêcias'},
                                        {value: 'Educação Física', label: 'Educação Física'},
                                        {value: 'Física', label: 'Física'},
                                        {value: 'Geografia', label: 'Geografia'},
                                        {value: 'História', label: 'História'},
                                        {value: 'Matemática', label: 'Matemática'},
                                        {value: 'Português', label: 'Português'},
                                        {value: 'Química', label: 'Química'}
                                    ]
                                }
                                onChange={(e) => setSubject(e.target.value)}
                                />

                    <Select name="week_day" 
                            label="Dia da Semana" 
                            options={
                                [
                                    {value: '0', label: 'Domingo'},
                                    {value: '1', label: 'Segunda-feira'},
                                    {value: '2', label: 'Terça-feira'},
                                    {value: '3', label: 'Quarta-feira'},
                                    {value: '4', label: 'Quinta-feira'},
                                    {value: '5', label: 'Sexta-feira'},
                                    {value: '6', label: 'Sábado'}
                                ]
                            } 
                            onChange={(e) => setWeekDay(e.target.value)} />

                    <Input name="time" 
                           type="time" 
                           label="Hora" 
                           onChange={(e) => setTime(e.target.value)} />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {
                    teachers.map((teacher: Teacher) => (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    ))
                }
            </main>
        </div>
    )
}

export default TeacherList;