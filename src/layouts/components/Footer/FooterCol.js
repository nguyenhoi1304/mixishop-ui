import { Grid } from "@mui/material";
import classNames from "classnames/bind";
import styles from './Footer.module.scss'


const cx = classNames.bind(styles)
function FooterCol({ title, children }) {


    return (
        <div className={cx('FooterCol')}>
            <Grid>
                <div className={cx('footer-item')}>
                    <p className={cx('title')}>{title}</p>
                    <div className={cx('list-item')}> {children}</div>
                </div>
            </Grid>
        </div>
    );
}

export default FooterCol;