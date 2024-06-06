import './Slider.scss';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './_bootrap.scss';
import resume from '../../assets/img/resume.png';
import shareResume from '../../assets/img/shareResume.png';
import job from '../../assets/img/joboffers.png';

function Slider() {
    return (
        <Carousel variant="dark" slide fade>
            <Carousel.Item interval={5000}>
                <h4 className="slider-title">Nền tảng kết nối Nhà tuyển dụng và Ứng viên</h4>
                <p className="slider-caption">Nhà tuyển dụng chủ động tìm kiếm và liên hệ với bạn</p>
                <img className="d-block w-100 slider-img" src={resume} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h4 className="slider-title">Xây dựng CV ấn tượng</h4>
                <p className="slider-caption">Tạo ra nhiều cơ hội việc làm với profile cực khủng</p>
                <img className="d-block w-100 slider-img" src={shareResume} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <h4 className="slider-title">Hỗ trợ tìm việc làm Miễn phí</h4>
                <p className="slider-caption">Bạn có thể chủ động bật / tắt trạng thái tìm việc</p>
                <img className="d-block w-100 slider-img" src={job} alt="Third slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
