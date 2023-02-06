import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import sliderImg from '~/fakeApi/SliderImg'

import CategoryHeader from '~/layouts/components/Header/Products/CategoryHeader';
// import { Link } from 'react-router-dom';
import styles from './Products.module.scss'

const cx = classNames.bind(styles);

function Products({ hanldeShow }) {

    return (

        <>
            <div className={cx('container')} >
                <div style={{ display: 'flex' }}>
                    <CategoryHeader handleShowList={hanldeShow} />
                    <div style={{ display: 'flex' }}>
                        {sliderImg.map((item, key) => (
                            <div className={cx('products-lego')} key={key}>
                                <div className={cx('item-lego')}>
                                    <img src={item.img} alt="legomixi" className={cx('img-legomixi')}></img>
                                </div>
                                <div className={cx('box-text-seemore')}>

                                    <Link to={config.routes.danhmuc}>
                                        <p className={cx('see-more')}
                                            onClick={hanldeShow}
                                        >
                                            XEM THÊM
                                            <FontAwesomeIcon className={cx('item-right')} icon={faAngleRight} />
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={cx('btn-see-all')}>
                    <Link to={config.routes.danhmuc} className={cx('link-lookall')} onClick={hanldeShow}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '600' }} >Xem tất cả</span>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default memo(Products);