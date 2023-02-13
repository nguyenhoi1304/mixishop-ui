import React from 'react';
import { useSelector } from 'react-redux';
import Rating from '../../layouts/components/Rating/Rating';

const Productdetails = () => {
    const detailItem = useSelector((state) => state.callDetail.itemDetail);
    const { imgchange, img, name, describe, price } = detailItem;
    return (
        <div style={{ margin: '140px 0' }}>
            <div className="container">
                <h1 style={{color:'#007784'}}>XEM CHI TIẾT SẢN PHẨM</h1>

                <div style={{display:'flex',justifyContent:'space-between', backgroundColor:'#f0f0f0', padding:'100px 20px'}}>
                  <div >
                    <img style={{marginRight:'20px'}} src={imgchange} alt=''></img>
                    <img src={img} alt=''></img>
                  </div>
  
                  <div>
                    <h1 style={{color:'#007784'}}>{name}</h1>
                    <h1 style={{color:'#007784'}}>{describe}</h1>
                    <p >Đánh giá:<Rating/></p>
                    <h1>Giá: {price}/VNĐ</h1>
                    <button style={{backgroundColor:'red', color:'white',padding:'10px 8px', cursor:'pointer'}}>MUA NGAY</button>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Productdetails;
