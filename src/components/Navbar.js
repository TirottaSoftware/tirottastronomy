import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/auth.slice";
import { logout } from "../services/authService";

import { ReactComponent as MenuIcon } from '../assets/icons/menu-icon.svg'
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg'
import NavLink from "./UI/NavLink";
import MobileNavbar from "./UI/MobileNavbar";

import navigation from "../utils/navigation";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const auth = useSelector((state) => state.auth);


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        logout()
            .then(() => {
                navigate('/')
                dispatch(signOut());
            })
            .catch(err => {
                console.log(err)
                return;
            })
    }

    const toggleSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <nav className='w-full py-8 text-white bg-black'>
            <div className="w-10/12 mx-auto flex items-center justify-between">
                <button className="block lg:hidden" onClick={(toggleSidebar)}>
                    {
                        sidebar ? <CloseIcon width={24} height={24} />
                            : <MenuIcon width={24} height={24} />
                    }
                </button>
                <div className="hidden lg:flex items-center">
                    {
                        navigation.main.map((link, index) => {
                            return <NavLink href={link.path} label={link.label} key={index} />
                        })
                    }
                </div>
                <div className="hidden lg:flex items-center">
                    {
                        auth
                            ? <div className="flex items-center">
                                <NavLink href='/profile' label={auth.user.email.toString().split('@')[0]} />
                                <button className="hover:text-brand uppercase text-xl font-tb" onClick={handleLogout}>Log out</button>
                            </div>
                            : navigation.auth.map((link, index) => {
                                return <NavLink href={link.path} label={link.label} key={index} />
                            })
                    }
                </div>
            </div>
            <MobileNavbar toggle={toggleSidebar} enabled={sidebar} />
        </nav>
    )
}

export default Navbar