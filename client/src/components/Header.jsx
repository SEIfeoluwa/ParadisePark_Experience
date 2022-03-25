import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <h2 className='corp'>Paradise Entertainment Inc.</h2>
                <Link to='/' className='navWord first'>Title</Link>
                <Link to='/review' className='navWord'>Form</Link>
                <Link to='/read'className='navWord'>Review's</Link>
            </nav>
        </header>
    )
}

export default Header