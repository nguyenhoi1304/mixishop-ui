import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import video1 from '~/assets/videos/video-1.mp4'
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const imgDescribe = [
    {
        id: 1,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/285751193_965417174142610_482049721479540921_nlow.jpg'
    },
    {
        id: 2,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/285008644_743396537018593_264177592201778977_nlow.jpg'
    },
    {
        id: 3,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/278487776_506790190981089_923250684233744838_nfull.jpg'
    },
    {
        id: 4,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/276019325_455851319570750_5043674034086534611_nfull.jpg'
    },
    {
        id: 5,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/274924490_703499940652116_8381906484330626711_nlow.jpg'
    },
    {
        id: 6,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/274260024_158591116523194_8931527463177837126_nfull.jpg'
    },
    {
        id: 7,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/272373791_225970116402095_6070615666538848304_nlow.jpg'
    },
    {
        id: 8,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/274015172_925361664793470_4512605055108024848_nfull.jpg'
    },
    {
        id: 9,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/270020878_306162494764493_7328374017755712493_nlow.jpg'
    },
    {
        id: 10,
        link: 'https://shop.mixigaming.com/wp-content/uploads/sb-instagram-feed-images/269864022_615881856352435_974588027566221583_nlow.jpg'
    },


]

function Sidebar() {
    return (
        <div className={cx('product-description')}>
            <aside className={cx('siderbar')}>
                <div className={cx('siderbar-description')}>
                    <span className={cx('name')} >MiXiShop</span>
                    <p style={{ fontWeight: 400, fontSize: '1.7rem' }}>Cập nhật thông tin về sản phẩm mới</p>

                    <div className={cx('description-button')} >
                        <button className={cx('login-button')}>FANPAGE</button>
                        <button className={cx('login-button')}>INSTAGRAM</button>
                    </div>
                </div>
                <div className={cx('siderbar-video')}>
                    <div className={cx('overlay')}> </div>
                    <video src={video1}
                        className={cx('video1')}
                        autoPlay
                        controls
                        loop
                    >
                    </video>
                    <div>
                        <p className={cx('feedback')}>Awesome feedback</p>
                    </div>
                </div>
            </aside>
            <div>
                <Grid item container>
                    {imgDescribe.map((item, id) => (
                        <Grid item xs={2.4} key={id} >
                            <img className={cx('img-describe')} src={item.link} alt='' />
                        </Grid>
                    ))}
                </Grid>
                <div className={cx('btn-describe')}>
                    <button className={cx('load-btn')}> Load More</button>
                    <button className={cx('follow-btn')}>
                        <FontAwesomeIcon icon={faInstagram} className={cx('icon-insta')} />
                        <span>Follow us</span>
                    </button>
                </div>
            </div>

        </div >

    );
}

export default Sidebar;