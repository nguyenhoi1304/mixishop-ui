import React from 'react';
import { useSelector } from 'react-redux';
import Rating from '../../layouts/components/Rating/Rating';

const Productdetails = () => {
    const detailItem = useSelector((state) => state.callDetail.itemDetail);
    const { img, img1, img2, name, describe, price } = detailItem;

    const handleSubmit = () => {
        alert('Bạn đặt mua thành công')
    }

    return (
        <div style={{ margin: '140px 0' }}>
            <div className="container">
                <h1 style={{ color: '#007784' }}>XEM CHI TIẾT SẢN PHẨM</h1>

                <div
                    className="col-sx-12 col-mg-12 col-lg-12"
                    style={{
                        display: 'flex',
                        backgroundColor: '#f0f0f0',
                        justifyContent: 'space-around',
                        padding: '100px 20px',
                    }}
                >
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-ride="carousel"
                        style={{ width: '40%' }}
                    >
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                          
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img style={{width:'500px', height:'500px'}} class="d-block w-100" src={img} alt="none" />
                            </div>
                            <div class="carousel-item">
                                <img style={{width:'500px', height:'500px'}} class="d-block w-100" src={img1} alt="none" />
                            </div>
                            <div class="carousel-item">
                                <img style={{width:'500px', height:'500px'}} class="d-block w-100" src={img2} alt="none" />
                            </div>
                           
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{ backgroundColor: '#4db4db', padding: '12px' }}
                            ></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{ backgroundColor: '#4db4db', padding: '12px' }}
                            ></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <div>
                        <div>
                            <h1 style={{ color: '#007784' }}>{name}</h1>
                            <h1 style={{ color: '#007784' }}>{describe}</h1>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <span style={{ display: 'flex' }}>
                                ĐÁNH GIÁ:{' '}
                                <div style={{ marginLeft: '20px' }}>
                                    <Rating />
                                </div>
                            </span>
                            <h1 style={{ marginTop: '20px' }}>Giá: {price}/VNĐ</h1>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <button onClick={handleSubmit}
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    padding: '10px 8px',
                                    cursor: 'pointer',
                                }}
                            >
                                MUA NGAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
