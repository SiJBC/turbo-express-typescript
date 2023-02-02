import { Button } from 'ui'
import { RootObject } from 'types'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import Cards from '../components/Cards'

interface Props {
  randomUiData: RootObject[]
}

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await axios.get('http://localhost:6060/json')
  const randomUiData: RootObject[] = data

  return {
    props: {
      randomUiData
    }
  }
}

export default function Docs (props: Props) {
  return (
    <div style={{ display: 'flex' }}>
      <Cards props={props.randomUiData}/>
    </div>
  )
}
