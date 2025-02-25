import React from "react";
import './main.css';

function ProductItem({ product_code, product_name, price, filename}) {
    let loading = false;
    const url = `http://localhost/static/images/${filename}`;
    if (loading) {
        return (
            <div>loading</div>
        )
    } else {
        let img = '';
        if (filename !== '-') {
            img = `<img src=${url} width='100px' height='100px' /><br/>`;
        } else {
            img = '[상품 이미지 미등록]<br/>'
        }
        return (
            <div style={{margin: '5px'}}>
                <span dangerouslySetInnerHTML={{__html: img}}></span>
                상품명 : {product_code}<br/>
                가격 : {price}원
                <br/><br/>
            </div>
        )
    }
}

export default ProductItem;