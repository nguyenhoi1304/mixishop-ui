import styles from './ProductsPages.module.scss'
import classNames from 'classnames/bind';
import Rating from '~/layouts/components/Rating/Rating';
import HomeProductsPageData from '~/fakeApi/HomeProductsPage'
import { useLayoutEffect, useState } from 'react';

const cx = classNames.bind(styles)

function ProductsPagesItem() {

    const [countPage, setCountPage] = useState(1)

    const totalPages = Math.floor((HomeProductsPageData.length) / 10)



    function ChangeCountPrevPage() {
        setCountPage(prevCount => prevCount - 1)
    }

    function ChangeCountNextPage() {
        setCountPage(prevCount => prevCount + 1)
    }

    useLayoutEffect(() => {
        const ScrollPage = () => {
            if (countPage === 1) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            } else
                window.scrollTo({
                    top: 800,
                    behavior: 'smooth'
                })
        }
        ScrollPage()

    }, [countPage])

    const handleFilterProducts = (dataList) => {
        return dataList.filter(item => item.pagination._page === countPage)
    }
    return (
        <div>
            <div className={cx('Home-products')}>
                {handleFilterProducts(HomeProductsPageData).map((item, index) => (
                    <div className={cx('List-products')} key={index}>
                        <div className={cx('products-item')}>
                            <div className={cx('products-image')}>
                                <div className={cx('box-hover')}>
                                    {item.imgchange && (
                                        <div className={cx('box-item')}>
                                            <div className={cx('box-img')}>
                                                <img className={cx('img-change', 'lego')} src={item.imgchange} alt='legomixi' />
                                            </div>
                                            <div className={cx('sale')}>Giảm Giá!</div>
                                        </div>
                                    )
                                    }
                                    <div className={cx('products-notification')}>
                                        <span > Hết Hàng</span>
                                    </div>
                                    <img src={item.img} alt='legomixi' className={cx('lego')} />
                                </div>
                            </div>
                            <div className={cx('products-information')}>
                                <div className={cx('products-name')}>{item.name}</div>
                                <div className={cx('products-describe')}>{item.describe}</div>
                                <Rating />
                                <p className={cx('products-price')}>{item.price}</p>
                            </div>
                        </div>
                    </div>

                ))

                }
            </div>
            {/* pagination */}


            <div className={cx('pagination')}>
                <button
                    disabled={countPage <= 1}
                    className={cx('btn__page')}
                    onClick={() => {
                        ChangeCountPrevPage()
                    }}>...Prev
                </button>

                <p>{countPage}/{totalPages}</p>

                <button
                    disabled={countPage >= totalPages}
                    className={cx('btn__page')}
                    onClick={() => {
                        ChangeCountNextPage()
                    }}>...Next
                </button>

            </div>
        </div>

    )
}

export default ProductsPagesItem
