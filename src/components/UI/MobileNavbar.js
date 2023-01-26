import React from 'react'
import navigation from '../../utils/navigation'
import NavLink from './NavLink'
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/auth.slice";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function MobileNavbar({ enabled, toggle }) {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const handleLogout = async () => {
        toggle()
        logout()
            .then(() => {
                console.log("Logged out.")
                navigate('/')
                dispatch(signOut());
            })
            .catch(err => {
                console.log(err)
                return;
            })
    }

    return (
        <div className={`lg:hidden fixed w-full transition-all ${enabled ? `z-50 bg-black bg-opacity-75 backdrop-blur-md` : `hidden opacity-50 -z-50`}`}>
            <ul className='flex flex-col items-start w-10/12 mx-auto my-4 lg:hidden'>
                <div className='flex flex-col items-start'>
                    {
                        navigation.main.map((link, index) => {
                            return <NavLink href={link.path} label={link.label} key={index} className="my-4 text-3xl" onClick={toggle} />
                        })
                    }
                </div>
                <div className='flex flex-col items-start'>
                    {
                        auth
                            ? <div className="flex flex-col items-start">
                                <NavLink onClick={toggle} className="my-4 text-3xl" href='/profile' label={auth.user.email.toString().split('@')[0]} />
                                <button className="hover:text-brand uppercase font-tb my-4 text-3xl" onClick={handleLogout}>Log out</button>
                            </div>
                            : navigation.auth.map((link, index) => {
                                return <NavLink href={link.path} label={link.label} key={index} className="my-4 text-3xl" onClick={toggle} />
                            })
                    }
                </div>
            </ul>
        </div >
    )
}

export default MobileNavbar