import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';



const cx = classNames.bind(styles);


const productsShow = [
    {
        id: 1,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/07/NMD13172-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/07/NMD13166-1-300x400.jpg',
    }, {
        id: 2,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/06/NMD_8355-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/06/NMD_8354-300x400.jpg',
    }, {
        id: 3,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomxgden-300x400.jpg',
    }, {
        id: 4,
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2019/10/ao-phong-mixi-den-300x400.jpg',
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Untitled-Capture5201-300x400.jpg',
    }, {
        id: 5,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Mixi3723-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/ao-phong-mixi-trang-300x400.jpg',
    }, {
        id: 6,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-QUAY-LEN-300x400.jpg',
    }, {
        id: 7,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/ao-ba-lo-hi-anh-em-300x400.jpg',
    }, {
        id: 8,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-OI-GIOI-OI-300x400.jpg',
    }, {
        id: 9,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-DUOC-EM-UI-300x400.jpg',
    }, {
        id: 10,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-DUOC-EM-UI-300x400.jpg',
    }, {
        id: 11,
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-BVCBG-300x400.jpg',
    }
]

function Home() {


    return (
        <div className={cx('Home-products')}>
            {productsShow.map((item, id) => (
                <div className={cx('List-products')} key={id}>
                    <div className={cx('products-item')}>
                        <div className={cx('products-image')}>
                            <div className={cx('box-hover')}>
                                {item.imgchange && (
                                    <div>
                                        <div>
                                            <img className={cx('img-change', 'lego')} src={item.imgchange} alt='legomixi' />
                                        </div>
                                    </div>)
                                }
                                <div className={cx('products-notification')}>
                                    <span > Hết Hàng</span>
                                </div>
                                <img src={item.img} alt='legomixi' className={cx('lego')} />
                            </div>
                        </div>
                        <div className={cx('products-information')}>
                            <div className={cx('products-name')}>ĐỒ LƯU NIỆM MIXI</div>
                            <div className={cx('products-describe')}>BỘ GHÉP MÔ HÌNH MIXI- MIXI BLOCK SS4</div>
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <p className={cx('products-price')}> 260.0000</p>
                        </div>
                    </div>

                </div>
            ))}


        </div>
    );
}

export default Home;
