
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Products.module.scss'



const cx = classNames.bind(styles);

const listproducts = [
    {
        title: 'Đồ lưu niệm Mixi',
        icon: faAngleRight
    },
    {
        title: 'Áo Mixi',
        icon: faAngleRight

    },
    {
        title: 'Áo ba lỗ',
        icon: faAngleRight

    },
    {
        title: 'Áo Refund Gaming',
        icon: faAngleRight

    },
    {
        title: 'Áo PUBG',
        icon: faAngleRight

    },

]

const ProductsImg = [
    {
        link: 'http://localhost:3001/static/media/aomixi.8f284c1cb12d62f173b5.jpg'
    },
    {
        link: "https://shop.mixigaming.com/wp-content/uploads/2021/11/NM_D9485-scaled.jpg"
    },
    {
        link: 'http://localhost:3001/static/media/binhgiunhiet.8da9fd810f54d90a282c.jpg'
    },
]

function Products() {
    return (

        <>
            <div className={cx('container')}>
                <div className={cx('products-list')}>
                    <ul className={cx('item-list')}>
                        <p className={cx('title-list')} >Danh mục sản phẩm</p>
                        {listproducts.map((item, index) => (
                            <div className={cx('item')} key={index}><FontAwesomeIcon icon={faAngleRight} />
                                <li className={cx('item-products')}>
                                    <span className={cx('name-products1')}>{item.title}</span>
                                </li>
                            </div>
                        ))}

                        <div style={{ margin: '10px 0 35px 0', alignItems: 'center' }}>
                            <a href='https://shop.mixigaming.com/' className={cx('link-lookall')}>
                                <span style={{ fontSize: '1.8rem', fontWeight: '600' }}>Xem tất cả</span>
                            </a>
                        </div>
                    </ul>
                </div>
                {ProductsImg.map((item, key) => (
                    <div className={cx('products-lego')} key={key}>
                        <div className={cx('item-lego')}>
                            <img src={item.link} alt="legomixi" className={cx('img-legomixi')}></img>
                        </div>
                        <div className={cx('box-text-seemore')}>
                            <a href="https://shop.mixigaming.com/danh-muc/do-luu-niem-mixi/">
                                <span className={cx('see-more')}>XEM THÊM </span>
                                <FontAwesomeIcon className={cx('item-right')} icon={faAngleRight} />
                            </a>
                        </div>
                    </div>

                ))}






            </div>
        </>
    );
}

export default Products;