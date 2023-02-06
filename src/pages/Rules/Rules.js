import styles from './Rules.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Rules() {
    return (
        <div className={cx('rules')}>

            <p>Chúng tôi thu thập thông tin về bạn trong quá trình thanh toán tại cửa hàng của chúng tôi.</p>

            <h2>Chúng tôi thu thập và lưu trữ điều gì</h2>

            <p>Trong khi bạn vào trang web, chúng tôi sẽ theo dõi:</p>

            <ul><li>Sản phẩm bạn đã xem: chúng tôi sẽ sử dụng cho, ví dụ, hiển thị sản phẩm bạn đã xem gần đây</li><li>Vị trí, địa chỉ IP và loại trình duyệt: chúng tôi sẽ sử dụng cho các mục đích như ước tính thuế và giao hàng</li><li>Địa chỉ giao hàng: Chúng tôi sẽ yêu cầu bạn điền điều này để chúng tôi có thể, ví dụ, ước tính chi phí giao hàng trước khi bạn đặt hàng, và gửi đơn hàng cho bạn!</li></ul>


            <p>Chúng tôi sẽ sử dụng cookies để theo dõi nội dung giỏ hàng trong khi bạn duyệt trang web của chúng tôi</p>

            <p>Chú ý: Bạn có thể muốn biết thêm chi tiết về chính sách cookie, và đường dẫn tới phần đó ở ngay đây.</p>


            <p>Khi bạn mua hàng từ chúng tôi, chúng tôi sẽ yêu cầu bạn cung cấp thông tin bao gồm tên, địa chỉ thanh toán, địa chỉ giao hàng, địa chỉ email, số điện thoại, credit card/thông tin thanh toán và thông tin tài khoản bổ sung như tên tài khoản và mật khẩu. Chúng tôi sử dụng thông tin này cho nhiều mục đích, ví dụ, như:</p>

            <ul><li>Gửi cho bạn thông tin về tài khoản và đơn hàng mà bạn đã đặt</li><li>Trả lời các yêu cầu của bạn, bao gồm cả việc hoàn lại tiền và khiếu nại</li><li>Xử lý thanh toán và ngăn chặn gian lận.</li><li>Thiết lập tài khoản của bạn trên dịch vụ của chúng tôi</li><li>Tuân thủ mọi quy định mà chúng tôi đặt ra, chẳng hạn như là bị tính thuế</li><li>Cải thiện chất lượng dịch vụ bán hàng của cửa hàng chúng tôi</li><li>Gửi cho bạn tin nhắn khuyến mãi, nếu bạn nhận được chúng</li></ul>

            <p>Nếu bạn tạo 1 tài khoản,chúng tôi sẽ lưu lại tên, địa chỉ, email và số điện thoại, để sử dụng cho các lần thanh toán tiếp theo.</p>

            <p>We generally store information about you for as long as we need the information for the purposes for which we collect and use it, and we are not legally required to continue to keep it. For example, we will store order information for XXX years for tax and accounting purposes. This includes your name, email address and billing and shipping addresses.</p>

            <p>Chúng tôi cũng sẽ lưu những nhận xét hoặc đánh giá, nếu bạn chọn hủy chúng.</p>

            <h2>Ai trong nhóm của chúng tôi có quyền truy cập</h2>

            <p>Thành viên trong nhóm chúng tôi có thể truy cập thông tin mà bạn cung cấp. Ví dụ, cả Quản lý và Chủ cửa hàng có thể truy cập:</p>

            <ul><li>Thông tin đơn hàng như mua những gì, mua khi nào và gửi hàng tới đâu, và</li><li>Cung cấp thông tin khách hàng như tên, địa chỉ email,thông tin thanh toán, và địa chỉ giao hàng của bạn.</li></ul>

            <p>Các thành viên ở trong nhóm của chúng tôi có quyền truy cập vào thông tin này để giúp cho bạn thực hiện đơn hàng, xử lý tiền hoàn lại và cũng như hỗ trợ cho bạn.</p>

            <h2>Những gì mà chúng tôi có thể chia sẽ được với bạn</h2>

            <p>In this section you should list who you’re sharing data with, and for what purpose. This could include, but may not be limited to, analytics, marketing, payment gateways, shipping providers, and third party embeds.</p>

            <p>Chúng tôi chia sẻ thông tin với bên thứ ba giúp chúng tôi cung cấp những đơn hàng của chúng tôi và dịch vụ cửa hàng đến bạn; ví dụ —</p>

            <h3>Thanh toán</h3>

            <p>In this subsection you should list which third party payment processors you’re using to take payments on your store since these may handle customer data. We’ve included PayPal as an example, but you should remove this if you’re not using PayPal.</p>

            <p>Chúng tôi chấp thuận thanh toán qua PayPal. Trong quá trình xử lý, một số dữ liệu của quý khách sẽ được chuyển qua PayPal, bao gồm thông tin cần để xử lý hoặc hỗ trợ thanh toán, như tổng giá trị đơn hàng hoặc thông tin hóa đơn.</p>


            <p>Vui lòng xem&nbsp;<a href="https://www.paypal.com/us/webapps/mpp/ua/privacy-full">PayPal Privacy Policy</a>để biết thêm chi tiết.</p>
        </div>
    );
}

export default Rules;