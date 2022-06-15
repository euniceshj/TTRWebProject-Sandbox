class NftController {
    constructor() {
        this.allNfts = [];
        this.tempNfts = [];
        this.currentId = 0;
        this.filters = [
            "all",
            "photography",
            "music",
            "art",
            "sports",
            "collectibles",
            "all2",
            "photography2",
            "music2",
            "art2",
            "sports2",
            "collectibles2",
        ];

        this.like = 0; // Initialize initial likes to zero, will increase per click with addLike() method
        this.counter = 0; // Initialize display counter to zero
    }

    addNft(title, imageURL, price, description, hashtag, view, category) {
        
        this.currentId++;

        const nft = {
            title: title,
            price: price,
            imageURL: imageURL,
            description: description,
            hashtag: hashtag,
            view: view,
            category: category,
            id: this.currentId,
            like: this.like,
        };

        this.allNfts.push(nft);

    } //End of addNft method

    //method to display array of NFT objects to product page
    displayNft() {

        let nftInfo = "";
        let nftid = "";

        // initialise page display
        if (this.counter == 0) {
            this.tempNfts = this.allNfts;
        }
        this.counter++;

        this.tempNfts.forEach((nft, index) => {
            nftid = "nft" + index; //nft1, nft2, nft3....
            nftInfo += `
                <div class="col">
                    <div class="card border-dark">
                        <div class="like-button">
                        <img
                            src="${nft.imageURL}"
                            class="card-img-top"
                            alt="..."
                        />
                        <button class="btn btn-lg" id="${nftid}">
                            <i class="fa-solid fa-heart"></i>
                        </button>
                        </div>
                        <div class="card-body">
                        <h4 class="card-title">${nft.title}</h4>
                        <div class="item-price">
                            <h5>List price: ${nft.price}</h5>
                            <a id="${nft.id}" href="#" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Buy now</a>
                        </div>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector("#nftController").innerHTML = nftInfo;
    
        // Add eventlistener to all the buttons to display info in modal
        this.tempNfts.forEach((nft) => {
            document
                .getElementById(nft.id)
                .addEventListener("click", () => {
                    displayNftDetail(nft);
                });
        });

        //Add eventlistener to all the like buttons to increase number of likes by 1
        this.tempNfts.forEach((nft, index) => {
            nftid = "nft" + index;
            document
                .getElementById(nftid)
                .addEventListener("click", function () {
                    nft.like++;
                });
        });

        //On user clicks, filter NFT based on category and display
        this.filterNftCategory();
        console.log(this.tempNfts); // test
        
    } //end of displayNft method

    // Method to filter through category and call filterNftArray() method
    filterNftCategory() {
        this.filters.forEach((category) => {
            document
                .getElementById(category)
                .addEventListener("click", (e) => {
                    e.preventDefault();
                    this.filterNftArray(category, e);
                });
        });

        document.querySelector("#searchBar").addEventListener("keypress", (e) =>{
            if (e.key == "Enter") {
                let searchInput = e.target.value;
                this.filterNftArray(searchInput, e);  
            }
        });

        document.querySelector("#searchBar2").addEventListener("keypress", (e) =>{
            if (e.key == "Enter") {
                let searchInput = e.target.value;
                this.filterNftArray(searchInput, e);  
            }
        });
    } // end of method

    //Method to filter array of NFT objects based on category selected
    filterNftArray(filterValue, event) {
        this.tempNfts = [];

        // remove digits from css selector ID
        filterValue = filterValue.match(/[a-z]/gi).join("").toLowerCase();

        if (filterValue == "all") {
            this.tempNfts = this.allNfts;
        }
        else {
            filterValue = filterValue.match(/[a-z]/gi).join("").toLowerCase();
            let filterData = [];
            
            if (event.target.id.includes("searchBar")) {
                filterData = this.allNfts.filter((nft) => 
                    nft.category.toLowerCase().includes(filterValue) ||
                    nft.title.toLowerCase().includes(filterValue) ||
                    nft.description.toLowerCase().includes(filterValue) ||
                    nft.hashtag.toLowerCase().includes(filterValue)
                );
            }
            else {
                filterData = this.allNfts.filter((nft) => 
                    nft.category.toLowerCase().includes(filterValue)
                );
            }

            filterData.forEach((nft) => {
                this.tempNfts.push(nft);
            });
        }
        
        this.displayNft(this.tempNfts);
    } // end of method

    //method to display array of NFT objects to home page
    displayCarousel() {

        let count = 0;
        let nftInfo = "";
        let nftid = "";
        let topSection1 = `
            <div class="carousel-item active">
                <div class="row py-5">
        `;
        let topSection2 = `
            <div class="carousel-item">
                <div class="row py-5">
        `;
        let bottomSection = `
                </div>
            </div>
        `;
        let topSubSection1 = `
                    <div class="card col-12 col-md-6 col-lg-4 border-0 px-4">
        `;
        let topSubSection2 = `
                    <div class="card col-12 col-md-6 col-lg-4 border-0 d-none d-md-block d-lg-block px-4">
        `;
        let topSubSection3 = `
                    <div class="card col-12 col-md-6 col-lg-4 border-0 d-none d-lg-block px-4">
        `;
        let bottomSubSection = `
                    </div>
        `;

        this.allNfts.forEach((nft) => {
            
            // random status generator
            let randInt = Math.floor(Math.random() * 2);
            let status = false;
            (randInt == 0) ? status = true : status = false;
            
            // if statement to determine whether to add NFT to carousel
            if (count < 9 && status) {
                
                console.log(count); //nft0, nft1, nft2....

                // add outer layer starting div
                if (count == 0) {
                    nftInfo += topSection1;
                }
                else if (count % 3 == 0) {
                    nftInfo += topSection2;
                }
                
                // add inner layer starting div
                if (count % 3 == 0) {
                    nftInfo += topSubSection1;
                }
                else if (count % 3 == 1) {
                    nftInfo += topSubSection2;
                }
                else {
                    nftInfo += topSubSection3;
                }

                nftInfo += `
                            <img src="${nft.imageURL}" class="card-img-top rounded d-flex img-fluid" alt="...">
                            <div class="card-img-overlay d-flex flex-column justify-content-end px-4">
                                <h5 class="card-title fw-bold text-white bg-secondary bg-opacity-75 display-6 ps-2 overflow-hidden text-nowrap d-inline-block text-truncate">${nft.title}</h5>
                                <p class="card-text fw-bold fs-4 text-white bg-secondary bg-opacity-75 ps-2">Category: #${nft.category}</p>
                            </div>
                `;

                // add inner layer closing div
                nftInfo += bottomSubSection;
                // add outer layer closing div
                if (count != 0 && count % 3 == 2) {
                    nftInfo += bottomSection;
                }

                count++;
            }
            
        });

        document.querySelector("#carouselDisplay").innerHTML = nftInfo;

    } // end of method

} //End of productController class


//function to add NFT values to modal
const displayNftDetail = function (nft) {
    document.querySelector("#nftTitle").innerHTML = nft.title;
    document.querySelector("#nftImage").src = nft.imageURL;
    document.querySelector("#nftDescription").innerHTML = nft.description;
    document.querySelector("#nftPrice").innerHTML = `Price: ${nft.price}`;
    document.querySelector("#nftHashtag").innerHTML = nft.hashtag;
    document.querySelector("#nftViews").innerHTML = nft.view;
    document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.like}`;
    document.querySelector("#nftIdAssign").innerHTML = `
        <button id="${nft.id}a" class="btn btn-primary">
        Like <i class="fa-solid fa-thumbs-up"></i>
        </button>
    `;
    
    // to add likes when like button in modal is clicked
    let nftid2 = nft.id + "a";
    document
        .getElementById(nftid2)
        .addEventListener("click", () => {
            nft.like++;
            document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.like}`;
        });
};

