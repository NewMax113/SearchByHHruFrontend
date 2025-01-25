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
        <div className='xl:max-w-screen-xl items-center xl:flex md:flex sm:flex p-2 mb-2.5 max-w-screen-xl m-auto lg:max-w-grid-lg sm:max-w-grid-sm'>
          <Logo />
          <div className='flex w-full items-end xs:text-xs sm:text-base'>
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