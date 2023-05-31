
'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import API from '@/api/Api'
import Banner from '@/components/Banner';
import Image from 'next/image';


const Activity = () => {
  const { activity_name } = useParams();
  const [loading, setLoading] = useState<boolean>(false)
  const [highlight, setHighlight] = useState<any>(false)
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await API.get(`activities/${activity_name}`);
        console.log(response)
        setHighlight(response)
      } catch (e) {
        console.log('error', e)
      } finally {
        setLoading(false)
      }

    })()
  }, [])
  if (loading) return <div className='loading' > Loading... </div>
  return (
    <div>
      <div className="hightlight-activity-container" >
        <div className="hightlight-activity-img-container" style={{ backgroundImage: `url('${highlight.image}')` }} >
        </div>
        <div>
          <div className='pb-4'>
            <h4 className='text-2xl text-[#008080] font-medium	'> {highlight.name} </h4>
            <h6 className='text-lg pt-2  text-[#838383]'> {highlight.description} </h6>
          </div>
          <h3 className='text-xl font-medium pb-3'> Activities </h3>
          {
            (highlight.activities || []).length === 0
              ? ' No Activities'
              :
              <div className='avtivity-container' >
                {
                  (highlight.activities || []).map(({ name }: any, i: number) => (<div className='activity' key={name + i}> {name} </div>))
                }
              </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Activity