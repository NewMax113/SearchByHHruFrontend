import React from 'react'

import style from '../style/style.module.scss'

export const List_job_openings = () => {
    return (
        <>
            <div>Найдено: 100 вакансий</div>
            <div className={style.list_job_openings}>
                <div className={style.vacancy}>Вакансия. Открыть. Добавить в избранное</div>
                <div className={style.vacancy}>Вакансия. Открыть. Добавить в избранное</div>
                <div className={style.vacancy}>Вакансия. Открыть. Добавить в избранное</div>
                <div className={style.vacancy}>Вакансия. Открыть. Добавить в избранное</div>
            </div>
        </>

    )
}
