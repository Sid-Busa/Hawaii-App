import { NextPage } from "next";
import Nav from '../components/Nav'

interface Props {
  image?: string;
}

const Banner: NextPage<Props> = ({ image }) => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url('${image}')` }} >
      <div className="banner">
        <div className="nav-container">
          <Nav />
        </div>
        <div className="title" >
          <h1> Welcome </h1>
          <h1> to Hawaii  </h1>
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  image: "/Banner.png"
};

export default Banner