import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Title</Link>
                <Link to='/review'>Form</Link>
                <Link to='/read'>Review's</Link>
            </nav>
        </header>
    )
}

export default Header