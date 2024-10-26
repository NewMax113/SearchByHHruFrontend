import React from 'react'

export const getElementEmployer = async (id: number) => {
    try {
        let selectedVacancies = await fetch(`https://api.hh.ru/employers/${id}`, {
            method: 'GET',
            headers: {
                'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
            },
        })
            .then(response => response.json())
            .then(data => data)
            .catch(err => null)
        return {
            name: selectedVacancies?.name || null,
            logo_urls: selectedVacancies?.logo_urls?.original  || null,
            type: selectedVacancies?.type || null,
            trusted: selectedVacancies?.trusted || null,
            accredited_it_employer: selectedVacancies?.accredited_it_employer || null,
            site_url: selectedVacancies?.site_url || null,
            open_vacancies: selectedVacancies?.open_vacancies || null,
        }
        //добавить проверки
    } catch (e) {
        console.log('Ошибка:', e)
    }

}

