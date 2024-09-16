import { Link } from 'react-router-dom';
import './header.scss'
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Formater } from '../../../../utils/Formater';
const Header = () => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className='row'>
                        <div className='col-6 header-top-left'>
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    anhquanvo911@gmail.com
                                </li>
                                <li>Free shipping on orders from {Formater(200000)}</li>

                            </ul>
                        </div>
                        <div className='col-6 header-top-right'>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li><li>
                                    <Link to={""}>
                                        <AiOutlineLinkedin />
                                    </Link>
                                </li><li>
                                    <Link to={""}>
                                        <AiOutlineGlobal />
                                    </Link>
                                </li><li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Log in</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Header;