import './CSS/Menu.css'

const Menu = () => {
  return (
    <div className='Menu-bar'>
      <nav className='MenuNav'>
        <ul className='Menu-com'>
          <a href=""><li>Guidenlines</li></a>
          <a href=""><li>About US</li></a>
          <a href=""><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default Menu