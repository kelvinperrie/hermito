        function AttributionModel(attributionData) {
            return {
                name: attributionData.name,
                link: attributionData.link,
                licenseUrl: attributionData.licenseUrl
            }
        }

        function ImageModel(imageData) {
            return {
                url: imageData.url,
                attribution: new AttributionModel(imageData.attribution)
            }
        }

        function CrabModel(crabData) {

            var self = this;
            this.scientificName = crabData.scientificName;
            this.memoirNiwaPage = crabData.memoirNiwaPage;
            this.commonName = crabData.commonName;
            this.details = crabData.details;
            this.similarTo = crabData.similarTo;
            this.references = crabData.references;
            this.inaturalistLink = crabData.inaturalistLink;
            this.inaturalistImagesLink = this.inaturalistLink + "/browse_photos";
            this.markForCompare = false;
            this.images = [];
            this.currentImage = 0;

            this.currentDisplayedImage = function() {
                return this.images[this.currentImage]
            }

            this.toggleMarkForCompare = function() {
                this.markForCompare = !this.markForCompare;
            }

            // allow user to display the next image
            this.navigateImageNext = function() {
                this.currentImage = this.currentImage + 1;
                if(this.currentImage >= this.images.length) {
                    this.currentImage = 0;
                }
            }
            // allow user to display the previous image
            this.navigateImagePrevious = function() {
                this.currentImage = this.currentImage - 1;
                if(this.currentImage < 0) {
                    this.currentImage = this.images.length -1;
                }
            }

            this.initialise = function() {
                for(let imageData of crabData.images) {
                    let imageModel = new ImageModel(imageData);
                    this.images.push(imageModel);
                }
            }
            this.initialise();

        }

        function pageModel() {
            return {

                crabs : [], 
                get markedCrabs() { 
                    return this.crabs.filter(item => item.markForCompare === true); 
                },
                showCompareDialog : false,
                toggleCompareDialog() {
                    this.showCompareDialog = !this.showCompareDialog;
                },

                // properties to bind to inputs
                newPokemonName : '',
                newPokemonType : '',

                // methods can be called on click
                // addNewPokemon() {
                //     this.pokemon.push({ name : this.newPokemonName, type : this.newPokemonType })
                //     this.newPokemonName = '';
                //     this.newPokemonType = '';
                // },

                // deletePokemon(name) {
                //     this.pokemon = this.pokemon.filter(function( item ) {
                //         return item.name !== name;
                //     });
                // },
                init() {
                    for (let crabData of allCrabData) {
                        var crabModel = new CrabModel(crabData);
                        this.crabs.push(crabModel);
                        //console.log(this.crabs)
                    }
                }
            }
        };