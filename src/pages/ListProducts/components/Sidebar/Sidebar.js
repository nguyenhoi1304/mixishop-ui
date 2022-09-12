import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import { memo } from 'react'
import { useDispatch } from "react-redux";
import { callProductActions } from "~/store/actions/callPageAction";
import { useNavigate } from "react-router-dom";
import CategoryData from '~/fakeApi/CategoryProductsList'



const cx = classNames.bind(styles)


function Sidebar({ onHandleChange }) {

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
                {CategoryData.map((item, index) => (
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

export default memo(Sidebar);