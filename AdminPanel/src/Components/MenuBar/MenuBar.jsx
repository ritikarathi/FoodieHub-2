
const MenuBar = ({toggleBar}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle" onClick={toggleBar}>
                            <i className='bi bi-list'></i>
                        </button>
                        
                    </div>
                </nav>
    </div>
  )
}

export default MenuBar;
