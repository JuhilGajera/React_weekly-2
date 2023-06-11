import  './Nav.css'
function Nav() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'>
          <div className='Left'>
          </div>
          <div className='Right'>
            <ul style={{display:'flex'}}>
              <li><button>Home</button></li>
              <li><button>Products</button> </li>
              <li><button>Users</button> </li>
              <li><button>Contact</button> </li>
            </ul>
          </div>
        </div>
      </header >
    </div >
  );
}

export default Nav;
