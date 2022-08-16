import styles from './ButtonUp.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles)


function ButtonUp() {
    const [BackToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const handlerUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <>
            {BackToTop && (
                <div className={cx('animation')}>
                    <div className={cx('Button-up')} onClick={handlerUp}>
                        <FontAwesomeIcon icon={faAngleUp} />
                    </div>
                </div>
            )}
        </>

    );
}

export default ButtonUp;