import classNames from 'classnames/bind';
import styles from './Feedback.module.scss';
import video1 from '~/assets/videos/video-1.mp4'
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import ReactPlayer from 'react-player';
import imgDescribe from '~/fakeApi/FeedBack'


const cx = classNames.bind(styles);

function Feedback() {
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
                    <ReactPlayer url={video1}
                        className={cx('video1')}
                        width={'100%'}
                        height={'350px'}
                        playing={true}
                        controls={false}
                        muted={true}
                        loop={true}
                    />
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

export default Feedback;