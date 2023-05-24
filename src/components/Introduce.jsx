import React from 'react';
import '../Style/Introduce.scss';
import { Button } from 'react-bootstrap';
import Brand from '../assets/img/brand.png';
import BannerAds from '../assets/img/bannerAds.png';

export const Introduce = () => {
    return (
        <div className='contentIntr'>
            <div className='content1'>
                <div className="present1">
                    <span className='text1'> Landing Page Platform</span>
                    <span className='text2'>#1 Nền tảng landing page chuyển đổi cao</span>
                    <span className='text3'> cho các hoạt động quảng cáo</span>
                    <span className='text4'> Hiện thực hóa các mục tiêu bán hàng và tối đa hóa các hoạt động quảng cáo</span>
                    <span className='text5'> Không cần lập trình - Miễn phí hostin - Bảo mật dữ liệu</span>
                    <div className='preBtn'>
                        <Button className='Btn1'>
                            Nhận tư vấn qua Live chat
                        </Button>
                        <Button className='Btn2'>Sử dụng miễn phí ngay</Button>

                    </div>
                </div>
                <div className='brand'>
                    <p>Tin dùng bởi <b> 525.988+</b> khách hàng,<b> 5.777.709+</b> Landing Page được khởi tạo</p>
                    <img src={Brand} alt="" />
                </div>
                <div className='description'>
                    <h1>Linh hoạt tùy biến theo mục tiêu marketing của bạn</h1>
                    <p>Tích hợp 100+ ứng dụng cao cấp giúp tối ưu chỉ số hiệu quả của landing page. Giờ đây, các hoạt động marketing của doanh nghiệp sẽ được triển khai nhanh chóng và hiệu quả hơn bao giờ hết</p>
                    <div className='group'>
                        <div className='group--content highLight'>Phát triển kinh doanh</div>
                        <div className='group--content'>Thu data tiềm năng</div>
                        <div className='group--content'>Ra mắt bộ sưu tập</div>
                        <div className='group--content'>Xây dựng thương hiệu</div>
                        <div className='group--content'>Bùng nổ siêu sale</div>
                        <div className='group--content'>Mục tiêu khác</div>
                        <div className='group--content'>truyền thông sự kiện</div>
                    </div>
                </div>




            </div>


            <div className='bannerAds'>
                <img src={BannerAds} alt="" />
                <div className='bannerAds__right'>
                    <div className='bannerAds__right-title'>
                        Tăng trưởng doanh số đa kênh
                    </div>
                    <div className='bannerAds__right--desc'>
                        Sử dụng sales page để thuyết phục khách hàng ra quyết định đặt mua nhanh chóng, tối đa hóa tỉ lệ chuyển đổi từ quảng cáo và gia tăng doanh số đa kênh.
                    </div>
                </div>

            </div>

            <div className='adsTool'></div>
        </div>
    )
}
