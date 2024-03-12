import './Cards.css'
import cardimg1 from "../assets/card1.jpeg"
import cardimg2 from "../assets/card2.jpeg"
import cardimg3 from "../assets/card3.jpeg"
import cardimg4 from "../assets/card4.jpeg"
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <>
          <h2><span>Our</span> Components</h2>
          <hr className="new2"/>
          <div className="cards">
              <div className='card'>
                    <img src={cardimg1} alt='card1'/>
              </div>
              <div className='card'>
                                      <img src={cardimg2} alt='card2'/>

              </div>
              <div className="card">
                      <img src={cardimg3} alt='card2'/>
              </div>
              <div className="card">
                      <img src={cardimg4} alt='card2'/>
              </div>
      </div>
      <Link to='/comp'>
        <button className='more'>Show More</button>
      </Link>
    </>
  )
}

export default Cards
