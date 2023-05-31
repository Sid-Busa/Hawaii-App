'use client';
import { NextPage } from "next";
import Image from 'next/image';
import { useState } from 'react';

type Activity = {
  title: string;
}

interface Props {
  name: string;
  activities: Activity[]
}

const Category: NextPage<Props> = ({ name, activities }) => {
  const [expand, setExpand] = useState(false)
  const handleToggle = () => {
    setExpand((prew) => !prew)
  }
  return (
    <div className="category-info">
      <div className='category' onClick={handleToggle} >
        <p> {name} </p>
        <Image
          src={expand ? "/arrow_down.svg" : "/arrow_forward.svg"}
          alt="arrow"
          width={15}
          height={15}
        />
      </div>
      {expand &&
        <div className='category-activities' >
          <ul className="list-disc" >
            {
              activities.map((activity, i: number) => (
                <li key={activity.title + i} > {activity.title} </li>
              ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default Category