import classNames from "classnames/bind";
import styles from './CategoryHeader.module.scss'

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callProductActions } from "~/store/actions/callPageAction";
import CategoryHeaderApi from '~/fakeApi/CategoryHeaderApi'
const cx = classNames.bind(styles)



function CategoryHeader({ handleShowList }) {

    const history = useNavigate()
    const dispatch = useDispatch()


    const handleShowProduct = (label) => {

        const action = callProductActions(label);
        dispatch(action);
        history('/danh-muc')
        handleShowList()
    }

    return (
        <div className={cx('products-list')}>
            <div className={cx('item-list')}>
                <p className={cx('title-list')} >Danh mục sản phẩm</p>
                {CategoryHeaderApi.map((item, index) => (
                    <ul className={cx('item')} key={index}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <li className={cx('item-products')}
                            onClick={() => handleShowProduct(item.label)}
                        >
                            {item.title}
                            {item.trend && <span className={cx([item.trend.class])}>{item.trend.content}</span>}
                        </li>
                    </ul>
                ))
                }

            </div >
        </div >
    );
}

export default memo(CategoryHeader);