import styles from './List.module.scss'
import classNames from 'classnames/bind';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react'
import config from "~/config";

const cx = classNames.bind(styles)

const productsShowAPI = [
    {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/07/NMD13172-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/07/NMD13166-1-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 370000,
        describe: 'Bộ Ghép Hình Mixi – Mixi Block SS4',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,


    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/06/NMD_8355-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/06/NMD_8354-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 370000,
        describe: 'Bộ Ghép Hình Mixi – Mixi Block SS3',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    }, {
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/lego-mixi-300x400.jpg',
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/VUVU7620-300x400.jpg',
        label: 'gift',
        sale: 'Giảm giá',
        price: 350000,
        describe: 'Bộ Ghép Hình Mixi – Mixi Block SS1',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    }, {
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2021/11/NM_D9485-300x400.jpg',
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/11/NM_D9499-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 350000,
        describe: 'Bộ Ghép Hình Mixi – Mixi Block SS2',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4674-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4667-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 170000,
        describe: 'Pad chuột MixiGaming',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/binh-giu-nhiet-mixi-2-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/binh-giu-nhiet-mixi-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 270000,
        describe: 'Bình Giữ Nhiệt Fan Cứng Mixi',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    },
    {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/07/c%E1%BB%91c-gi%E1%BB%AF-nhi%E1%BB%87t-mixi-2-scaled-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2019/07/c%E1%BB%91c-gi%E1%BB%AF-nhi%E1%BB%87t-mixi-scaled-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 570000,
        describe: 'Cốc giữ nhiệt Mixi – độ bền cao, khả năng giữ nhiệt tốt',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    },
    {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/07/d%C3%A9p-mixi-1-scaled-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2019/07/d%C3%A9p-mixi-scaled-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 370000,
        describe: 'Dép MixiGaming màu đen trắng quai ngang',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    },
    {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/v%C3%AD-mixi-5-scaled-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/v%C3%AD-mixi-300x400.jpg',
        sale: 'Giảm giá',
        label: 'gift',
        price: 670000,
        describe: 'Ví Mixi Handmade hàng Limited Edition',
        name: 'ĐỒ LƯU NIỆM MIXI',
        link: config.routes.listProducts.souvenir,

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4680-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/apcitylogoden-300x400.jpg',
        sale: 'Giảm giá',
        label: 'shirt',
        price: 250000,
        describe: 'Áo phông MixiCity logo bé – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anicitylogoden-300x400.jpg',

        sale: 'Giảm giá',
        label: 'shirt',
        price: 350000,
        describe: 'Áo phông MixiCity logo bé – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomixigamingden1-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomixigamingden-300x400.jpg',
        label: 'shirt',
        sale: 'Giảm giá',
        price: 350000,
        describe: 'Áo nỉ dài tay Mixi – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomxgden-300x400.jpg',
        sale: 'Giảm giá',
        label: 'shirt',
        price: 250000,
        describe: 'Áo phông MixiCity logo to – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomixigamingtrang2-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/anilogomixigamingtrang1-300x400.jpg',
        label: 'shirt',
        sale: 'Giảm giá',
        price: 250000,
        describe: 'Áo nỉ dài tay MXG – Trắng',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4714-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/apcitylogotrang-300x400.jpg',
        label: 'shirt',
        sale: 'Giảm giá',
        price: 250000,
        describe: 'Áo nỉ dài tay Mixi – Trắng',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/aplogoheartden1-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/aplogohearttrang-300x400.jpg',
        label: 'shirt',
        sale: 'Giảm giá',
        price: 350000,
        describe: 'Áo phông MixiCity logo to – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/apcitybigtrang2-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/apcitybigtrang1-300x400.jpg',
        label: 'shirt',
        sale: 'Giảm giá',
        price: 350000,
        describe: 'Áo phông MXG logo hình – Trắng',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4676-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/aplogoheart-300x400.jpg',
        sale: 'Giảm giá',
        label: 'shirt',
        price: 250000,
        describe: 'Áo nỉ dài tay MixiCity logo bé – Trắng',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/VUVU4694-300x400.jpg',
        imgchange: 'https://shop.mixigaming.com/wp-content/uploads/2022/02/269853364_642776480368378_6727873098590745738_n-300x400.jpg',
        sale: 'Giảm giá',
        label: 'shirt',
        price: 250000,
        describe: 'Áo phông MXG logo chữ – Đen',
        name: 'ÁO MIXI',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-BVCBG-300x400.jpg',
        label: 'shirtbalo',
        price: 150000,
        describe: 'Áo 3 Lỗ Mixi – BL06',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-SO-QUA-SO-QUA-300x400.jpg',
        label: 'shirtbalo',
        price: 150000,
        describe: 'Áo 3 Lỗ Mixi – BL05',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-DUOC-EM-UI-300x400.jpg',
        label: 'shirtbalo',
        price: 150000,
        describe: 'Áo 3 Lỗ Mixi – BL04',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-OI-GIOI-OI-300x400.jpg',
        label: 'shirtbalo',
        price: 150000,
        describe: 'Áo 3 Lỗ Mixi – BL03',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/ao-ba-lo-hi-anh-em-300x400.jpg',
        label: 'shirtbalo',
        price: 150000,
        describe: 'Áo 3 Lỗ Mixi – BL02',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2021/01/Ao-ba-lo-Mixi-QUAY-LEN-300x400.jpg',

        label: 'shirtbalo',
        price: 170000,
        describe: 'Áo 3 Lỗ Mixi – BL01',
        name: 'ÁO BA Lỗ',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-thun-%C4%91en-logo-counter-strike-300x400.jpg',

        label: 'shirtCSGO',
        price: 220000,
        describe: 'Áo thun đen logo counter strike C07',
        name: 'ÁO CSGO',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-thun-%C4%91en-CSGO-logo-300x400.jpg',
        label: 'shirtCSGO',
        price: 230000,
        describe: 'Áo thun đen CSGO logo C06',
        name: 'ÁO CSGO',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-CSGO-dog-AK-rush-B-cyka-blyat-300x400.jpg',

        label: 'shirtCSGO',
        price: 270000,
        describe: 'Áo CSGO dog AK rush B cyka blyat C05',
        name: 'ÁO CSGO',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-CSGO-rush-B-cyka-blyat-300x400.jpg',
        price: 280000,
        describe: 'Áo CSGO rush B cyka blyat C03',
        name: 'ÁO CSGO',
        label: 'shirtCSGO',
    }, {
        img: ' https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-thun-%C4%91en-CSGO-smoke-mid-everday-300x400.jpg',
        label: 'shirtCSGO',
        price: 300000,
        describe: 'Áo thun đen CSGO smoke mid everday C04',
        name: 'ÁO CSGO',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-thun-CSGO-rush-B-no-stop-300x400.jpg',
        price: 270000,
        describe: 'Áo thun CSGO rush B no stop C02',
        name: 'ÁO CSGO',
        label: 'shirtCSGO',
    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%A1o-csgo-%C4%91en-h%C3%ACnh-moly-holly-300x400.jpg',
        label: 'shirtCSGO',
        price: 280000,
        describe: 'Áo CSGO đen hình moly holly C01',
        name: 'ÁO CSGO',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-logo-Playerunknowns-battle-grounds-300x400.jpg',
        label: 'shirtPUBG',
        price: 280000,
        describe: 'Áo logo Playerunknowns battle grounds P06',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-logo-%C4%91%E1%BA%A7u-x%C6%B0%C6%A1ng-m%C5%A9-ba-300x400.jpg',
        label: 'shirtPUBG',
        price: 250000,
        describe: 'Áo PUBG logo đầu xương mũ ba P08',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-%C4%91en-logo-Uzi-m%C5%A9-m%E1%BB%99t-300x400.jpg',
        label: 'shirtPUBG',
        price: 260000,
        describe: 'Áo PUBG đen logo Uzi mũ một P07',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-m%C5%A9-ba-gi%C3%A1p-ba-cool-ng%E1%BA%A7u-300x400.jpg',
        label: 'shirtPUBG',
        price: 270000,
        describe: 'Áo PUBG mũ ba giáp ba cool ngầu P05',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-%C4%91en-shotgun-m%C5%A9-m%E1%BB%99t-300x400.jpg',
        label: 'shirtPUBG',
        price: 270000,
        describe: 'Áo PUBG đen shotgun mũ một P01',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-pochinki-is-my-city-300x400.jpg',
        label: 'shirtPUBG',
        price: 250000,
        describe: 'Áo PUBG pochinki is my city P03',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-thun-PUBG-%C4%91en-m%C5%A9-ba-kar98-300x400.jpg',
        label: 'shirtPUBG',
        price: 280000,
        describe: 'Áo thun PUBG đen mũ ba kar98 P04',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81o-PUBG-m%C5%A9-ba-logo-battlegrounds-300x400.jpg',
        label: 'shirtPUBG',
        price: 230000,
        describe: 'Áo PUBG mũ ba logo battlegrounds P02',
        name: 'ÁO PUBG',

    }, {
        img: 'https://shop.mixigaming.com/wp-content/uploads/2019/06/%C3%81O-REFUND-GAMING-300x400.png',
        label: 'shirtRefund',
        price: 175000,
        describe: 'Áo Refund Gaming cực kì cool ngầu',
        name: 'ÁO REFUNDGAMING'
    },
]
function List({ label }) {

    const handleFilterProduct = (productList) => {
        if (label === 'all') {
            return productList
        }
        return productList.filter(item => item.label === label)
    }

    return (

        <div className={cx('Home-products')}>
            {handleFilterProduct(productsShowAPI).map((item, index) => (
                <div className={cx('List-products')} key={index}>
                    <div className={cx('products-item')}>
                        <div className={cx('products-image')}>
                            <div className={cx('box-hover')}>
                                {item.imgchange && (
                                    <div className={cx('box-item')}>
                                        <div className={cx('box-img')}>
                                            <img className={cx('img-change', 'lego')} src={item.imgchange} alt='legomixi' />
                                        </div>
                                        <div className={cx('sale')}>{item.sale}</div>
                                    </div>
                                )
                                }
                                <div className={cx('products-notification')}>
                                    <span >Hết Hàng</span>
                                </div>
                                <img src={item.img} alt='legomixi' className={cx('lego')} />
                            </div>
                        </div>
                        <div className={cx('products-information')}>
                            <div className={cx('products-name')}>{item.name}</div>
                            <div className={cx('products-describe')}>{item.describe}</div>
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <FontAwesomeIcon className={cx('products-start')} icon={faStar} />
                            <p className={cx('products-price')}>
                                {item.price.toLocaleString()}
                            </p>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default memo(List);