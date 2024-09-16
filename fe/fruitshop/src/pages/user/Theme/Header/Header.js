import { Link } from 'react-router-dom';
import './header.scss'
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { Formater } from '../../../../utils/Formater';
import { useState } from 'react';
import { ROUTERS } from 'utils/Router';
const Header = () => {

    const [menu, setMenu] = useState([
        {
            name: 'Home',
            path: ROUTERS.USER.HOME,
        },
        {
            name: 'STORE',
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: 'PRODUCT',
            path: ROUTERS.USER.HOME,
            isShowSubMenu: false,
            child: [
                {
                    name: 'Meat',
                    path: ""
                },
                {
                    name: 'Meat',
                    path: ""
                },
                {
                    name: 'Meat',
                    path: ""
                },
            ]
        },
        {
            name: 'BLOG',
            path: ROUTERS.USER.HOME,
        },
        {
            name: 'CONTACT',
            path: ROUTERS.USER.HOME,
        },
    ]);
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
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <div className='header-logo'>
                            <h1>FruitShop</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <nav className='header-menu'>
                            <ul>
                                {menu?.map((item, index) => (
                                    <li key={index} className={index === 0 ? "active" : ""} >
                                        <Link to={item?.path}>{item.name}</Link>
                                        {
                                            item.child && (
                                                <ul className='header-menu-dropdown'>
                                                    {
                                                        item.child.map((childItem, indexChild) => (
                                                            <li key={`${index}-${indexChild}`}>
                                                                <Link to={childItem.path}>
                                                                    {childItem.name}
                                                                </Link>
                                                            </li>

                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-3'>
                        <div className='header-cart'>
                            <div className='header-cart-price'>
                                <span>{Formater(101123)} </span>
                            </div>
                            <ul>
                                <li>
                                    <Link to='#'>
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header;