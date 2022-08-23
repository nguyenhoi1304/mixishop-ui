import styles from './Notification.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

function Notification() {
    return (
        <div className={cx('page')}>
            <div style={{ margin: '115px 0' }}>
                <p className={cx('page-notification')}>THÔNG BÁO</p>
                <div className={cx('page-text')}>
                    <p>MixiShop xin thông báo hiện Shop KHÔNG có chương trình tri ân khách hàng nào bằng việc tặng nước hoa, quà, hoặc một vài sản phẩm khác như một số bạn đã nhận được thông tin. </p>
                    <br />
                    <p>Các bạn lưu ý tránh để kẻ gian trục lợi làm ảnh hưởng uy tín của Shop nhé ạ.
                        <br />
                        Số điện thoại check đơn của nhân viên MixiShop lần lượt ở dưới đây. Các bạn vui lòng kiểm tra tin nhắn hoặc cuộc gọi check thông tin đơn hàng có khớp với các số này hay không nhé
                        <img class={cx('emoji')} alt="😘" src="https://s.w.org/images/core/emoji/13.1.0/svg/1f618.svg" />
                    </p>
                    <div className={cx('text-hotline')}>
                        <img className={cx('phone-img')} alt='' src="https://s.w.org/images/core/emoji/13.1.0/svg/260e.svg" />
                        <p className={cx('hotline')}>Chi tiết liên hệ Hotline: 08222221992 / 09222222016</p>
                    </div>
                    <p className={cx('text-spacing')}>Bạn nào có tin nhắn hoặc cuộc gọi về việc nhận được quà tặng từ chương trình tri ân khách hàng vui lòng comment vào bài đăng inbox hoặc gọi trực tiếp vào hotline giúp chúng mình.</p>
                    <p className={cx('text-spacing')}>CÓ MỘT YÊU CẦU NHỎ TRONG LẦN NÀY, CÁC BẠN QUAY LẠI VIDEO BÓC KIỆN HÀNG GIÚP SHOP. TRONG TRƯỜNG HỢP ĐỔI TRẢ (ĐỐI VỚI SẢN PHẨM LÀ ÁO, YÊU CẦU PHẢI CÒN NGUYÊN TAG MAC), NHẬN THIẾU HÀNG, CÁC BẠN GỬI LẠI VIDEO ĐÓ VÀ INBOX PAGE MIXISHOP ĐỂ ĐƯỢC HỖ TRỢ NHANH HẾT SỨC CÓ THỂ Ạ.</p>
                    <p className={cx('text-spacing')}>Nếu có bất kì thắc mắc vui lòng inbox fanpage MixiShop để được giải đáp. Xin chân thành cám ơn và yêu thương rất nhiều</p>
                    <p className={cx('text-spacing')}> Hiện tại bên shop CHƯA có bất cứ chương trình tri ân nào. Nếu có ưu đãi cũng sẽ được thông báo công khai trên các kênh CHÍNH THỨC VÀ DUY NHẤT sau đây: </p>
                    <div >
                        <p className={cx('text-spacing')}>Website :
                            <a className={cx('link-hotline')} href="https://shop.mixigaming.com/">https://shop.mixigaming.com/</a>
                        </p>
                        <p className={cx('text-spacing')}>Fanpage :  <a className={cx('link-hotline')} href="https://www.facebook.com/MixiShop-182674912385853/" >https://www.facebook.com/MixiShop-182674912385853/</a> </p>
                        <p className={cx('text-spacing')}>Instagram :  <a className={cx('link-hotline')} href="https://www.instagram.com/mixi.shop/">https://www.instagram.com/mixi.shop/</a> </p>
                        <p className={cx('text-spacing')}>Email : Mixiishop@gmail.com</p>
                        <p className={cx('text-spacing')}>MixiShop xin vui lòng được phục vụ quý khách!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notification;