import { Link } from 'react-router-dom'


const Landing = () => {
    
    return (
        <div className='landing'>
            <img className='landing-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Essel_world_Amusement_Park%2C_Gorai%2C_Mumbai%2C_Maharashtra%2C_India_-_panoramio_(4).jpg/1280px-Essel_world_Amusement_Park%2C_Gorai%2C_Mumbai%2C_Maharashtra%2C_India_-_panoramio_(4).jpg' />
            <h1 className='title'>Welcome to Paradise Park Feedback</h1>
        <Link to='/review'><button className='landing-button' id='lb1'>
            Write Review
        </button></Link>
        <Link to='/read'><button className='landing-button' id='lb2'>
            Read Reviews
        </button></Link>   
    </div> 
    )
    
}

export default Landing