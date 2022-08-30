import classNames from "classnames/bind";
import styles from './Category.module.scss'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react'
import { useDispatch } from "react-redux";
import { callProductActions } from "~/store/actions/callPageAction";
import { useNavigate } from "react-router-dom";



const cx = classNames.bind(styles)
const listproducts = [
    {
        title: 'Tất cả sản phẩm',
        label: 'all',
    },
    {
        title: 'Áo Mixi',
        icon: faAngleRight,
        trend: {
            content: 'NEW',
            class: 'blue',
        },
        label: 'shirt',

    },
    {
        title: 'Đồ lưu niệm Mixi',
        icon: faAngleRight,
        trend: {
            content: 'HOT',
            class: 'red',
        },
        label: 'gift',

    },
    {
        title: 'Áo ba lỗ',
        icon: faAngleRight,
        trend: {
            content: 'POP',
            class: 'green',
        },
        label: 'shirtbalo',

    },
    {
        title: 'Áo CSGO ',
        icon: faAngleRight,
        label: 'shirtCSGO',

    },
    {
        title: 'Áo PUBG',
        icon: faAngleRight,
        label: 'shirtPUBG',

    },
    {
        title: 'Áo Refund Gaming',
        icon: faAngleRight,
        label: 'shirtRefund',

    },

]

function Category({ onHandleChange }) {

    const history = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (item) => {
        onHandleChange(item.label)
        const action = callProductActions(item.label);
        history('/danh-muc')

        dispatch(action);
    }

    return (

        <div className={cx('products-list')}>
            <ul className={cx('item-list')}>
                <p className={cx('title-list')} >Danh mục sản phẩm</p>
                {listproducts.map((item, index) => (
                    <div key={index}>
                        <div className={cx('item')} >
                            <li className={cx('item-products')} onClick={() => handleChange(item)}>
                                {item.title}
                                {item.trend && <span className={cx([item.trend.class])}>{item.trend.content}</span>}
                            </li>
                        </div>
                    </div>

                ))}
            </ul>
        </div >
    );
}

export default memo(Category);