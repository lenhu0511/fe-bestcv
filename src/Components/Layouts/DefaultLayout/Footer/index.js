import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('footer')}>
                <div className={cx('footer-left')}>
                    <p className={cx('footer-left__item')}>
                        © 2024 <span className={cx('footer-left__text')}>Design bởi Team Best CV</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
