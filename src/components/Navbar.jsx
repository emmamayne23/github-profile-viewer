import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

const Navbar = () => {
  return (
    <>
        <div>
            <div className='border bg-cyan-700 text-white flex items-center gap-5'>
                <div className='flex border'>
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <div>
                    <NavLink to="/" className=' bg-black p-2 rounded-lg hover:bg-gray-700 duration-200'>
                        <span>Home</span>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar