import styles from './List.module.scss'
import classNames from 'classnames/bind';
import { memo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import HomeProductsPageApi from '~/fakeApi/HomeProductsPageApi'
import Rating from '~/layouts/components/Rating/Rating';
import { callDetailItemActions } from '~/store/actions/callPageAction';
import { Link } from 'react-router-dom';
import config from '~/config';
const cx = classNames.bind(styles)

function List() {
    const data = HomeProductsPageApi.products
    const dispatch = useDispatch()

    const result = useSelector(state => state.callPageProducts.label)
    const handleFilterProduct = (productList) => {
        if (result === 'all') {
            return productList
        }
        return productList.filter(item => item.label === result)
    }

    const handleDetailItem = (item) => {
        const action = callDetailItemActions(item)
        dispatch(action)
    }


    return (

          
                <div className={cx('Home-products')} >
                    {handleFilterProduct(data).map((item, index) => (
                        <div className={cx('List-products col-xs-6 col-sm-4 col-md-3')} key={index}>
                            <Link to = {config.routes.productdetail} className={cx('products-item')} onClick={handleDetailItem(item)}>
                                <div className={cx('products-image')}>
                                    <div className={cx('box-hover')}>
                                        {item.imgchange && (
                                            <div className={cx('box-item')}>
                                                <div className={cx('box-img')}>
                                                    <img className={cx('img-change', 'lego')} src={item.imgchange} alt='legomixi' />
                                                </div>
                                                <div className={cx('sale')}>{item.sale}</div>
                                            </div>
                                        )
                                        }
                                        <div className={cx('products-notification')}>
                                            <span >Hết Hàng</span>
                                        </div>
                                        <img src={item.img} alt='legomixi' className={cx('lego')} />
                                    </div>
                                </div>
                                <div className={cx('products-information')}>
                                    <div className={cx('products-name')}>{item.name}</div>
                                    <div className={cx('products-describe')}>{item.describe}</div>
                                    <ul>
                                        <Rating />
                                    </ul>
                                    <p className={cx('products-price')}>
                                        {item.price.toLocaleString()}
                                    </p>
                                </div>
                            </Link>
        
                        </div>
                    ))
                    }
        
                </div>
 



    );
}

export default memo(List);