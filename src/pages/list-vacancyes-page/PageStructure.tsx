import { FC, useState } from 'react'
import { ListJobOpenings, SearchJobOpenings } from '../../widgets'
import { Exit, Header, Logo, Main } from '../../entities'
import { ListBottomConteiner } from '../../featrues'


const PageStructure: FC = () => {
  let [loading, setLoading] = useState<boolean>(true)
  let [beingVacansies, setBeingVacansies] = useState<boolean>(true)

  return (
    <>
      <Header>
        <Logo />
        <div className='flex w-full items-end xs:text-xs sm:text-base'>
          <SearchJobOpenings setLoading={setLoading} setBeingVacansies={setBeingVacansies} />
          <Exit />
        </div>
      </Header>
      <Main>
        <ListJobOpenings loading={loading} setLoading={setLoading} beingVacansies={beingVacansies} />
        <ListBottomConteiner setLoading={setLoading} />
      </Main>
    </>
  )
}

export default PageStructure