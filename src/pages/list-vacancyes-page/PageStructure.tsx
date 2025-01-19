import { FC, useState } from 'react'
import { ListJobOpenings, SearchJobOpenings } from '../../widgets'
import FilteringVacancies from '../../widgets/filtering-vacancies/FilteringVacancies'
import { Exit, Logo } from '../../entities'
import { ListBottomConteiner } from '../../featrues'


const PageStructure: FC = () => {
  let [loading, setLoading] = useState<boolean>(true)
  let [beingVacansies, setBeingVacansies] = useState<boolean>(true)

  return (
    <>
      <header>
        <div className='xl:mx-[18%] sm:mx-[10%] xl:flex md:flex sm:flex  mb-2.5'>
          <Logo />
          <div className='flex w-full p-1 items-end xs:text-xs sm:text-base'>
            <SearchJobOpenings setLoading={setLoading} setBeingVacansies={setBeingVacansies} />
            <Exit />
          </div>
        </div>
        {/* <FilteringVacancies loading={loading}></FilteringVacancies> */}
      </header>
      <main className="flex flex-col items-center">
        <ListJobOpenings loading={loading} setLoading={setLoading} beingVacansies={beingVacansies} />
        <ListBottomConteiner setLoading={setLoading} />
      </main>
    </>
  )
}

export default PageStructure