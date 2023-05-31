
import { FC } from 'react';

import Card from './Card';
import API from '@/api/Api'

const getHighlights = async () => {
  try {
    const response = await API.get('highlights');
    return response
  } catch (e) {
    console.log(e)
    return []
  }
}

const Highlights: FC = async () => {
  const highlightsData: any = await getHighlights()
  return (
    <div className='highlights'>
      <p className="text-md	font-semibold my-3">Highlights</p>
      {
        highlightsData.length === 0
          ? <div className="no-highlights"> No Highlights are Available </div>
          : <div className="highlights-list">
            {
              highlightsData.map(({ title, description, image }: any, i: number) => (
                <Card
                  key={title + i}
                  title={title}
                  description={description}
                  image={image}
               
                />
              ))
            }
          </div>
      }
    </div>
  );
}
export default Highlights

