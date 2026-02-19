        
function FilterValueModel(filterValue) {
    var self = this;

    this.text = filterValue.text;
    this.key = filterValue.key;
    this.image = filterValue.image;
    this.activated = filterValue.default === true;

    this.toggleActivated = function() {
        console.log("clicked")
        this.activated = !this.activated;
    }
}

function FilterModel(filter, pageModel) {
    var self = this;

    //self.pageModel = pageModel; // let's loop that puppy
    // self.visible = ko.observable(false);        // is this filter visible
    this.key = filter.key;                      // the key for the filter e.g. carapaceShape
    //self.visibleWhen = filter.visibleWhen;      // an object the constraints that make this filter visible (i.e. if another filter has to have something selected for this one to show)
    this.possibleValues = [];                   // an array of filterValueModels which describe the options that can be selected for the filter
    for(var i = 0; i < filter.possibleValues.length; i++) {
        this.possibleValues.push(new FilterValueModel(filter.possibleValues[i]));
    }
    this.question = filter.question;            // the question for the filter e.g. "What shape is the shell of the crab"
    this.helpText = filter.helpText;            // some text that expands on the filter's question
    this.showHelpText = false;    // whether the help text is shown for this question
    //self.ignored = ko.observable(false);        // if the user has selected to ignore this question

    // self.classes = ko.computed(function() {
    //     return self.ignored() ? "filter filter-ignored" : "filter";
    // });

    // check to see if there are any activated values on this filter (i.e. something is selected on the filter)
    this.hasAnyValueActivated = function() {
        for(var i = 0; i < this.possibleValues.length; i++) {
            if(this.possibleValues[i].activated === true) {
                return true;
            }
        }
        return false;
    }

    // check to see if a particular value has been activated
    self.checkValueIsActivated = function(value) {
        for(var i = 0; i < self.possibleValues.length; i++) {
            if(self.possibleValues[i].key === value) {
                return self.possibleValues[i].activated();
            }
        }
        return false;
    }

    // get an array of all the values for the activated filter options (i.e. all the selected values)
    self.getActiveValues = function() {
        var activeValues = [];
        for(var i = 0; i < self.possibleValues.length; i++) {
            if(self.possibleValues[i].activated()) {
                activeValues.push(self.possibleValues[i].key);
            }
        }
        return activeValues;
    }

    // set the visibility of the filter, return whether we had to deactive some filter options
    self.setVisibility = function(visibility) {
        self.visible(visibility);
        // if we're making this filter not visible then we need to clear it so it isn't actively effecting our results list
        if(!visibility) {
            return self.deactiveFilterValues();
        } else {
            return false;
        }
    };

    // deactive any set values on this filter, return a value indicating if we turned some stuff off
    self.deactiveFilterValues = function() {
        var activatedFilterChange = false;
        for(var i = 0; i < self.possibleValues.length; i++) {
            if(self.possibleValues[i].activated()) {
                activatedFilterChange = true;
            }
            self.possibleValues[i].activated(false);
        }
        return activatedFilterChange;
    };
    // check to see if this filter should be visible
    self.checkVisibility = function() {

    }
}
        
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
    this.attributes = crabData.attributes;
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
    this.matchesAtLeastOneFilter = function(activeFilters) {
        // for each filter with an item active, see if this crab matches one of the items
        for (const filter of activeFilters) {
            for(var i = 0; i < filter.possibleValues.length; i++) {
                if(filter.possibleValues[i].activated === true) {
                    // does our crab have a match?
                    let crabAttribute = this.getAttributeByKey(filter.key);
                    if(crabAttribute && crabAttribute.values.includes(filter.possibleValues[i].key)) {
                        return true;
                    }
                }
            }
            
        }
        return false;
    }

    this.getAttributeByKey = function(key) {
        const found = this.attributes.find((attribute) => attribute.key == key);
        return found;
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
        filters : [], 
        get filteredCrabs() {
            return this.crabs.filter(
                crab => crab.matchesAtLeastOneFilter(this.filters)
            )

            const activeFilters = this.filters.filter(filter => filter.activated);
            const filtered = this.crabs.filter(crab =>
                this.crabMatchesFilter(crab, activeFilters)
            );
            console.log(filtered);
            return filtered;
        },
        get markedCrabs() { 
            return this.crabs.filter(item => item.markForCompare === true); 
        },
        crabMatchesFilter(crab, activeFilters) {
            return true;
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
            for (let filterData of allFilterData) {
                var filterModel = new FilterModel(filterData);
                console.log("adding new filter")
                console.log(filterModel)
                this.filters.push(filterModel);
            }
        }
    }
};