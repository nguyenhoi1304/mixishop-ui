import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import FooterCol from "./FooterCol";
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import config from "~/config";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callProductActions } from "~/store/actions/callPageAction";

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
                label: 'shirtCSGO',

            },
            {
                products: 'Áo Mixi',
                label: 'shirt',

            },
            {
                products: 'Áo PUBG',
                label: 'shirtPUBG',

            },
            {
                products: 'Áo Refund Gaming',
                label: 'shirtRefund',

            },
            {
                products: 'ĐỒ lưu niệm Mixi',
                label: 'gift',

            },
            {
                products: 'Áo ba lỗ',
                label: 'shirtbalo',

            },
        ]
        const dispatch = useDispatch()
        const history = useNavigate()

        const handlerShowProducts = (item) => {
            window.scrollTo({
                top: 0,
                behavior: 'auto',
            })
            const action = callProductActions(item.label)
            history('/danh-muc')
            dispatch(action)

        }

        return (
            <>

                <ul>
                    {categorys.map((item, index) => (
                        <li className={cx('list-products')}
                            onClick={() => handlerShowProducts(item)}
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
                link: config.routes.notification,
            },
            {
                info: 'Chính sách bảo mật',
                link: config.routes.privacypolicy,

            },
            {
                info: 'Điều khoản',
                link: config.routes.rules,

            },
            {
                info: 'Sitemap',
                link: config.routes.sitemap,

            },
        ]
        const handlerUppolicy = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
        return (

            <ul>
                {informations.map((item, index) => (
                    <Link key={index} to={item.link}><li className={cx('list-products')} onClick={handlerUppolicy}>{item.info}</li></Link>
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
                        offset={[10, 6]} //[chiều ngang, chiều cao]
                        content='Follow on FaceBook'
                        placement='top'>
                        <p style={{ cursor: 'pointer' }}><FontAwesomeIcon className={cx('icon-link')} icon={faFacebook} /></p>
                    </Tippy>
                    <Tippy
                        delay={[0, 50]}//ơbắt đầu, kết thúc]
                        offset={[10, 6]} //[chiều ngang, chiều cao]
                        content='Follow on Instagram'
                        placement='top'>
                        <p style={{ cursor: 'pointer' }}><FontAwesomeIcon className={cx('icon-link')} icon={faInstagram} /></p>
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