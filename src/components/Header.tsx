import { Link } from "react-router-dom"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useState } from "react"

const user = {_id:123, role:"admin" }

const Header = () => {
    const [isopen , setIsOpen] = useState<boolean>(false)
    const logoutHandler = ()=>{


    }

  return (
    <nav className="header">
        <Link onClick={()=>setIsOpen(false)} to={"/"}>Home</Link>
        <Link onClick={()=>setIsOpen(false)} to = {'/search'}> <FaSearch /> </Link>
        <Link onClick={()=>setIsOpen(false)} to = {'/cart'}> <FaShoppingBag /> </Link>

        {
            user?._id ? (
                <>
                <button onClick={()=>setIsOpen(previous=> !previous)}>
                    <FaUser></FaUser>
                </button>
                <dialog open={isopen}>
                    <div>
                        {
                            user.role === 'admin' && (
                                <Link onClick={()=>setIsOpen(false)} to= '/admin/dashboard'> Admin</Link>
                            )
                        }
                        <Link to= "/orders">Orders</Link>
                        <button onClick={logoutHandler}><FaSignOutAlt></FaSignOutAlt></button>
                    </div>
                </dialog>
                </>
            ): (
                <Link to = {'/login'}><FaSignInAlt></FaSignInAlt></Link>
            )
        }
    </nav>
    )
}

export default Header