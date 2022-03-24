import { Link } from 'react-router-dom'

const Landing = () => {
    <div>
        <h1>Welcome to Paradise Park Feedback</h1>
        <Link to='/review'><button>
            Write Review
        </button></Link>
        <Link to='/read'><button>
            Read Reviews
        </button></Link>
    </div>
}

export default Landing