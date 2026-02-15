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

            this.markCompare = function() {
                this.markForCompare = true;
            }
            this.removeMarkCompare = function() {
                this.markForCompare = false;
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

                sayHello() {
                    console.log("asdf")
                },
                crabs : [], 
                get markedCrabs() { 
                    return this.crabs.filter(item => item.markForCompare === true); 
                },
                showCompareDialog : false,
                toggleCompareDialog() {
                    this.showCompareDialog = !this.showCompareDialog;
                    // if we just closed the dialog then remove the ticks on the compare checkbox for all crabs i.e. reset
                    if(!this.showCompareDialog) {
                        this.removeAllForCompare();
                    }
                },
                removeAllForCompare() {
                    for (const crab of this.crabs) {
                        crab.removeMarkCompare();
                    }
                },
                // checks to see if any crabs are selected, and if not closes the compare window - called after removing a single crab from the compare window
                closeCompareIfNoCrabsSelected() {
                    const compareCount = this.crabs.filter(item => item.markForCompare).length;
                    if(compareCount === 0) {
                        this.showCompareDialog = false;
                    }
                },
                // locates and returns a crab by the scientific name
                findCrabByScientificName(scientificName) {

                    const foundCrab = this.crabs.find((crab) => crab.scientificName == scientificName);
                    // i am too lazy to have multiple (historic) scientific names. I will regret this.
                    return foundCrab;

                },
                // takes an array of scientific name and marks each of them as being selected for comparrison
                // then opens the compare dialog
                openForCompareByScienificName(selectThese) {
                    for(var i = 0; i < selectThese.length; i++) {
                        var crab = this.findCrabByScientificName(selectThese[i]);
                        // if there name is wrong (e.g. the url param gets messed up) then we might not find it I guess
                        if(crab) {
                            crab.markCompare();
                        } else {
                            console.log("dang, I couldn't find a crab with the scientific name of "+selectThese[i])
                        }
                    }
                    this.showCompareDialog = true;
                },

                init() {
                    for (let crabData of allCrabData) {
                        var crabModel = new CrabModel(crabData);
                        this.crabs.push(crabModel);
                    }
                }
            }
        };