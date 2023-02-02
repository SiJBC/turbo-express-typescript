import React from 'react'
import { RandomUIData } from 'types'
import Card from './Card'

interface CardProps {
    props: RandomUIData[]
}

const Cards: React.FC<CardProps> = (cardProps) => {
    const {props} = cardProps
    console.log(props)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', margin: 'auto', gap: '10rem' }}>
        {
            props.map((el) => <Card firstname={el.firstname} lastname={el.lastname} avatar={el.avatar} 
            username={el.username} email={el.email} address={el.address}/>)
        }
    </div>
  )
}

export default Cards