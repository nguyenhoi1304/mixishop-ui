import styles from './ProductsPagesItem.module.scss'
import classNames from 'classnames/bind';
import Rating from '~/layouts/components/Rating/Rating';
import { memo } from 'react';
import config from '~/config';
import { Link } from 'react-router-dom';
import { callDetailItemActions } from '~/store/actions/callPageAction';
import { useDispatch } from 'react-redux';


const cx = classNames.bind(styles)

function Product({ item, handleClick}) {
    const { imgchange, img, name, describe, price } = item;
    const dispatch = useDispatch()

    const handleDetailItem = (item) => {
        const action = callDetailItemActions(item)
        dispatch(action)
    }
    return (

        <div>
            <div className={cx('List-products')} >
                <div className={cx('products-item')}>
                    <Link to = {config.routes.productdetail} onClick={() => handleDetailItem(item)}>
                        <div className={cx('products-image')}>
                            <div className={cx('box-hover')}>
                                {imgchange && (
                                    <div className={cx('box-item')}>
                                        <div className={cx('box-img')}>
                                            <img className={cx('img-change', 'lego')} src={imgchange} alt='legomixi' />
                                        </div>
                                        <div className={cx('sale')}>Giảm Giá!</div>
                                    </div>
                                )
                                }
                                <img src={img} alt='legomixi' className={cx('lego')} />
                            </div>
                        </div>
                        <div className={cx('products-information')}>
                            <div className={cx('products-name')}>{name}</div>
                            <div className={cx('products-describe')}>{describe}</div>
                            <Rating />
                            <p className={cx('products-price')}>{price.toLocaleString()}</p>
                        </div>
                    </Link>
    
                    <div className={cx('addCart')} onClick={() => handleClick(item)}>Thêm vào giỏ hàng</div>
    
                </div>
            </div>
        </div>
    );
}

export default memo(Product);