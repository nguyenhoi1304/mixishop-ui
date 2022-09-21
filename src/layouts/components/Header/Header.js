import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCartShopping, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import { useEffect, useRef, useState } from 'react';
import Products from './Products';
import { useSelector } from 'react-redux';


// dsdasdgrgrdg
const cx = classNames.bind(styles)

const useClickOutside = (handler) => {
    const search = useRef();
    const listproducst = useRef();

    useEffect(() => {
        const mybeHandler = (event) => {
            if (!search.current.contains(event.target) || !listproducst.current.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener("mousedown", mybeHandler);

        return () => {
            document.removeEventListener("mousedown", mybeHandler)
        }
    })
    return search

}


function Header({ setShow, size }) {
    const [showSearch, setShowSearch] = useState(false)
    const [showitem, setShowItem] = useState(false)

    const totalPrice = useSelector(state => state.callPrices.prices)

    const search = useClickOutside(() => {
        setShowSearch(false)
    })

    const listproducst = useClickOutside(() => {
        setShowItem(false)
    })

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
        })
    }

    return (
        <div>
            {showSearch && (<div className={cx('modal')}>

                <div className={cx('modal__overlay')}> </div>
                <div ref={search} className={cx('modal__body')}>
                    <FontAwesomeIcon className={cx('icon-close')} onClick={() => {
                        if (showitem) {
                            setShowItem(false)
                        }
                        setShowSearch(!showSearch)

                    }} icon={faClose} />
                    <div className={cx('search')} >
                        <Search />
                    </div>
                </div>
            </div>)}

            <div className={cx(['navbar', offset > 750 && 'sticky'])}>

                <div className={cx('navbar-listproducts')}>
                    <div className={cx('inner')}>

                        <div className={cx('header-wrapperLeft')}>
                            <Link to={config.routes.home}  >
                                <img onClick={() => setShow(true)} className={cx(['logo-images', offset > 750 && 'imgchange'])} src={images.logo} alt="TikTok" />
                            </Link>
                            <div className={cx('search-link')} >


                                <button className={cx('header-link')}
                                    onClick={() => setShowSearch(!showSearch)}
                                >
                                    <SearchIcon className={cx('search-icon')} />
                                </button>

                                <Link to={config.routes.home} className={cx('header-link')} onClick={() => setShow(true)}>HOME</Link>
                                <div ref={listproducst} className={cx('header-link')}>
                                    <div style={{ cursor: 'text' }} onClick={() => setShowItem(!showitem)}>
                                        <span className={cx('list-link')} > DANH MỤC SẢN PHẨM</span>
                                        <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                    </div>
                                    <div className={cx(['product-list', offset > 750 && 'list-products-change'])}
                                    >

                                        {/* show Products */}
                                        {showitem && <Products show={showitem} hanldeShow={() => setShowItem(false)}

                                        />}
                                    </div>
                                </div>

                                <Link to={config.routes.notification} className={cx('header-link')}

                                ><p onClick={handleup}>THÔNG BÁO</p></Link>

                            </div>
                        </div>

                        {/* header right*/}
                        <div className={cx('header-wrapperRight')}>
                            <div className={cx('phone-number')}>
                                <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone} />
                                <Tippy
                                    delay={[0, 50]}//ơbắt đầu, kết thúc]
                                    offset={[10, 10]} //[chiều ngang, chiều cao]
                                    content='09222222016'
                                    placement='bottom'>
                                    <span className={cx('phone')} >0922222016</span>
                                </Tippy>
                            </div>
                            <p className={cx('space')}></p>

                            <div className={cx('cart-shoping')} onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faCartShopping} className={cx('icon-cart')} />
                                <span className={cx('cart')}>GIỎ HÀNG / {totalPrice.toLocaleString()} ₫</span>
                                <span className={cx('size')}>{size}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;