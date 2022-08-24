import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss"
import classNames from 'classnames/bind';
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import ButtonUp from "../components/ButtonUp";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {



    return (
        <div className={cx('wrapper')}>
            <ButtonUp />
            <Header />

            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;