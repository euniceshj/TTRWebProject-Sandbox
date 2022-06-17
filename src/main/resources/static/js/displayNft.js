const nftCollection = new NftController();

// check if css #id exists before calling displayNft method() 
if ( document.querySelector("#nftController") != null) {
    nftCollection.displayNft();
}

// check if css #id exists before calling displayCarousel method()
if ( document.querySelector("#carouselDisplay") != null) {
    nftCollection.displayCarousel();
}