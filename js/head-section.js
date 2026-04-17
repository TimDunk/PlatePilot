// Author： Xuquan Deng
const currentFile = window.location.pathname.split("/").pop() || "index.html";
if(currentFile=="index.html"){
    var home_page="index.html";
    var delivery_page="html/delivery.html";
    var order_page="html/order.html";
    var about_page="html/about.html";
    var favorite_page="html/delivery.html?favorite";
 }
 else{
    var home_page="../index.html";
    var delivery_page="delivery.html";
    var order_page="order.html";
    var about_page="about.html";
    var favorite_page="delivery.html?favorite";
 }

let head_section=`
<div class="container-fluid sticky-top bg-body head mb-4 top-wrapper overflow-hidden">
		<div class="row profile setting text-center pt-2 align-items-center gx-3">
			<div class="col-4 col-sm-4 col-md-3 col-xl-2 text-start logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" width="240" height="60">
					<text x="0" y="42" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-weight="800" font-size="32" letter-spacing="-1" fill="#d63384">
						PlatePil<tspan fill="#d63384">o</tspan>t
					</text>	
					<path d="M148 34 L196 24 L204 34 L196 31 Z" fill="#FF5252" />
					<rect x="82" y="48" width="85" height="2" rx="1.5" fill="#FF5252" />
				</svg>
			</div>
			<div class="col address">
				<p class="d-none d-sm-none d-md-block">
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
					<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
					<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
					</svg>
				</span>
				Mayor Street Lower, International Financial Services Centre, Dublin 1
				</p>
			</div>
			<div class="col-1 col-sm-1  py-2 favourite">
				<a href="${favorite_page}">
					<svg aria-hidden="true" focusable="false" class="fl-interaction-primary" width="24" height="24" viewBox="0 0 16 16" data-testid="favorite-entry-not-active">
						<path xmlns="http://www.w3.org/2000/svg" d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
					</svg>
				</a>
			</div>
			<div class="col-2 col-sm-1  cart">
				<button type="button" class="btn py-2" aria-label="all carts" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
					<path d="M8 1 a2.5 2.5 0 0 1 2.5 2.5 V4 h-5 v-.5 A2.5 2.5 0 0 1 8 1 m3.5 3 v-.5 a3.5 3.5 0 1 0-7 0 V4 H1 v10 a2 2 0 0 0 2 2 h10 a2 2 0 0 0 2-2 V4 z M2 5 h12 v9 a1 1 0 0 1-1 1 H3 a1 1 0 0 1-1-1 z"/>
					</svg>
				</button>
			</div>
		</div>
		<div class="row address d-block d-sm-block d-md-none">
			<p>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
					<path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
					<path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
					</svg>
				</span>
				Mayor Street Lower, International Financial Services Centre, Dublin 1
			</p>
		</div>
		<div class="row menu">
			<nav class="navbar navbar-expand-sm" data-bs-theme="light">
				<div class="container-fluid text-primary justify-content-center align-items-top">
																		
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse flex-wrap" id="navbarSupportedContent">
						<ul class="navbar-nav me-auto column-gap-3">
							<li class="nav-item">
								<a class="nav-link" aria-current="page" href="${home_page}">Home</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="${delivery_page}">Delivery & Pick Up</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="${order_page}">Order</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="${about_page}">About</a>
							</li>
						</ul>
						<form class="d-flex search d-none" role="search">
							<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
							<button class="btn" type="submit" aria-label="Search">
								<svg aria-hidden="true" focusable="false" class="fl-none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C15.1944 2 19 5.80558 19 10.5C19 12.4076 18.3716 14.1684 17.3106 15.5867C17.2902 15.614 17.2661 15.6455 17.2383 15.6811C17.1139 15.8403 17.1279 16.0674 17.2708 16.2102L20.8386 19.7747C21.1316 20.0675 21.1318 20.5424 20.839 20.8354C20.5728 21.1018 20.1562 21.1261 19.8625 20.9084L19.7783 20.8358L16.2103 17.2705C16.0675 17.1279 15.8408 17.114 15.6817 17.2381C15.655 17.2588 15.6311 17.2772 15.6099 17.2932C14.1876 18.3648 12.418 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z">
									</path>
								</svg>
							</button>
						</form>
					</div>		
				</div>
			</nav>
		</div>
	</div>
`;

let fragment=document.createRange().createContextualFragment(head_section);
if(currentFile=="delivery.html"){
    let form=fragment.querySelector("form.search");
    form.setAttribute("class","d-flex search d-block") //d-block class to let form element for search to dispaly
}

if(currentFile=="vendor-detail.html"){   // detail page does not need to show tabs
	let menu=fragment.querySelector("div.menu");
	menu.classList.add("d-none");
}

const placeholder=document.getElementById('head-placeholder');
if(placeholder){
    placeholder.replaceWith(fragment);
}

/*set the active menu */
const links = document.querySelectorAll('.menu .navbar-nav a');
links.forEach(link => {
    if (link.getAttribute('href') .split("/").pop()  === currentFile) {
        link.classList.add('active');
    }
});




