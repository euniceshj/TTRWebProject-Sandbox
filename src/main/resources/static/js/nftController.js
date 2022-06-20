class NftController {

    constructor() {

        this.allNfts = [];
        this.tempNfts = [];
        // this.currentId = 0;
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

        this.counter = 0; // Initialize display counter to zero

        // Configuration of dev and prod URL - usually will fetch a json file from the API in the environment
        this.domainURL_Dev = "http://localhost:8080/";
        // this.domainURL_Prod ="";

        this.addItemAPI = this.domainURL_Dev + "nft/add";
        this.allItemAPI = this.domainURL_Dev + "nft/all";

    }

    addNft(title, price, imageUrl, description, category, nftObject) {

        let nftController = this;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('imageUrl', imageUrl);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('numlikes', 0);

        formData.append('nftfile', nftObject);

        fetch(this.addItemAPI, {
           method: 'POST',
           body: formData
           })
           .then(function(response) {
               console.log(response.status); // Will show you the status
               if (response.ok) {
                   alert("Successfully Added NFT!")
               }
               else {
                    throw Error(response.StatusText);
               }
           })
           .catch((error) => {
               console.error('Error:', error);
               alert("Error adding item to Product")
           });

    } //End of addNft method

    // method to display NFT objects from database
    displayNft() {

        const nftController = this;

        fetch(this.allItemAPI)
            .then((resp) => resp.json())
            .then(function(data) {

                console.log("2. receive data")
                console.log(data);

                data.forEach((nft, index) => {

                    const nftObj = {
                        id: nft.idNft,
                        title: nft.title,
                        price: nft.price,
                        imageUrl: nft.imageUrl,
                        description: nft.description,
                        category: nft.category,
                        numlikes: nft.numlikes
                   };

                    nftController.allNfts.push(nftObj);
                });

            // check if css #id exists before calling displayNft method()
            if ( document.querySelector("#nftController") != null) {
                console.log(nftController.allNfts);
                nftController.renderProductPage();
            }

            // check if css #id exists before calling displayCarousel method()
            if ( document.querySelector("#carouselDisplay") != null) {
                nftController.renderCarouselPage();
            }

        })
        .catch(function(error) {
            console.log(error);
        });

    } // end of displayNft method

    // method to render product page
    renderProductPage() {

        this.renderProductPageHTML(this.allNfts);

        //On user clicks, filter NFT based on category and display
        this.filterNftCategory();
        
    } //end of renderProductPage method

    // method to generate html and apply event listeners
    renderProductPageHTML(array) {

        let nftInfo = "";

        array.forEach((nft, index) => {

            // nftid = "nft" + index; //nft1, nft2, nft3....
            nftInfo += `
                <div class="col">
                    <div class="card border-dark">
                        <div class="like-button">
                            <img
                                src="${nft.imageUrl}"
                                class="card-img-top"
                                alt="..."
                            />
                            <button class="btn btn-lg" id="nft${nft.id}-like">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${nft.title}</h4>
                            <div class="item-price">
                                <h5>List price: ${nft.price}</h5>
                                <a id="nft${nft.id}" href="#" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">Buy now</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        document.querySelector("#nftController").innerHTML = nftInfo;

        // Add eventlistener to all the buttons to display info in modal
        array.forEach((nft) => {
            let nftid = "nft" + nft.id;
            document
                .getElementById(nftid)
                .addEventListener("click", () => {
                    displayNftDetail(nft);
                });
        });

        //Add eventlistener to all the like buttons to increase number of likes by 1
        array.forEach((nft) => {
            let nftid = "nft" + nft.id + "-like";
            document
                .getElementById(nftid)
                .addEventListener("click", function () {
                    nft.numlikes++;
                });
        });

    } // end of method

    // Method to filter through category and call filterNftArray() method
    filterNftCategory() {

        this.filters.forEach((category) => {
            document
                .getElementById(category)
                .addEventListener("click", (e) => {
                    e.preventDefault();
                    this.filterNftArray(category, e);
                    console.log("clicked")
                });
        });

        document.querySelector("#searchBar").addEventListener("keypress", (e) =>{
            if (e.key == "Enter") {
                let searchInput = e.target.value;
                this.filterNftArray(searchInput, e);
                console.log("searched #1")
            }
        });

        document.querySelector("#searchBar2").addEventListener("keypress", (e) =>{
            if (e.key == "Enter") {
                let searchInput = e.target.value;
                this.filterNftArray(searchInput, e);
                console.log("searched #2")
            }
        });

    } // end of method

    //Method to filter array of NFT objects based on category selected
    filterNftArray(filterValue, event) {

        this.tempNfts = [];
        console.log("filtering NFT")

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
                    nft.description.toLowerCase().includes(filterValue)
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
        
        // check if css #id exists before calling displayNft method()
        if ( document.querySelector("#nftController") != null) {
            this.renderProductPageHTML(this.tempNfts);
        }

        // check if css #id exists before calling displayCarousel method()
        if ( document.querySelector("#carouselDisplay") != null) {
            this.renderCarouselPage();
        }

    } // end of method

    //method to display array of NFT objects to home page
    renderCarouselPage() {

        console.log(this.allNfts);

        let count = 0;
        let nftInfo = "";
        // let nftid = "";
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
                            <img src="${nft.imageUrl}" class="card-img-top rounded d-flex img-fluid" alt="...">
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

} //End of NftController class

//function to add NFT values to modal
const displayNftDetail = function (nft) {
    document.querySelector("#nftTitle").innerHTML = nft.title;
    document.querySelector("#nftImage").src = nft.imageUrl;
    document.querySelector("#nftDescription").innerHTML = nft.description;
    document.querySelector("#nftPrice").innerHTML = `Price: ${nft.price}`;
    // document.querySelector("#nftHashtag").innerHTML = nft.hashtag;
    // document.querySelector("#nftViews").innerHTML = nft.view;
    document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.numlikes}`;
    document.querySelector("#nftIdAssign").innerHTML = `
        <button id="nft${nft.id}a" class="btn btn-primary">
        Like <i class="fa-solid fa-thumbs-up"></i>
        </button>
    `;
    
    // to add likes when like button in modal is clicked
    let nftid2 = "nft" + nft.id + "a";
    document
        .getElementById(nftid2)
        .addEventListener("click", () => {
            nft.numlikes++;
            document.querySelector("#nftLikes").innerHTML = `No. of likes: ${nft.numlikes}`;
        });
};

