import { Link } from "react-router-dom"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { useState } from "react"

const user = {_id:123, role:"admin" }

const Header = () => {
    const [isopen , setIsOpen] = useState<boolean>(false)

  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to = {'/search'}> <FaSearch /> </Link>
        <Link to = {'/cart'}> <FaShoppingBag /> </Link>

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
                                <Link to= '/admin/dashboard'> Admin</Link>
                            )
                        }
                        <Link to= "/orders">Orders</Link>
                        <button><FaSignOutAlt></FaSignOutAlt></button>
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