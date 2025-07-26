import { HiOutlineHome } from "react-icons/hi2";
import { BsExclamationDiamond } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function NavBar() {
    return <div className="nav">
        <img className="icon" src="food.icon.jpeg" alt="logo" />
        <div className="nav-links">
            <Link to="/" className="tx"><HiOutlineHome /> Home</Link>
            <Link to="/About" className="tx"><BsExclamationDiamond />About</Link>
            <Link to="/Contact" className="tx"><RiContactsLine />Contact</Link>

            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
}
export default NavBar;