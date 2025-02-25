import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';
import './index.scss';
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';

function Checkout() {
    const itemState = useSelector((state) => state.cart);
    const [totalMoney, setTotalMoney] = useState(0);
    const ticket = itemState.ticket;
    const count = ticket.length;

    const list_ticket = ticket.filter((value, index, self) => index === self.findIndex((e) => e.Id === value.Id));
    console.log(ticket);

    useEffect(() => {
        const sum = ticket.reduce((a, b) => a + b.Price, 0);
        const sumMoney = sum != 0 ? sum + '.000' : sum;
        setTotalMoney(sumMoney);
    }, [count]);

    const handle_checkout = () => {
        console.log('Checkout Successful');
    };

    return (
        <>
            <Header />
            {count === 0 ? (
                <div className="c-container">
                    <div className="c-header">
                        <h2>GIỎ HÀNG (0 sản phẩm)</h2>
                    </div>
                    <div className="c-body">
                        <div className="c-empty">
                            <div className="c-empty-icon">
                                <img
                                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg"
                                    alt="Empty cart"
                                />
                            </div>
                            <p>Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                            <Link to="/">
                                <button className="buy-now-button">MUA SẮM NGAY</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="cart-container">
                        <div className="cart-wrapper">
                            <div className="cart-header">
                                <h2>GIỎ HÀNG ({count} sản phẩm)</h2>
                                <div className="table-header">
                                    <div className="checkbox">
                                        <input type="checkbox" />
                                        <div className="column_checkbox">Chọn tất cả ({count} sản phẩm)</div>
                                    </div>
                                    <div className="wrap_column_title">
                                        <div className="column-title">Số lượng</div>
                                        <div className="column-title">Thành tiền</div>
                                    </div>
                                </div>
                            </div>
                            {list_ticket.map((tick, index) => (
                                <div className="cart-item-content-box" key={index}>
                                    <div className="cart-item">
                                        <div className="cart-item-checkbox">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="cart-item-image">
                                            <img src={tick.Image} alt="" />
                                        </div>
                                        <div className="cart-item-info">
                                            <span>{tick.Name}</span>
                                            <div className="cart-item-price">
                                                <span className="price_active">
                                                    {tick.Price - tick.Price * 0.1}.000 ₫
                                                </span>
                                                <span className="cart-item-old-price">{tick.Price}.000 ₫</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-count">
                                        <div className="cart-count-quantity">
                                            <span>{count}</span>
                                        </div>
                                        <div className="cart-count-total">
                                            <span>12.500 ₫</span>
                                        </div>
                                        <button className="cart-count-remove">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="wrap_promo">
                            <div className="cart-promo">
                                <h3>KHUYẾN MÃI</h3>
                                <p>MÃ GIẢM 10K - COMBO BỎNG - NƯỚC</p>
                                <p>Khi mua 3 vé - Xem chi tiết để biết thêm về thế lệ chương trình.</p>
                                <Link to="/">
                                    <button className="checkout-button">Mua Thêm</button>
                                </Link>
                            </div>
                            <div className="cart-total">
                                <h4>Tổng cộng: {totalMoney} ₫</h4>
                                <button className="checkout-button" disable onClick={handle_checkout()}>
                                    Thanh Toán
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="form-title">
                            <span className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <span>Đăng ký nhận phim mới</span>
                        </div>
                        <div className="form-input">
                            <input type="email" placeholder="Nhập địa chỉ email của bạn" />
                        </div>
                        <button className="form-button">Đăng ký</button>
                    </div>
                </>
            )}

            <Footer />
        </>
    );
}

export default Checkout;
