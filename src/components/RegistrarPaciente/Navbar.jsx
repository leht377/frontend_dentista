import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userName }) => {
  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('dataUserlogged');
    navigate('/');
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-xl navbar-dark d-flex justify-content-between px-5 container-xxl"
        style={{
          background: '#f4f4f4',
        }}
      >
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink
              to={'/Dashboard/registrar'}
              style={{
                color: 'black',
                fontSize: '1.2rem',
              }}
              className={({ isActive }) =>
                isActive ? 'navActive nav-link' : 'nav-link'
              }
            >
              Registrar paciente
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={{
                color: 'black',
                fontSize: '1.2rem',
              }}
              to={'/Dashboard/buscar'}
              className={({ isActive }) =>
                isActive ? 'navActive nav-link' : 'nav-link'
              }
            >
              Buscar paciente
            </NavLink>
          </li>
        </ul>

        <div className="w-15">
          <div className="dropstart ">
            <button
              className="btn btn-secondary border-0 bg-transparent dropdown-toggle d-flex justify-content-center align-items-center gap-2"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: '#183153' }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background:
                    "url('https://s2.coinmarketcap.com/static/img/coins/64x64/14553.png')",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              {userName}
            </button>

            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <button onClick={logout} className="dropdown-item" href="#d">
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
