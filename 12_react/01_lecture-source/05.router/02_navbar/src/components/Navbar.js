import {NavLink} from 'react-router-dom';

// function Navbar() {
//     return (
//         <div>
//             <ul>
//                 <li><Link to={"/"}>Home</Link></li>
//                 <li><Link to="/mypage">MyPage</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//             </ul>
//         </div>
//     );
// }

function Navbar() {
    const activeStyle = {
        background: 'blue'
    };

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined}>Home</NavLink></li>
                <li><NavLink to="/mypage" style={ ({isActive}) => isActive? activeStyle: undefined}>MyPage</NavLink></li>
                <li><NavLink to="/login" style={ ({isActive}) => isActive? activeStyle: undefined}>Login</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;