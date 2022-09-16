import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import config from '~/config';
import 'rc-slider/assets/index.css';
import styles from './ListProducts.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Sidebar from '~/pages/ListProducts/components/Sidebar';
import List from '~/pages/ListProducts/components/List';

const useStyles = makeStyles({
    root: {
        width: 300,
        marginLeft: '40px',
    },
    filter: {
        height: '6px',
    },
});

function valuetext(value) {
    return `${value}°C`;
}



const cx = classNames.bind(styles);

const filterResults = [
    {
        id: 1,
        title: 'Thứ tự theo mức độ phổ biến'
    }, {
        id: 2,
        title: 'Thứ tự theo điểm đánh giá'
    }, {
        id: 3,
        title: 'Mới nhất'
    }, {
        id: 4,
        title: 'Thứ tự theo giá: Thấp đến cao'
    }, {
        id: 5,
        title: 'Thứ tự theo giá: Cao xuống thấp'
    },

]


function ListProducts() {
    const classes = useStyles();
    const [value, setValue] = useState([170000, 1499000]);
    const [label, setLabel] = useState('all');




    // show sản phẩm với danh sách
    const [showitem, setShowItem] = useState('false');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const onHandleChange = (value) => {
        setLabel(value)
    }



    return (
        <div className={cx('listProducts')}  >
            <div className={cx('pageList')}>
                <div>
                    <p style={{ fontWeight: '700', fontSize: '2.4rem', color: '#000' }}>ĐỒ LƯU NIỆM MIXI</p>
                    <div className={cx('title')}>
                        <a className={cx('link-home')} href={config.routes.home}>TRANG CHỦ / </a>
                        <p style={{ fontWeight: '600', color: '#000', marginLeft: '4px' }}>
                            {label}</p>

                    </div>
                </div>
                <div className={cx('showsResult')} >
                    <p style={{ paddingTop: '8px', fontSize: '1.6rem' }} >Hiển thị tất cả {'8'} kết quả</p>
                    <div className={cx('filter')} onClick={() => setShowItem(!showitem)}>
                        <div className={cx('selects')} >
                            <span style={{ fontSize: '1.7rem', opacity: '0.8' }}>Mới nhất</span>
                            <span><FontAwesomeIcon icon={faAngleDown} /></span>
                        </div>
                        {!showitem && (<div className={cx('list-filter')}>
                            {filterResults.map((item, id) => (
                                <ul key={id} >
                                    <li className={cx('item-filter')}>{item.title}</li>
                                </ul>
                            ))}
                        </div>)}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div className={classes.root}>
                    <div style={{ paddingBottom: '15px' }}>
                        <p id='range-slider' className={cx('title-filter')} >
                            LỌC THEO GIÁ
                        </p>
                        <Slider
                            className={classes.filter}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                            min={17000}
                            max={1499000}
                        />
                        <div className={cx('filter-name')}>

                            <div className={cx('price')}>
                                <span>giá</span>
                                <div className={cx('price-show')}>
                                    {`${value[0].toLocaleString()}₫ - ${value[1].toLocaleString()}₫`}
                                </div>
                            </div>
                            <button className={cx('filter-btn')} >Lọc</button>
                        </div>
                    </div>
                    <Sidebar onHandleChange={value => onHandleChange(value)}
                    />
                </div>
                <List
                    label={label}

                />
            </div>
        </div>
    );
}

export default ListProducts;