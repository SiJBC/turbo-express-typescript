import React from 'react'
import Image from 'next/image'
import { RandomUIData } from 'types'


const Card: React.FC<RandomUIData> = (props) => {
  return (
    <div>
      <div className='card'>
        <img src={props.avatar} className='card-img-top' alt='...' width={450} height={300} />
        <div className='card-body'>
          <h5 className='card-title'>{props.username}</h5>
          <p className='card-text'>
            {props.firstname}
            {props.lastname}
          </p>
          <a href={props.email} className='btn btn-primary'>
            {props.email}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
