class allCarts{
    constructor(){
        this.vendorModel = new VendorModel();
        this.init();
    }

    async init(){
        let carts_fragment=document.createRange().createContextualFragment(allCartsOffcanvas);
        document.body.appendChild(carts_fragment);
        this.all_carts_view=document.querySelector(".offcanvas .all-cart-view");
        await this.vendorModel.loadVendors();
        this.cartItemModel=await new CartItemModel();
        this.listenShow();
        this.handleDelete();
        this.handleCheckout();
    }
    createCartList(){
        this.all_carts_view.innerHTML="";
        this.cartItemModel.cartArr.forEach(
            cart => {
                let carts_fragment=document.createRange().createContextualFragment(cartContainer);
                const vendor=this.vendorModel.getVendorById(cart.vendorId);
                carts_fragment.querySelector(".vendor-cart-container").dataset.vendorId=`${cart.vendorId}`;
                carts_fragment.querySelector(".vendor-cart-container").dataset.cartId=`${cart.cartId}`;
                const links=carts_fragment.querySelectorAll(".vendor-cart-container a");
                const currentFile = window.location.pathname.split("/").pop() || "index.html";
                const path= currentFile=="index.html"?"html/":"";
                links.forEach(link => {
                    link.setAttribute("href",`${path}vendor-detail.html?id=${cart.vendorId}`);
                });

                const imgPath= currentFile=="index.html"?"images/":"../images/";
                carts_fragment.querySelector(".vendor-info-all-carts img").setAttribute("src",`${imgPath}thumbnail/${vendor.picture}`)
                carts_fragment.querySelector(".vendor-name").innerText=vendor.name;
                carts_fragment.querySelector(".delivery-time").children[0].innerText=vendor.minDeliveryTime;
                carts_fragment.querySelector(".delivery-time").children[1].innerText=vendor.maxDeliveryTime;
                carts_fragment.querySelector(".cart-total div.subtotal").children[1].innerText=cart.subTotal;
                carts_fragment.querySelector(".cart-total div.total").children[1].innerText=cart.total;
                const item_images_container=carts_fragment.querySelector(".cart-detail ul");

                const img_quantity=cart.items.length;
                const extra_quantity=img_quantity-4;
                for(let i=0; i<img_quantity; i++){
                    if(i<=3 || i==4 && extra_quantity<=0 ){
                        const img_li=`<li class="position-relative  cart-item"><img src="${imgPath}thumbnail/${cart.items[i].picture}" alt="dish image"></li>`;
                        item_images_container.appendChild(document.createRange().createContextualFragment(img_li));
                    }
                    else if(i>=4 && extra_quantity>0){
                        const img_li=`
                        <li class="position-relative  cart-item">
                            <div class="d-inline-flex extra-image-quantity align-items-center justify-content-center w-100 h-100">
                                <div><span class="fs-4 fw-bold">+${extra_quantity}</span></div>
                            </div>
                            <img src="${imgPath}thumbnail/${cart.items[i].picture}" alt="dish image">
                        </li>	`;
                        item_images_container.appendChild(document.createRange().createContextualFragment(img_li));
                        break;
                    }
                }

                this.all_carts_view.appendChild(carts_fragment);
            }
        );
        
    }

    listenShow(){
        document.getElementById("offcanvasRight").addEventListener(
            "show.bs.offcanvas",
            ()=>{
                this.cartItemModel.loadData();
                this.createCartList();
            }
        );
        document.getElementById("offcanvasRight").addEventListener(
            "hide.bs.offcanvas",
            ()=>{
                if(this.popover)
                    this.popover.hide();
                if(this.timeout)
                    clearTimeout(this.timeout);
            }
        );
    }

    handleDelete(){
        this.all_carts_view.addEventListener(
            "click",
            (event) =>{
                const btn=event.target.closest("button");
                if(btn && btn.classList.contains("remove-item-from-cart")){
                    const cartView=btn.closest(".vendor-cart-container");
                    const cartId=cartView.dataset.cartId;
                    this.cartItemModel.removeCart(cartId);
                    cartView.remove();
                }
            }
        );
    }

    handleCheckout(){
        this.all_carts_view.addEventListener(
            "click",
            (event) =>{
                const btn=event.target;
                if(btn && btn.classList.contains("check-out-cart-btn")){
                    const cartView=btn.closest(".vendor-cart-container");
                    const vendorId=cartView.dataset.vendorId;
                    const cart=this.cartItemModel.getCartByVendorId(vendorId);
                    const vendor=this.vendorModel.getVendorById(vendorId);
                    if(cart.subTotal>=vendor.minDeliveryTotal){
                        const approach=sessionStorage.getItem("delivery-approach");
                        window.location.href = `checkout.html?vendorId=${vendorId}&approach=${approach}`;
                        return;
                    }else{
                        const options={content:"Require subtotal above € " + vendor.minDeliveryTotal,trigger: 'manual'};
                        this.popover = bootstrap.Popover.getOrCreateInstance(btn, options);
                        this.popover.show();
                        this.timeout=setTimeout(
                            () => {
                                this.popover.hide();
                            }, 2000);
                    }
                }
            }
        );
    }

}


let allCartsOffcanvas=`
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
    <div class="offcanvas-header">
        <p class="offcanvas-title fw-semibold fs-5" id="offcanvasRightLabel">All Carts</p>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small">
        <div class="d-flex all-cart-view p-1 d-flex flex-column justify-content-between row-gap-2">
            
        </div>
    </div>
</div>`;

let cartContainer=`
<div class="vendor-cart-container p-2 rounded-3 border-color-light-gray d-flex flex-column row-gap-2" data-vendor-id="0" data-cart-id="0">
    <div class="vendor-info-all-carts d-flex">
        <a href="vendor-detail.html?id=1" class="flex-grow-1 d-flex align-items-center text-decoration-none">
            <img src="../images/thumbnail/chicken-dish-restaurant-table.webp" alt="dish image">
            <div class="d-inline-block mx-2 py-2">
                <div class="vendor-name fw-semibold">Vendor Name</div>
                <div class="delivery-time fw-light d-block">Standard( <span></span> - <span></span>mins )</div>
            </div>
        </a>
        <button class="btn remove-item-from-cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        </button>
    </div>
    <div class="cart-detail">
        <a href="vendor-detail.html?id=1" class="d-flex flex-grow-1 column-gap-2 align-items-center justify-content-start text-decoration-none">
            <ul class="d-flex column-gap-2 mb-0 overflow-hidden">
            </ul>
            <div class="inline rounded-circle  border-color-light-gray mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path>
                </svg>
            </div>
        </a>
    </div>
    <div class="cart-total">
        <a href="vendor-detail.html?id=1" class="flex-grow-1 justify-content-between text-decoration-none d-flex px-1">
            <div class="subtotal d-inline-block px-0 fs-6 fw-semibold"><span>Subtotal </span>&euro; <span>0</span></div>
            <div class="total d-inline-block px-0 fs-6 fw-semibold"><span>Total </span>&euro; <span>0</span></div>
        </a>
    </div>
    <div class="checkout-btn">
        <button class="check-out-cart-btn border-color-light-gray rounded-3 p-2 w-100 main-color-background">
            Check Out
        </button>
    </div>
</div>`;

new allCarts();

