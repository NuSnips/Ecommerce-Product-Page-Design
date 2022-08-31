import "./alpine.min.js";
import "./jquery.min.js"
import "./product-slider.js";
import "./lightbox.js";

const $cart = new Map();


function isCartEmpty() {
    return $cart.size === 0;
}

function changeCartStatus() {
    if (isCartEmpty()) {
        $('.product-cart__content-checkout').hide();
        $('#cart-content span').show();
    } else {
        $('.product-cart__content-checkout').show();
        $('#cart-content span').hide();
    }
}
function updateCart(){
    $('.product-cart__content-list').html("");
    $cart.forEach((item, index)=>{
        let discounted = item.price*item.discount;
        let str = ` <li>
                   <div class="product-cart__content-img"><img src="images/image-product-1-thumbnail.jpg" alt="product-1"></div>
                   <div class="product-cart__content-desc">
                   <div class="product-cart__content-desc-title">${item.title}</div>
                    <div class="product-cart__content-desc-price">$ ${(discounted).toFixed(2)} x ${item.qty} <b>${(discounted*item.qty).toFixed(2)}</b>
                    </div>
                   </div>
                   <a href="#" class="product-cart__content-delete" data-index="${index}">
                   <svg id="cart-delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="#C3CAD9" fill-rule="nonzero"/></svg>
                   </a>
                    </li>`;
        $('.product-cart__content-list').append(str);
    });

    changeCartStatus()
}

changeCartStatus();
$('.product-content__cart-add-to-cart').on("click", function (e) {
    e.preventDefault();
    $cart.set(1,{
        'id': 1,
        'title': 'Fall Limited Edition Sneakers',
        'price': 250,
        'discount':0.5,
        'qty': $('input[name=product_qty]').val()
    });
    updateCart();
});

$(document).on("click", '.product-cart__content-delete', function (e){
    e.preventDefault();
    $cart.delete($(this).data('index'))
updateCart();
});






