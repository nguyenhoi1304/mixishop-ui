import classNames from "classnames/bind";
import styles from './Category.module.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react'
import config from "~/config";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
const listproducts = [
    {
        title: 'Tất cả sản phẩm',
        label: 'all',
        link: config.routes.danhmuc,
    },
    {
        title: 'Áo Mixi',
        icon: faAngleRight,
        trend: {
            content: 'NEW',
            class: 'blue',
        },
        label: 'shirt',
        link: config.routes.listProducts.mixishirt,

    },
    {
        title: 'Đồ lưu niệm Mixi',
        icon: faAngleRight,
        trend: {
            content: 'HOT',
            class: 'red',
        },
        label: 'gift',
        link: config.routes.listProducts.souvenir,

    },
    {
        title: 'Áo ba lỗ',
        icon: faAngleRight,
        trend: {
            content: 'POP',
            class: 'green',
        },
        label: 'shirtbalo',
        link: config.routes.listProducts.baloshirt,

    },
    {
        title: 'Áo CSGO ',
        icon: faAngleRight,
        label: 'shirtCSGO',
        link: config.routes.listProducts.CSGOshirt,

    },
    {
        title: 'Áo PUBG',
        icon: faAngleRight,
        label: 'shirtPUBG',
        link: config.routes.listProducts.PUBGshirt,

    },
    {
        title: 'Áo Refund Gaming',
        icon: faAngleRight,
        label: 'shirtRefund',
        link: config.routes.listProducts.refundshirt,

    },

]

function Category({ onHandleChange }) {

    const handleChange = (item) => {
        onHandleChange(item.label)
    }


    return (

        <div className={cx('products-list')}>
            <ul className={cx('item-list')}>
                <p className={cx('title-list')} >Danh mục sản phẩm</p>
                {listproducts.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <div className={cx('item')} >
                            <li className={cx('item-products')} onClick={() => handleChange(item)}>
                                {item.title}
                                {item.trend && <span className={cx([item.trend.class])}>{item.trend.content}</span>}
                            </li>
                        </div>
                    </Link>

                ))}
            </ul>
        </div >
    );
}

export default memo(Category);