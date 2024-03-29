import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import { useEffect, useState } from 'react';
import Products from './Products';
import { useSelector } from 'react-redux';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';

import avatar from '~/assets/images/avatar.jpg';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '~/firebase';
import { signOut } from 'firebase/auth';

const cx = classNames.bind(styles);


function Header({ setShow, size, isLogin, onLogoutSuccess }) {
    const [showSearch, setShowSearch] = useState(false);
    const [showitem, setShowItem] = useState(false);
    const [loggedInUser] = useAuthState(auth)
    const totalPrice = useSelector((state) => state.callPrices.prices);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleup = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const  setUserInDb = async () => {
          try {
            await setDoc(
              doc(db , 'users', loggedInUser?.email),
              {
                email: loggedInUser?.email,
                lastSeen: serverTimestamp(), //  thoi gian nguoi dung
                photoURL: loggedInUser?.photoURL
              },
              {
                merge: true // khong response 1 email 2 lan 
              }
            )
          }catch(error) {
            console.log('ERROR SETTING USER INFO IN DB', error)
          }
        }
        if(loggedInUser) {
          setUserInDb()
        }
      
      },[loggedInUser])

      const Logout = async () => {
        try {
            await signOut(auth)
        }catch(error) {
            console.log('Error LOGGING OUT', error)
        }
    }
      
    return (
        <div>
            {showSearch && (
                <div className={cx('modal')}>
                    <div className={cx('modal__overlay')}> </div>
                    <div className={cx('modal__body')}>
                        <FontAwesomeIcon
                            className={cx('icon-close')}
                            onClick={() => {
                                if (showitem) {
                                    setShowItem(false);
                                }
                                setShowSearch(!showSearch);
                            }}
                            icon={faClose}
                        />
                        <div className={cx('search')}>
                            <Search />
                        </div>
                    </div>
                </div>
            )}

            <div className={cx(['navbar', offset > 750 && 'sticky'])}>
                <div className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div className="container-fluid">
                        <div className="navbar-nav auto">
                            
                            <Link to={config.routes.home}>
                                <img
                                    onClick={() => setShow(true)}
                                    className={cx(['logo-images', offset > 750 && 'imgchange'])}
                                    src={images.logo}
                                    alt="mixi"
                                />
                            </Link>
                            <div className={cx('search-link')}>
                                <button className={cx('header-link')} onClick={() => setShowSearch(!showSearch)}>
                                    <SearchIcon className={cx('search-icon')} />
                                </button>

                                <Link
                                    to={config.routes.home}
                                    className={cx('header-link')}
                                    onClick={() => setShow(true)}
                                >
                                    <span>HOME</span>
                                </Link>
                                <div className={cx('header-link')}>
                                    <div style={{ cursor: 'text' }} onClick={() => setShowItem(!showitem)}>
                                        <span className={cx('list-link')}> DANH MỤC SẢN PHẨM</span>
                                        <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                    </div>
                                    <div className={cx(['product-list', offset > 750 && 'list-products-change'])}>
                                        {/* show Products */}
                                        {showitem && <Products show={showitem} hanldeShow={() => setShowItem(false)} />}
                                    </div>
                                </div>

                                <Link to={config.routes.notification} className={cx('header-link')}>
                                    <p onClick={handleup}>THÔNG BÁO</p>
                                </Link>
                            </div>
                        </div>
                        <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        {/* header right*/}
                        <div className={cx('header-wrapperRight collapse navbar-collapse')} id="navbarResponsive">
                          <div className="navbar-nav ml-auto">
                                <div className={cx('phone-number')}>
                                    <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone} />
                                    <Tippy
                                        delay={[0, 50]} //ơbắt đầu, kết thúc]
                                        offset={[10, 10]} //[chiều ngang, chiều cao]
                                        content="09222222016"
                                        placement="bottom"
                                    >
                                        <span className={cx('phone')}>0922222016</span>
                                    </Tippy>
                                </div>
                                <p className={cx('space')}></p>
    
                                <div className={cx('cart-shoping')} onClick={() => setShow(false)}>
                                    <FontAwesomeIcon icon={faCartShopping} className={cx('icon-cart')} />
                                    <span className={cx('cart')}>GIỎ HÀNG / {totalPrice.toLocaleString()} ₫</span>
                                    <span className={cx('size')}>{size}</span>
                                </div>
                                <div className={cx('login')}>
                                    {isLogin ? (
                                        <img src={avatar} alt="avatar" className={cx('avatar_login')}></img>
                                    ) : (
                                        <Link to={config.routes.login}>
                                            {loggedInUser
                                            ? 
                                            (
                                               <div>
                                                <img className={cx('avatar_login')} src={loggedInUser.photoURL} alt='avatar'/>
                                                    <div className={cx('messageSuccess')}>
                                                        <span style={{marginLeft: '5px'}}>Login Success</span>
                                                    </div>
                                                    <button  className={cx('btn-logout')} onClick={Logout}>Đăng Xuất</button>
                                                </div>
                                            )

                                             : (
                                                <button className={cx('btn-login')}>Đăng Nhập</button>)}
                                        </Link>
                                    )}
                                </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
