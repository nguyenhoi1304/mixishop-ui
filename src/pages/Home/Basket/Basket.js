import styles from './Basket.module.scss'
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { callTotalPricectActions } from '~/store/actions/callPageAction';


const cx = classNames.bind(styles)

function Basket({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0);

    const dispatch = useDispatch()
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
        const action = callTotalPricectActions(price)
        dispatch(action)
    };
    useEffect(() => {
        handlePrice();

    });


    return (
        <div className={cx('basket')}>
            <div className={cx('basket-left')}>
                <h2 style={{ textAlign: 'center', color: '#007784' }}>SẢN PHẨM ĐANG CHỌN</h2>
                {
                    cart.map((item) => (
                        <div key={item.id} className={cx('basket__item')} >
                            <div className={cx('basket__items')}>
                                <img src={item.img} alt='' className={cx('basket__img')} />
                                <p className={cx('product__information')}>
                                    <div className={cx('basket__name')}> {item.name}</div>
                                    <div className={cx('basket__describe')}>{item.describe}</div>
                                    <div className={cx('themes')}>
                                        <button onClick={() => handleChange(item, 1)} className={cx('btn__amount')}>+</button>
                                        <button>x{item.amount}</button>
                                        <button onClick={() => handleChange(item, -1)} className={cx('btn__amount')}>-</button>
                                    </div>
                                    <div className={cx('basket__amount')}>{item.price.toLocaleString()} / VNĐ</div>
                                    <button className={cx('btn__remove')} onClick={() => handleRemove(item.id)}>XÓA SẢN PHẨM</button>
                                </p>
                            </div>
                        </div>

                    ))

                }
            </div>
            <div className={cx('total-price')}>
                <div className={cx('pay')}>TỔNG SỐ TIỀN CẦN THANH TOÁN:</div>
                <div className={cx('price')}>{price.toLocaleString()} / VNĐ</div>
                <button className={cx('btn-buy')}>Mua Hàng</button>
            </div>
        </div>
    );
}

export default memo(Basket);