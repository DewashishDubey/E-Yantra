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
      <hr className="n" />
      <div className="cards">
        <div className='card'>
        <Link to='/Seven '>
          <img className='homecard' src={cardimg1} alt='card1' />
          </Link>
        </div>
         
        <div className='card'>
        <Link to='/One '>
  
          <img className='homecard' src={cardimg2} alt='card2' />
        </Link>
        </div>
        <div className="card"  id='hid'>
        <Link to='/Four'>
          <img className='homecard' src={cardimg3} alt='card2' />
          </Link>
        </div>
        <div className="card" id='hid2'>
        <Link to='/Three'>
          <img className='homecard'  src={cardimg4} alt='card2' />
          </Link>
        </div>
      </div>
      <Link to='/comp'>
        <button className='moe'>Show More</button>
      </Link>
    </>
  )
}

export default Cards
