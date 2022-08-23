import classNames from "classnames/bind";
import styles from './Category.module.scss'
import { Link } from 'react-router-dom';
import config from '~/config';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react'

const cx = classNames.bind(styles)
const listproducts = [
    {
        title: 'Đồ lưu niệm Mixi',
        icon: faAngleRight,
        trend: {
            content: 'HOT',
            class: 'red',
        }
    },
    {
        title: 'Áo Mixi',
        icon: faAngleRight,
        trend: {
            content: 'NEW',
            class: 'blue',
        }
    },
    {
        title: 'Áo ba lỗ',
        icon: faAngleRight,
        trend: {
            content: 'POP',
            class: 'green',
        }

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



function Category() {
    return (
        <div className={cx('products-list')}>
            <ul className={cx('item-list')}>
                <p className={cx('title-list')} >Danh mục sản phẩm</p>
                {listproducts.map((item, index) => (
                    <div className={cx('item')} key={index}><FontAwesomeIcon icon={faAngleRight} />
                        <li className={cx('item-products')}>
                            <Link to={config.routes.listProducts.list} className={cx('name-products')}
                            >{item.title}</Link>
                            {item.trend && <span className={cx([item.trend.class])}>{item.trend.content}</span>}
                        </li>
                    </div>
                ))}


            </ul>
        </div>
    );
}

export default memo(Category);