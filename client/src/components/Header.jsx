import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <Link to='/' className='navWord'>Title</Link>
                <Link to='/review' className='navWord'>Form</Link>
                <Link to='/read'className='navWord'>Review's</Link>
                <h2 className='corp'>Paradaise Entertainment Inc.</h2>
            </nav>
        </header>
    )
}

export default Header