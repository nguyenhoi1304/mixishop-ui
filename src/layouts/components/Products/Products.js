import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Category from '../../../pages/ListProducts/components/Category/Category';
// import { Link } from 'react-router-dom';
import styles from './Products.module.scss'

const cx = classNames.bind(styles);



const ProductsImg = [
    {
        link: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/2-1536x1024.jpg'
    },
    {
        link: "https://shop.mixigaming.com/wp-content/uploads/2021/11/NM_D9485-scaled.jpg"
    },
    {
        link: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/binh-giu-nhiet-mixi-4-1536x1024.jpg'
    },
]

function Products() {
    return (

        <>
            <div className={cx('container')} >
                <div style={{ display: 'flex' }}>
                    <Category />
                    <div style={{ display: 'flex' }}>
                        {ProductsImg.map((item, key) => (
                            <div className={cx('products-lego')} key={key}>
                                <div className={cx('item-lego')}>
                                    <img src={item.link} alt="legomixi" className={cx('img-legomixi')}></img>
                                </div>
                                <div className={cx('box-text-seemore')}>
                                    <a href="https://shop.mixigaming.com/danh-muc/do-luu-niem-mixi/">
                                        <p className={cx('see-more')}>XEM THÊM
                                            <FontAwesomeIcon className={cx('item-right')} icon={faAngleRight} /></p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('btn-see-all')}>
                    <a href='https://shop.mixigaming.com/' className={cx('link-lookall')}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '600' }}>Xem tất cả</span>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Products;