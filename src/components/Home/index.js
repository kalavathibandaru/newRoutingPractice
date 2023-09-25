// Write your JS code here
import './index.css'

const Home = props => {
  const {name} = props
  return (
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
        className="home-image"
      />
      <h1 className="home-heading">Home</h1>
    </div>
  )
}

export default Home
