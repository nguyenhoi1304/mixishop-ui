import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import FooterCol from "./FooterCol";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles)
function Footer() {
    function AboutUs() {
        return (
            <div className={cx('about-us')}>
                <span>Website chính thức và duy nhất của MixiShop. Hiện tại chúng mình chỉ nhận đơn hàng trên website chứ không nhận bất kỳ nơi nào khác nhé!</span>
            </div>
        )
    }
    function Cate() {
        const categorys = [
            {
                products: 'Áo CSGO',
            },
            {
                products: 'Áo Mixi',
            },
            {
                products: 'Áo PUBG',
            },
            {
                products: 'Áo Refund Gaming',
            },
            {
                products: 'ĐỒ lưu niệm Mixi',
            },
            {
                products: 'Áo ba lỗ',
            },
        ]
        return (
            <>
                <ul>
                    {categorys.map((item, index) => (
                        <li className={cx('list-products')}
                            key={index}
                        >{item.products}</li>
                    ))}
                </ul>
            </>
        )
    }

    function Information() {
        const informations = [
            {
                info: 'Giới thiệu',
            },
            {
                info: 'Chính sách bảo mật',
            },
            {
                info: 'Điều khoản',
            },
            {
                info: 'Sitemap',
            },
        ]
        return (
            <ul>
                {informations.map((item, key) => (
                    <li className={cx('list-products')} key={key}>{item.info}</li>
                ))}
            </ul>
        )
    }

    function Support() {
        return (
            <div>
                <p>Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram</p>
                <div style={{ display: 'flex' }}>
                    <Tippy
                        delay={[0, 50]}//ơbắt đầu, kết thúc]
                        offset={[10, 10]} //[chiều ngang, chiều cao]
                        content='Follow on FaceBook'
                        placement='top'>
                        <p><FontAwesomeIcon className={cx('icon-link')} icon={faFacebook} /></p>
                    </Tippy>
                    <Tippy
                        delay={[0, 50]}//ơbắt đầu, kết thúc]
                        offset={[10, 10]} //[chiều ngang, chiều cao]
                        content='Follow on Instagram'
                        placement='top'>
                        <p><FontAwesomeIcon className={cx('icon-link')} icon={faInstagram} /></p>
                    </Tippy>
                </div>
            </div>
        )
    }

    const introduce = [
        {
            title: 'Về chúng tôi',
            content: AboutUs()
        },
        {
            title: 'Danh mục sản phẩm',
            content: Cate()
        },
        {
            title: 'Thông tin',
            content: Information()
        },
        {
            title: 'Hỗ trợ ',
            content: Support()
        },
    ]

    return (
        <div className={cx('Footer')}>
            {introduce.map((item, index) =>
                <FooterCol title={item.title} key={index}>
                    {item.content}
                </FooterCol>
            )}
        </div>
    );

}

export default Footer;