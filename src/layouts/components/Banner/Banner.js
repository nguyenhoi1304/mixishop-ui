import classNames from 'classnames/bind';
import styles from './Banner.module.scss'
import 'tippy.js/dist/tippy.css';
import bannerMixi from '~/assets/images/bannerMixi.png'
import config from '~/config';
import { Link } from 'react-router-dom';



const cx = classNames.bind(styles)

function banner() {
    return (
        <div className={cx('banner')}>

            <div className={cx('banner-img')}>
                <img src={bannerMixi} alt="banner-mixi" className={cx('img-mixi')}></img>
            </div>
            <div className={cx('banner-center')}>
                <h2 className={cx('align-center')}>BÁN CHẠY NHẤT </h2>

                <Link to={config.routes.danhmuc} className={cx('link-lookall')}>
                    <span style={{ fontSize: '1.8rem', fontWeight: '600' }}>XEM TẤT CẢ</span>
                </Link>

            </div>
        </div>
    );
}

export default banner;