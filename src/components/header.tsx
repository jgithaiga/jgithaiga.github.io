import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [show, setShow] = React.useState(false);
  const navbarControl = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', navbarControl);
    return () => window.removeEventListener('scroll', navbarControl)
  },[]);

  return (
    <>
      <nav className={`fixed top-0 z-30 w-full text-neutral ${show && 'bg-white shadow'}`}>
        <div className="container flex flex-wrap items-center justify-between w-full py-2 mx-auto mt-0">
          <div className={`flex items-center pl-4 ${show ? 'text-primary' : 'text-white'}`}>
            <Link to="/" className="flex items-center gap-2">
              <StaticImage
                src="../images/logo-icon.png"
                width={50}
                quality={95}
                alt="Company logo image"
              />
              <div className="font-bold text-sm md:text-xl uppercase">
                {siteTitle}
              </div>
            </Link>
          </div>

          <div className="block pr-4 sm:hidden">
            <button className={`flex items-center p-1 focus:outline-none ${show ? 'text-primary' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen && <>
                <svg className="fill-current h-6 w-6" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
                    l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
                    L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
                    c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
                    C8.625,39.813,8.625,40.447,9.016,40.837z"/>
                </svg>
              </>}
              {!isMenuOpen && <>
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </>}
            </button>
          </div>

          <div className={"z-20 flex-grow w-full p-4 sm:flex sm:items-center sm:w-auto sm:mt-0 sm:bg-transparent sm:p-0 " 
            + (isMenuOpen ? "block" : "hidden") + " " + (show ? "bg-white" : "bg-primary")}>
            <ul className="items-center justify-center flex-1 m-3 list-reset sm:flex sm:justify-end">
              {/* <li className="mr-3 mt-1 sm:mt-0">
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
              </li> */}
              <li className="mr-3 mt-5 sm:mt-0">
                <a href="https://www.thirdriver.io/our-services" className="nav-link w-full">Services</a>
              </li> 
              <li className="mr-3 mt-5 sm:mt-0">
                <a href="https://www.thirdriver.io/portfolio" className="nav-link w-full">Portfolio</a>
              </li>       
              <li className="mr-3 mt-5 sm:mt-0">
                <a href="https://www.thirdriver.io/contact-us" className={`btn w-full ${show ? 'btn-primary' : 'btn-accent'}`}>Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
