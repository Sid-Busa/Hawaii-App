'use client';
import { NextPage } from "next";
import { useRouter } from 'next/navigation';

import Image from 'next/image';


interface Props {
  title: string;
  description: string;
  image: string;

}

const Card: NextPage<Props> = ({ title, description, image }) => {
  const router = useRouter();

  const handleRedirectToHighlight = (activity_name: string) => {
    router.push(`/highlight/${activity_name}`)
  }

  return (
    <div className="card" onClick={() => handleRedirectToHighlight(title)} >
      <Image src={image} alt='image' width={0}
        height={0}
        sizes="100vw"
        className='card-img'
      />
      <div className="card-info p-4" >
        <p className="font-semibold	text-lg	text-[#008080]" > {title} </p>
        <p className='my-1' > {description} </p>
        <div className='my-1 text-right rounded-full bg-[#E6F2F2] w-fit	p-3 my-2 ml-auto'>
          <Image src={'/arrow_forward.svg'} alt="arrow" width={20} height={20} />
        </div>
      </div>
    </div>
  )
}
export default Card