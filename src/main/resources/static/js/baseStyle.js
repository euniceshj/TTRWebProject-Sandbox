// Common nav bar
document.querySelector("#navbar-section").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            
            <a class="navbar-brand col-4 col-sm-3 col-lg-2" href="index.html"><img src="images/brand-logo-white.png" alt="brand-logo-img" class="d-inline-block align-text-center img-fluid"></a>
           
            <div class="navbar-header col-4 col-sm-6 px-2 d-none d-sm-block d-lg-none display-4">
                <div class="input-group">
                    <input id="searchBar" class="form-control border-end-0 rounded-pill" type="text" placeholder="Search" aria-label="Search">
                    <span>
                        <button class="btn btn-outline-secondary bg-white border-0 rounded-pill offset-n40" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </span>
                </div>
            </div>
          
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto flex-fill justify-content-lg-around align-items-lg-center">
  
                    <li class="nav-item col-12 col-lg-3 d-block d-sm-none d-lg-block">
                        <div class="input-group">
                            <input id="searchBar2" class="form-control border-end-0 rounded-pill" type="text" placeholder="Search" aria-label="Search">
                            <span>
                                <button class="btn btn-outline-secondary bg-white border-0 rounded-pill offset-n75" type="button">
                                    <i class="bi bi-search"></i>
                                </button>
                            </span>
                        </div>
                    </li>
                    <li class="nav-item fst-italic">
                        <a class="nav-link" href="aboutme.html">About Us</a>
                    </li>
                    <li class="nav-item fst-italic">
                        <a class="nav-link" href="products.html">Products</a>
                    </li>
                    <li class="nav-item fst-italic">
                        <a class="nav-link" href="listCollection.html">Create</a>
                    </li>
                    <li class="nav-item">
                        <a href="loginPage.html">
                            <i class="bi bi-person-circle d-none d-lg-block"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <div>
                            <i class="bi bi-wallet2 d-none d-lg-block text-secondary"></i>
                        </div>
                        <a href="loginPage.html" class="nav-link button btn-primary rounded text-center text-white d-block d-lg-none">Log In</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

// Common footer
document.querySelector("footer").innerHTML = `
    <div class="footer-section row pt-4 pb-3">
        <div class="col">
            <div class="row footer-text">
                <div class="col-12 col-md-4 col-lg-3">
                    <p class="text-center text-md-start">@ Copyright 2022 TTR</p>
                </div>
                <div class="col-12 col-md-4 col-lg-5">
                    <div class="row"> 
                        <div class="col-lg-7 d-none d-lg-block px-0">
                            <p class="text-end">Join the Community</p>
                        </div>
                        
                        <div class="col-12 col-lg-5 d-flex justify-content-center">
                            <div>
                            <a href="https://github.com/euniceshj/TTR-NFT" target="_blank" class="ps-3 pe-3"><i class="bi bi-github"></i></a>
                            </div>
                            <div class="pe-3"><i class="bi bi-discord  text-secondary"></i></div>
                            <div class="pe-3"><i class="bi bi-twitter text-secondary"></i></div>
                            <div class="pe-3"><i class="bi bi-telegram text-secondary"></i></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <div class="d-flex flex-row justify-content-center justify-content-md-end px-0">
                        <p class="ps-3 pe-2">Privacy Policy</p>
                        <p class="pe-2">Terms of Service</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;