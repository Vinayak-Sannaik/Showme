import './navbar.css';

const Navbar = ({toggleDarkMode, isDarkMode}) => {
  return (
    <nav>
      <ul>
        <li><a href="https://github.com/Vinayak-Sannaik" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/vinayak-sannaik/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="#connect">Connect</a></li>
        <li><button className='dark-model' onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button></li>
      </ul>
      
    </nav>
  )
}


export default Navbar