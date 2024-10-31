import React, {
  useState,
  ChangeEvent,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { sortVacancies } from '../model/sortVacancies'
import { AppDispatch } from '../../parameters-job-openings/model/reducer'
import { getListVacancies } from '../model/job-opening-reducer'
import { useSelector } from 'react-redux'
import { IRootState } from '../../parameters-job-openings/model/reducer'
import { newObjectVacancyThunk } from '../model/newObjectVacancy-thunk'
import { setPage } from '../model/redux/pages-reducer'
import Input from '../../../ui/Input'
import Button from '../../../ui/button'
import useFetch from '../../../hooks/useFetch'


const SearchJobOpenings = ({ setLoading }: { setLoading: any }) => {
  let [word, setWord] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  let vacancy = useSelector<IRootState, any>(state => console.log(state.jobOpeningReducer.job_opening_Array))
  let parametersPresent = useSelector<IRootState, boolean>(state => state.params.parametersPresent)
  let obj = useSelector<IRootState, any>(state => state.params.parameters)
  let pages = useSelector<IRootState, any>(state => state.pages.page)
  let textInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)
  let url = 'https://api.hh.ru/vacancies'
  let [telo, setTelo] = useState<string>('&search_field=name&search_field=company_name&search_field=description')
  //let telo: string = '&search_field=name&search_field=company_name&search_field=description' //что то


  //////////////////////////////////////////////////////////////////////////////////////////////
  //ЭТО ПРИМЕНЕНИЕ ХУКА ДЛЯ ПРЛУЧЕНИЯ ВАКАНСИЙ И СТРАНИЦ
  let data = useFetch('https://api.hh.ru/vacancies', word, pages, 113, '&per_page=6',
    {
      method: 'GET',
      headers: {
        'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
      }
    })

  useEffect(() => {
    if (data) {
      // let test = async() => {
      //   let vacancies = await sortVacancies(data)
      //   await dispatch(newObjectVacancyThunk(vacancies[0]))
      //   await dispatch(setPage(vacancies[1]))
      //   setLoading(true)
      // }
      // test()
      console.log(data)
    }
  }, [data])
  //////////////////////////////////////////////////////////////////////////////////////////////

  //const start = performance.now();//счетчик времени начала

  // useEffect(() => {

  //   if (parametersPresent) {
  //     for (let key in obj) {
  //       if (typeof obj[key] === 'object') {
  //         for (let key2 in obj[key]) {
  //           if (key2 == 'noExp') {
  //             if (obj[key]['noExp']) {
  //               setTelo(`${telo}&experience=noExperience`)
  //             }
  //           }
  //           if (key2 == 'minExp') {
  //             if (obj[key]['minExp']) {
  //               setTelo(`${telo}&experience=between1And3`)
  //             }
  //           }
  //           if (key2 == 'maxExp') {
  //             if (obj[key]['maxExp']) {
  //               setTelo(`${telo}&experience=between3And6`)
  //             }
  //           }
  //           if (key2 == 'full') {
  //             if (obj[key]['full']) {
  //               setTelo(`${telo}&schedule=fullDay`)
  //             }
  //           }
  //           if (key2 == 'replaceable') {
  //             if (obj[key]['replaceable']) {
  //               setTelo(`${telo}&schedule=remote`)
  //             }
  //           }
  //           if (key2 == 'remote') {
  //             if (obj[key]['remote']) {
  //               setTelo(`${telo}&schedule=shift`)
  //             }
  //           }
  //         }
  //       }
  //       if (key == 'city') {
  //         if (obj['city']) {
  //           setTelo(`${telo}&area=1`)
  //         }
  //         else {
  //           setTelo(`${telo}&area=113`)
  //         }
  //       }
  //       if (key == `earning`) {
  //         setTelo(`${telo}&salary=${obj['earning']}`)
  //       }
  //     }
  //   }
  //   console.log(telo, 'TELO')
  //   // 
  // }, [parametersPresent])



  const searchWord = async (word: string) => {
    setLoading(false)
    // console.log('ВЫЗОВ !111')
    // let selectedVacancies: any
    //   selectedVacancies = await fetch(`${url}?text=${word}&area=113&per_page=6&page=${pages}`, {
    //     method: 'GET',
    //     headers: {
    //       'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
    //     },
    //   })
    //     .then(response => response.json())
    //     .then((data) => {
    //       console.log(data, 'DATA')
    //       return {
    //         pages: {
    //           pages: data.pages,
    //           page: data.page,
    //           found: data.found
    //         },
    //         items: data.items
    //       }
    //     })
    //     .catch(err => console.log('Ошибочка:', err))
    
    let selectedVacancies = useFetch('https://api.hh.ru/vacancies', word, pages, 113, '&per_page=6',
      {
        method: 'GET',
        headers: {
          'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
        }
      })
    let vacancies = await sortVacancies(selectedVacancies)
    await dispatch(newObjectVacancyThunk(vacancies[0]))
    await dispatch(setPage(vacancies[1]))
    setLoading(true)

    //const end = performance.now(); //счетчик времени конец
    //console.log(`searchWord: ${end - start} ms`);

    // let selectedVacancies = await fetch(`http://localhost:3000/`)
    //   .then(response => response.json())
    //   .then(data => data)
    //   .catch(err => console.log('Ошибочка:', err))

    // await dispatch(newObjectVacancyThunk(selectedVacancies))
  }

  useEffect(() => {
    searchWord(word)
  }, [pages])

  return (
    <div className={'flex justify-center mt-1'}>
      <form className={'flex justify-between w-2/4'} onSubmit={(e: any) => { e.preventDefault(); searchWord(word) }}>
        <Input typeInput='text' value={word} placeholder='Поиск вакансии' onChange={textInput} classInput='border-2 mx-1.5 w-full px-1 rounded-md' />
        <Button classButton='font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0' text='Поиск' onClick={async () => searchWord(word)} />
      </form>
    </div>
  )
}

export default SearchJobOpenings


