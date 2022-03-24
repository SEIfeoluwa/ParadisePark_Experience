import { Link } from 'react-router-dom'

const Landing = () => {
    
    return (
       <div>
         <h1>Welcome to Paradise Park Feedback</h1>
        <Link to='/read'><button>
            Write Review
        </button></Link>
        <Link to='/review'><button>
            Read Reviews
        </button></Link>   
    </div> 
    )
    
}

export default Landing