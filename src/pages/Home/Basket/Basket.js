import styles from './Basket.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Basket(props) {
    const { cartItems, onAdd, onRemove } = props

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)

    return (
        <div className={cx('basket')}>
            <h2>CART ITEM</h2>
            <div>
                {cartItems.length === 0 &&
                    <div>
                        cartItems is empty
                    </div>}
            </div>

            {
                cartItems.map((item) => (
                    <div key={item.id}>
                        <div > {item.name}</div>
                        <div>
                            <button onClick={() => onAdd(item)} className={cx('add')}> + </button>
                            <button onClick={() => onRemove(item)} className={cx('remove')}> - </button>
                        </div>
                        <div>{item.qty} x ${item.price}</div>

                    </div>

                ))

            }

            {cartItems.length !== 0 && (
                <>
                    <br></br>
                    <div>
                        Total Prices {totalPrice.toLocaleString()} / VNĐ
                    </div>
                </>
            )}

        </div>
    );
}

export default Basket;