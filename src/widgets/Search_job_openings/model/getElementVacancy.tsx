import React from 'react'

export const getElementVacancy = async (id: number) => {
    try {
        let vacancy = await fetch(`https://api.hh.ru/vacancies/${id}`, {
            method: 'GET',
            headers: {
                'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
            },
        })
            .then(response => response.json())
            .then(data => data)
            .catch(err => null)
        return {
            name: vacancy.name,
            description: vacancy.description,
            salary: {
                from: vacancy.salary.from,
                to: vacancy.salary.to,
                currency: vacancy.salary.currency,
            },
            schedule: vacancy.schedule.name,
            experience: vacancy.experience.name,
            alternate_url: vacancy.alternate_url
        }
        //добавить проверки
    } catch (e) {
        console.log('Ошибка:', e)
    }
}

