import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useState, useRef, memo, useEffect } from 'react';
import MenuItem from './MenuItem';
import data from '~/fakeApi/HomeProductsPageApi'


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('') // value người dùng nhập
    const [searchResult, setSearchResult] = useState([]);// kq tìm kiếm
    const [showResult, setShowResult] = useState(true) // quyết định ẩn hiện dữ liệu tìm kiếm
    // const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    useEffect (() => {
        setTimeout(() => {
            setSearchResult([1,2])
        },0)
    },[])
    
    const handleHideResult  = () => {
            setShowResult(false)
    }

    const dataSearch = data.products
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.

        <div className={cx('rearch-product')}>
            <HeadlessTippy
                interactive='true'
                placement='bottom' // điều hướng 
                appendTo={() => document.body}
                visible= {showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} style={{color:'white',fontSize:'2rem'}}>
                        <MenuItem dataSearch = {dataSearch}/>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input className={cx('input-search')} placeholder='Tìm kiếm...' spellCheck='false'
                    value={searchValue}
                    onChange={(e) => SetSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    ref= {inputRef}
                    > 
                    </input>
                    
                  {!!searchValue &&  <button className={cx('clear')} 
                  onClick={() => {
                        SetSearchValue('')
                        setSearchResult('')
                        inputRef.current.focus()
                  }}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>}
                      
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <button className={cx('search-btn', 'search-header')}>
                    </button>
                    <FontAwesomeIcon className={cx('search-find')} icon={faMagnifyingGlass} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(Search);