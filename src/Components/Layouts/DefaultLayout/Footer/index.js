import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import image from '../../../../assets/img/image.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('footer')}>
                <div className={cx('footer-left')}>
                    <p className={cx('footer-left__item')}>
                        © 2024 <span className={cx('footer-left__text')}>Team Best CV</span>
                    </p>
                    <p className={cx('footer-left__text')}>Trụ sở HN:</p>
                    <p className={cx('footer-left__item')}>
                        Tầng 3, 4 tòa FS - GoldSeason số 47 Nguyễn Tuân, Thanh Xuân Trung, Thanh Xuân, Hà Nội
                    </p>
                    <p className={cx('footer-left__text')}>Chi nhánh TP HCM:</p>
                    <p className={cx('footer-left__item')}>
                        Tầng 12, Tòa nhà Dali, 24C Phan Đăng Lưu, Phường 6, Quận Bình Thạnh, TP Hồ Chí Minh
                    </p>
                </div>
                <div className={cx('footer-right')}>
                    <div className={cx('footer-right__item')}>
                        <img className={cx('footer-right__item-img')} src={image} alt="..."></img>
                    </div>
                    <div className={cx('footer-right__item')}>
                        <img
                            src="https://www.topcv.vn/images/bct.jpg"
                            alt="Dang ky Bo Cong thuong"
                            title="Đăng ký Bộ Công thương"
                            className={cx('footer-right__item-img')}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
