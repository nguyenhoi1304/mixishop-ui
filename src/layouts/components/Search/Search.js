import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { useEffect, useState, useRef, memo } from 'react';
import { useDebounce } from '~/Hooks';
import * as SearchServices from '~/services/SearchService';


const cx = classNames.bind(styles);

function Search() {
    const [searchValue, SetSearchValue] = useState('') // value người dùng nhập
    const [searchResult, setSearchResult] = useState([]);// kq tìm kiếm
    const [showResult, setShowResult] = useState(false) // quyết định ẩn hiện dữ liệu tìm kiếm
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    const debouncedValue = useDebounce(searchValue, 700)

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true)

            const result = await SearchServices.search(debouncedValue);
            setSearchResult(result)

            setLoading(false)
        }
        fetchApi();
    }, [debouncedValue])

    const handleClear = () => {
        SetSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)

    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        // không cho nhập vào bằng dấu cách
        if (!searchValue.startsWith(' ')) {
            SetSearchValue(searchValue)

        }

    }
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.

        <div className={cx('rearch-product')}>
            <HeadlessTippy
                interactive="true"
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>

                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input className={cx('input-search')} placeholder='Tìm kiếm...' spellCheck='false'
                        value={searchValue}
                        ref={inputRef}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}>
                    </input>
                    {!!searchValue && !loading && (
                        <button className={cx('clear')}
                            onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn', 'search-header')} onMouseDown={(e) => (e.preventDefault())}>
                    </button>
                    <FontAwesomeIcon className={cx('search-find')} icon={faMagnifyingGlass} />
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(Search);