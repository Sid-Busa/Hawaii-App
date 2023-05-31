import Banner from '@/components/Banner'
import Highlights from '@/components/Highlights'
import Categories from '@/components/Categories'
import TravelGuide from '@/components/TravelGuide'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Banner />
      <Highlights />
      <div className="category-container">
        <Categories />
        <TravelGuide />
      </div>
      <Footer />
    </>
  )
}

