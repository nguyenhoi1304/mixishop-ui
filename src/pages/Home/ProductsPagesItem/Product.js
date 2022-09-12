import styles from './ProductsPagesItem.module.scss'
import classNames from 'classnames/bind';
import Rating from '~/layouts/components/Rating/Rating';

const cx = classNames.bind(styles)

function Product(props) {
    const { onAdd, product } = props
    return (

        <div className={cx('List-products')} >
            <div className={cx('products-item')}>
                <div className={cx('products-image')}>
                    <div className={cx('box-hover')}>
                        {product.imgchange && (
                            <div className={cx('box-item')}>
                                <div className={cx('box-img')}>
                                    <img className={cx('img-change', 'lego')} src={product.imgchange} alt='legomixi' />
                                </div>
                                <div className={cx('sale')}>Giảm Giá!</div>
                            </div>
                        )
                        }
                        <img src={product.img} alt='legomixi' className={cx('lego')} />
                    </div>
                </div>
                <div className={cx('products-information')}>
                    <div className={cx('products-name')}>{product.name}</div>
                    <div className={cx('products-describe')}>{product.describe}</div>
                    <Rating />
                    <p className={cx('products-price')}>{product.price}</p>
                </div>
                <div onClick={() => onAdd(product)}> Add to cart</div>
            </div>
        </div>
    );
}

export default Product;