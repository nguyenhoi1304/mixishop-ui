import styles from './ProductsPagesItem.module.scss'
import classNames from 'classnames/bind';
import { useLayoutEffect, useState } from 'react';
import Product from './Product';
import HomeProductsPageApi from '~/fakeApi/HomeProductsPageApi'
import { memo } from 'react';
const cx = classNames.bind(styles)

function ProductsPagesItem({ handleClick }) {

    const data = HomeProductsPageApi.products
    const [countPage, setCountPage] = useState(1)
    const totalPages = Math.floor((data.length) / 10)

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

    const handleFilterProducts = () => {
        return data.filter(item => item.pagination._page === countPage)
    }
    return (
        <div>
            <div className={cx('Home-products')}>
                {handleFilterProducts(data).map((item) => (
                    <Product key={item.id} item={item} handleClick={handleClick} />
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

export default memo(ProductsPagesItem)
