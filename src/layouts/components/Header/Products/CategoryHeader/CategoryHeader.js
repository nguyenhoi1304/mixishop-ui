import classNames from "classnames/bind";
import styles from './CategoryHeader.module.scss'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react'
import { Link } from "react-router-dom";
import config from "~/config";

const cx = classNames.bind(styles)
const listproducts = [

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


function CategoryHeader({ handleShowList }) {

    return (
        <div className={cx('products-list')}>
            <ul className={cx('item-list')}>
                <p className={cx('title-list')} >Danh mục sản phẩm</p>
                {listproducts.map((item, index) => (
                    <div className={cx('item')} key={index}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <Link to={item.link}>
                            <li className={cx('item-products')}
                                onClick={handleShowList}
                            >
                                {item.title}
                                {item.trend && <span className={cx([item.trend.class])}>{item.trend.content}</span>}
                            </li>
                        </Link>
                    </div>
                ))
                }

            </ul >
        </div >
    );
}

export default memo(CategoryHeader);