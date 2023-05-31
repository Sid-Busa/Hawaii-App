import Image from 'next/image';
export default function TravelGuideCard() {
  return (
    <div className="travel-guide-info-container">
      <div className="travel-guide-info">
        <div className="travel-guide-basic-info">
          <h4 className="text-lg my-2" > Hadwin Malone </h4>
          <p className='text-[#90999a]' >  Guide since 2012 </p>

          <button className="mt-6 contact-btn "> Contact </button>
        </div>
        <div className="travel-guide-img">
          <Image
            src={'/sunset.jpeg'}
            alt='image'
            width={150}
            height={100}
            style={{ width: 130, height: 120, borderRadius: '50%' }}
          />
        </div>
      </div>
    </div>
  )
}