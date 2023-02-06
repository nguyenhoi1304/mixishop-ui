import styles from './Privacypolicy.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Privacypolicy() {


    return (
        <div className={cx('privacypolicy')} >
            <h2>Chúng tôi là ai</h2>
            <p>Địa chỉ website là: https://shop.mixigaming.com.</p>
            <h2>Thông tin cá nhân nào bị thu thập và tại sao thu thập</h2>
            <p>Trong phần này, bạn nên lưu ý dữ liệu cá nhân nào bạn thu thập từ người dùng và khách truy cập. Chúng có thể bao gồm dữ liệu cá nhân, như tên, địa chỉ email, tùy chọn tài khoản cá nhân; dữ liệu giao dịch, như thông tin mua hàng; và dữ liệu kỹ thuật, như thông tin về cookie.</p>
            <p>Bạn cũng nên lưu ý các bộ sưu tập và lưu giữ dữ liệu cá nhân nhạy cảm, chẳng hạn như dữ liệu liên quan đến sức khỏe.</p>
            <p>Ngoài việc liệt kê dữ liệu cá nhân nào bạn thu thập, bạn cần lưu ý lý do bạn thu thập dữ liệu đó. Những giải thích này là cơ sở pháp lý cho việc thu thập và lưu giữ dữ liệu của bạn hoặc sự đồng ý hoạt động mà người dùng đã đưa ra.</p>
            <p>Dữ liệu cá nhân không chỉ được tạo bởi tương tác của người dùng với trang web của bạn. Dữ liệu cá nhân cũng được tạo ra từ các quy trình kỹ thuật như biểu mẫu liên hệ, bình luận, cookie, phân tích và nhúng của bên thứ ba.</p>
            <p>Theo mặc định, WordPress không thu thập bất kỳ dữ liệu cá nhân nào về khách truy cập và chỉ thu thập dữ liệu được hiển thị trên màn hình Hồ sơ người dùng từ người dùng đã đăng ký. Tuy nhiên, một số gói mở rộng của bạn có thể thu thập dữ liệu cá nhân. Bạn nên thêm thông tin liên quan bên dưới.</p>
            <h3>Bình luận</h3>
            <p>Trong phần con này bạn nên lưu ý thông tin nào được thu thập qua các bình luận. Chúng tôi đã lưu ý về dữ liệu mà WordPress thu thập theo mặc định.</p>
            <p><strong>Khi khách truy cập để lại bình luận trên trang web, chúng tôi thu thập dữ liệu được hiển thị trong biểu mẫu bình luận và cũng là địa chỉ IP của người truy cập và chuỗi user agent của người dùng trình duyệt để giúp phát hiện spam</strong></p>
            <p>Một chuỗi ẩn danh được tạo từ địa chỉ email của bạn (còn được gọi là hash) có thể được cung cấp cho dịch vụ Gravatar để xem bạn có đang sử dụng nó hay không. Chính sách bảo mật của dịch vụ Gravatar có tại đây: https://automattic.com/privacy/. Sau khi chấp nhận bình luận của bạn, ảnh tiểu sử của bạn được hiển thị công khai trong ngữ cảnh bình luận của bạn.</p>
            <h3>Thư viện</h3>
            <p>Trong phần con này bạn nên lưu ý thông tin nào có thể được tiết lộ bởi người dùng có thể tải lên các tập tin đa phương tiện. Tất cả các tập tin được tải lên thường có thể được truy cập rộng rãi.</p>
            <p><strong>Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên hình ảnh có dữ liệu vị trí được nhúng (EXIF GPS) đi kèm. Khách truy cập vào trang web có thể tải xuống và giải nén bất kỳ dữ liệu vị trí nào từ hình ảnh trên trang web.</strong></p>
            <h3>Thông tin liên hệ</h3>
            <p>Mặc định, WordPress không bao gồm biểu mẫu liên hệ. Nếu bạn sử dụng gói mở rộng biểu mẫu liên hệ, hãy sử dụng phần phụ này để lưu ý dữ liệu cá nhân nào được ghi lại khi ai đó gửi biểu mẫu liên hệ và bạn giữ nó trong bao lâu. Ví dụ: bạn có thể lưu ý rằng bạn giữ các bản gửi biểu mẫu liên hệ trong một khoảng thời gian nhất định cho mục đích chăm sóc khách hàng, nhưng bạn không sử dụng thông tin được gửi qua chúng cho mục đích marketing.</p>
            <h3>Cookies</h3>
            <p>Trong mục này bạn nên liệt kê các cookie website bạn sử dụng, bao gồm các cookie của plugin, mạng xã hội và các công cụ thống kê. Chúng tôi đã cung cấp sẵn các cookie mà WordPress mặc định có.</p>
            <p><strong>Nếu bạn viết bình luận trong website, bạn có thể cung cấp cần nhập tên, email địa chỉ website trong cookie. Các thông tin này nhằm giúp bạn không cần nhập thông tin nhiều lần khi viết bình luận khác. Cookie này sẽ được lưu giữ trong một năm.</strong></p>
            <p>Nếu bạn vào trang đăng nhập, chúng tôi sẽ thiết lập một cookie tạm thời để xác định nếu trình duyệt cho phép sử dụng cookie. Cookie này không bao gồm thông tin cá nhân và sẽ được gỡ bỏ khi bạn đóng trình duyệt.</p>
            <p>Khi bạn đăng nhập, chúng tôi sẽ thiết lập một vài cookie để lưu thông tin đăng nhập và lựa chọn hiển thị. Thông tin đăng nhập gần nhất lưu trong hai ngày, và lựa chọn hiển thị gần nhất lưu trong một năm. Nếu bạn chọn “Nhớ tôi”, thông tin đăng nhập sẽ được lưu trong hai tuần. Nếu bạn thoát tài khoản, thông tin cookie đăng nhập sẽ bị xoá.</p>
            <p>Nếu bạn sửa hoặc công bố bài viết, một bản cookie bổ sung sẽ được lưu trong trình duyệt. Cookie này không chứa thông tin cá nhân và chỉ đơn giản bao gồm ID của bài viết bạn đã sửa. Nó tự động hết hạn sau 1 ngày.</p>
            <h3>Nội dung nhúng từ website khác</h3>
            <p><strong>Các bài viết trên trang web này có thể bao gồm nội dung được nhúng (ví dụ: video, hình ảnh, bài viết, v.v.). Nội dung được nhúng từ các trang web khác hoạt động theo cùng một cách chính xác như khi khách truy cập đã truy cập trang web khác.</strong></p>
            <p>Những website này có thể thu thập dữ liệu về bạn, sử dụng cookie, nhúng các trình theo dõi của bên thứ ba và giám sát tương tác của bạn với nội dung được nhúng đó, bao gồm theo dõi tương tác của bạn với nội dung được nhúng nếu bạn có tài khoản và đã đăng nhập vào trang web đó.</p>
            <h3>Phân tích</h3>
            <p>Trong tiểu mục này, bạn nên lưu ý gói phân tích mà bạn sử dụng, lưu ý cách thức mà người dùng có thể lựa chọn không theo dõi phân tích và lưu ý đến một liên kết về chính sách bảo mật của nhà cung cấp phân tích (nếu có).</p>
            <p>Mặc định WordPress không thu thập bất kì thông tin dữ liệu này. Tuy nhiên, nhiều tài khoản hosting thu thập các thông tin dữ liệu ẩn danh. Bạn có thể cài đặt các plugin WordPress có chức năng thu thập dữ liệu. Trong tình huống đó, nhập thông tin về plugin đó ở đây.</p>
            <h2>Chúng tôi chia sẻ dữ liệu của bạn với ai</h2>
            <p>Trong phần này, bạn nên viết tên và liệt kê tất cả các nhà cung cấp thứ ba mà bạn chia sẻ dữ liệu trang web, bao gồm đối tác, dịch vụ dựa trên đám mây, xử lý thanh toán, nhà cung cấp dịch vụ bên thứ ba và lưu ý những dữ liệu bạn chia sẻ với họ và tại sao. Liên kết tới chính sách bảo mật của riêng họ nếu có thể.</p>
            <p>WordPress mặc định không chia sẻ thông tin cá nhân với bất kì ai.</p>
            <h2>Dữ liệu của bạn tồn tại bao lâu</h2>
            <p>Trong phần này, bạn nên giải thích thời gian bạn giữ lại dữ liệu cá nhân được thu thập hoặc xử lý bởi trang web. Mặc dù bạn có trách nhiệm đưa ra thời gian về việc bạn lưu giữ mỗi tập dữ liệu trong bao lâu và tại sao bạn giữ nó, thông tin đó cần phải được liệt kê ở đây. Ví dụ: bạn có thể nói rằng bạn giữ các mẫu liên hệ trong sáu tháng, các bản ghi phân tích trong một năm và các bản ghi mua hàng của khách hàng trong mười năm.</p>
            <p><strong>Văn bản được đề xuất:</strong>Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô thời hạn. Điều này là để chúng tôi có thể tự động nhận ra và chấp nhận bất kỳ bình luận nào thay vì giữ chúng trong khu vực đợi kiểm duyệt.</p>
            <p>Đối với người dùng đăng ký trên trang web của chúng tôi (nếu có), chúng tôi cũng lưu trữ thông tin cá nhân mà họ cung cấp trong hồ sơ người dùng của họ. Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa thông tin cá nhân của họ bất kỳ lúc nào (ngoại trừ họ không thể thay đổi tên người dùng của họ). Quản trị viên trang web cũng có thể xem và chỉnh sửa thông tin đó.</p>
            <h2>Các quyền nào của bạn với dữ liệu của mình</h2>
            <p>Trong phần này, bạn nên giải thích những quyền người dùng của bạn có trên dữ liệu của họ và cách họ có thể gọi những quyền đó.</p>
            <p> <strong> Văn bản được đề xuất: </strong>Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận xét, bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về bạn, bao gồm mọi dữ liệu bạn đã cung cấp cho chúng tôi. Bạn cũng có thể yêu cầu chúng tôi xóa mọi dữ liệu cá nhân mà chúng tôi lưu giữ về bạn. Điều này không bao gồm bất kỳ dữ liệu nào chúng tôi có nghĩa vụ giữ cho các mục đích hành chính, pháp lý hoặc bảo mật.</p>
            <h2>Các dữ liệu của bạn được gửi tới đâu</h2>
            <p>Trong phần này, bạn nên liệt kê tất cả các chuyển dữ liệu trang web của bạn bên ngoài Liên minh châu Âu và mô tả các phương tiện mà dữ liệu đó được bảo vệ theo các tiêu chuẩn bảo vệ dữ liệu của Châu Âu. Điều này có thể bao gồm lưu trữ web, lưu trữ đám mây hoặc các dịch vụ của bên thứ ba khác.</p>
            <p>Luật bảo vệ dữ liệu của châu Âu yêu cầu dữ liệu về các cư dân châu Âu được chuyển ra ngoài Liên minh châu Âu để được bảo vệ theo các tiêu chuẩn giống như dữ liệu ở châu Âu. Vì vậy, ngoài việc liệt kê dữ liệu, bạn nên mô tả cách bạn đảm bảo rằng các tiêu chuẩn này được bạn hoặc nhà cung cấp bên thứ ba đáp ứng, cho dù đó là thông qua thỏa thuận như Privacy Shield, điều khoản mẫu trong hợp đồng của bạn hoặc quy tắc.</p>
            <p> <strong>Văn bản được đề xuất: </strong>Các bình luận của khách (không phải là thành viên) có thể được kiểm tra thông qua dịch vụ tự động phát hiện spam.</p>
            <h2>Thông tin liên hệ của bạn</h2>
            <p>Trong phần này, bạn nên cung cấp một phương thức liên hệ cho các mối quan tâm riêng tư. Nếu bạn được yêu cầu có Cán bộ bảo vệ dữ liệu, hãy liệt kê tên của họ và chi tiết liên hệ đầy đủ tại đây.</p>
            <h2>Thông tin bổ sung</h2>
            <p>Nếu bạn sử dụng trang web của mình cho mục đích thương mại và bạn tham gia vào việc thu thập hoặc xử lý dữ liệu cá nhân phức tạp hơn, bạn nên lưu ý các thông tin sau đây trong chính sách bảo mật của bạn ngoài thông tin chúng ta đã trao đổi.</p>
            <h3>Cách chúng tôi bảo vệ dữ liệu của bạn</h3>
            <p>Trong phần này, bạn nên giải thích các biện pháp bạn đã thực hiện để bảo vệ dữ liệu của người dùng. Điều này có thể bao gồm các biện pháp kỹ thuật như mã hóa; các biện pháp bảo mật như xác thực hai lớp; và các biện pháp như đào tạo nhân viên về bảo vệ dữ liệu. Nếu bạn đã thực hiện Đánh giá tác động bảo mật, bạn cũng có thể đề cập đến nó ở đây.</p>
            <h3>Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện</h3>
            <p>Trong phần này bạn nên giải thích quá trình bạn xử lý với các tiết lộ dữ liệu, dù có tiềm ẩn hay thực sự, ví dụ các hệ thống báo cáo nội bộ, các cơ chế liên hệ, hoặc các chương trình tìm kiếm lỗi.</p>
            <h3>Những bên thứ ba chúng tôi nhận dữ liệu từ đó</h3>
            <p>Nếu website của bạn nhận dữ liệu về người dùng từ các bên thứ ba, bao gồm những nhà quảng cáo, thông tin này phải được bao gồm trong phần thỏa thuận chính sách riêng tư với dữ liệu của bên thứ ba.</p>
            <h3>Việc quyết định và/hoặc thu thập thông tin tự động mà chúng tôi áp dụng với dữ liệu người dùng</h3>
            <p>Nếu trang web của bạn cung cấp dịch vụ bao gồm đưa ra quyết định tự động – ví dụ, cho phép khách hàng sử dụng thẻ tín dụng hoặc tổng hợp dữ liệu của họ vào hồ sơ quảng cáo – bạn phải lưu ý rằng điều này đang diễn ra và bao gồm thông tin về cách sử dụng thông tin đó , quyết định nào được thực hiện với dữ liệu tổng hợp đó và quyền của người dùng đối với các quyết định được đưa ra mà không có sự can thiệp của con người.</p>
            <h3>Các yêu cầu công bố thông tin được quản lý</h3>
            <p>Nếu bạn là thành viên của một lĩnh vực được quản lý, hoặc bạn phải tuân thủ các quy định về bảo mật, bạn có thể phải cung cấp các thông tin này ở đây.</p>
        </div>
    );
}

export default Privacypolicy;