import './navbar.css';

interface NavbarProps {
  toggleDarkMode: () => void; // Function to toggle dark mode
  isDarkMode: boolean; // Boolean to determine if dark mode is active
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav>
  <ul>
    <li>
      <a href="https://github.com/Vinayak-Sannaik" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub Icon" style={{ width: '24px', height: '24px' }} />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/vinayak-sannaik/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Icon" style={{ width: '24px', height: '24px' }} />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter Icon" style={{ width: '24px', height: '24px' }} />
      </a>
    </li>
    <li>
      <a href="#connect">
        <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact Icon" style={{ width: '24px', height: '24px' }} />
      </a>
    </li>
    <li>
      <button className="dark-model" onClick={toggleDarkMode}>
        <img
          src={isDarkMode ? 'https://cdn-icons-png.flaticon.com/512/869/869869.png' : 'https://cdn-icons-png.flaticon.com/512/869/869869.png'}
          alt={isDarkMode ? 'Light Mode Icon' : 'Dark Mode Icon'}
          style={{ width: '24px', height: '24px' }}
        />
      </button>
    </li>
  </ul>
</nav>

  )
}


export default Navbar