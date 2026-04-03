var allCrabData = [
    {
        commonName : "New Zealand Hermit Crab",
        scientificName : "Pagurus novizealandiae",
        aka : [],
        memoirNiwaPage : 196,
        inaturalistLink: "https://inaturalist.nz/taxa/489920-Pagurus-novizealandiae",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["green", "blue", "white"] },
            { key: "outerClawSurface" , values : ["smallBumps", "furry"] },
            { key: "antenaeColour" , values : ["green", "yellow", "greenWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and legs is a pale green (maybe slightly bluish). Young crabs can have green and white banded legs. <b>Knees are bright blue.</b> Covered in tufts of golden hairs.", references: [1]},
            { text: "Eye stalks are pale bluish-green. Antennae are yellow/green with tiny black stripes (stripes may not be very visible). Antennae on younger crabs are green and white banded. Antennules are pale bluish green.", references: [1]},
            { text: "Claws: Outer surface of claw has rows of (often bluish) bumps."},
            { text: "Size: ??"},
            { text: "Depth: Intertidal to around 15m.", references: [2]},
            { text: "Habitat: Under and around rocks."},
            { text: "Distribution: Common around all of New Zealand.", references: [1]}
        ],
        similarTo: [
            { key: "Diacanthurus spinulimanus", label: "Diacanthurus spinulimanus ??? NIWA says this - they don't look alike to me???" }
        ],
        images : [
            { url : "images/crabs/Pagurus novizealandiae 01.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/152989534", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } },
            { url : "images/crabs/Pagurus novizealandiae 02.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/111270247", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } },
            { url : "images/crabs/Pagurus novizealandiae 03.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/111270247", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp196-198). NIWA" },
            { id: 2, detail: "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 15/02/2026." }
        ]
    },
    {
        commonName : "",
        scientificName : "Diacanthurus spinulimanus",
        aka : [],
        memoirNiwaPage : 135,
        inaturalistLink: "https://inaturalist.nz/taxa/497510-Diacanthurus-spinulimanus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["red", "orange"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands"] },
        ],
        details : [
            { text: "Colour: Dark red/brown in colour - can be furry (so colour hidden). Knees are purple. Legs have purple vertical marks."},
            { text: "Antennules and eye stalks red/orange, antennae striped red and white bands."},
            { text: "Claws: Covered in small bumps."},
            { text: "Size: ??"},
            { text: "Depth: ??"},
            { text: "Habitat: Muddy sand", references: [1]},
            { text: "Distribution: Found throughout New Zealand."}
        ],
        similarTo: [
            { key: "Pagurus novizealandiae", label: "Pagurus novizealandiae" }
        ],
        images : [
            { url : "images/crabs/Diacanthurus spinulimanus 01.jpg", "attribution" : { "name" : "Emilie & Victoria", "link" : "https://inaturalist.nz/observations/149610051", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp135-139). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Pagurus traversi",
        aka : [],
        memoirNiwaPage : 206,
        inaturalistLink: "https://inaturalist.nz/taxa/489920-Pagurus-novizealandiae",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["red", "orange"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and legs is a pale blue-green. Legs and knees may have pale blue patches.", references: [1]},
            { text: "Eye stalks are green-blue. Antennae are dark red with narrow white bands. Antennules are reddish orange.", references: [1]},
            { text: "Claws: Outer surface of claw covered in small spikes.", references: [1]},
            { text: "Size: Max 8.1mm length", references: [3]},
            { text: "Depth: Intertidal to 15m.", references: [1]},
            { text: "Habitat: On seaweeds and under rocks.", references: [1]},
            { text: "Distribution: All of New Zealand.", references: [2]},
            { text: "<b>Legs and claws are covered in hairs (not super dense, but noticable).</b>"},
            { text: "<b>Eyes are a similar width to the eye stalks</b>, unlike Pagurixus hectori and Lophopagurus pumilus where the eyes are wider (and appear buldging)."}
        ],
        similarTo: [
            { key: "Lophopagurus pumilus", label: "Lophopagurus pumilus" },
            { key: "Pagurixus hectori", label: "Pagurixus hectori" }
        ],
        images : [
            { url : "images/crabs/Pagurus traversi 01.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/189440124", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } },
            { url : "images/crabs/Pagurus traversi 02.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/261094117", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp206-209). NIWA" },
            { id: 2, detail : "iNaturalist. Available from https://www.inaturalist.org. Accessed 15/02/2026." },
            { id: 3, detail : "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 15/02/2026." }
        ]
    },
    {
        commonName : "",
        scientificName : "Areopaguristes setosus",
        aka : [],
        memoirNiwaPage : 73,
        inaturalistLink: "https://inaturalist.nz/taxa/636902-Areopaguristes-setosus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["transparent", "white", "green"] },
            { key: "outerClawSurface" , values : ["smallBumps", "furry"] },
            { key: "antenaeColour" , values : ["white","green"] },
        ],
        details : [
            { text: "Colour: Light reddish or mostly white - fur can make them appear olive green. Fingers and leg tips tend towards orange; extreme tips may be white."},
            { text: "Antennules, antennae, and eye stalks have no strong colouring and show as white or very light green. No banding on antennae."},
            { text: "Claws: Covered in small bumps but can be furry. Left claws much larger than right.", references: [1]},
            { text: "Size: From 4mm to 25.5mm in length.", references: [1]},
            { text: "Depth: Mostly found from 15 to 22m, but can be intertidal.", references: [1]},
            { text: "Habitat: Shelly sand and shell-gravel.", references: [1]},
            { text: "Distribution: Found throughout New Zealand."}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Areopaguristes setosus 01.jpg", "attribution" : { "name" : "lcolmer", "link" : "https://inaturalist.nz/observations/62745403", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } },
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp73-78). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Pagurixus hectori",
        aka : [],
        memoirNiwaPage : 184,
        inaturalistLink: "https://inaturalist.nz/taxa/489920-Pagurus-novizealandiae",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["red", "orange"] },
            { key: "outerClawSurface" , values : ["smooth"] },
            { key: "antenaeColour" , values : ["brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and claws is a deep brown-red. Claw fingers tend to white. Legs are loosely banded in brown, orange, and white.", references: [2]},
            { text: "Eye stalks are brown with white bands or markings. Antennae are brown with narrow white bands. Antennules are orange/red.", references: [2]},
            { text: "Claws: <b>Outer surface of claws are smooth.</b>"},
            { text: "Size: ??"},
            { text: "Depth: Intertidal.", references: [1]},
            { text: "Habitat: Rockpools and under rocks."},
            { text: "Distribution: Probably most of New Zealand.", references: [2]},
            { text: "<b>Eyes probably a bit wider than eye stalks</b>."}
        ],
        similarTo: [
            { key: "Pagurus traversi", label: "Pagurus traversi" },
            { key: "Lophopagurus pumilus", label: "Lophopagurus pumilus" }
        ],
        images : [
            { url : "images/crabs/Pagurixus hectori 01.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/196005149", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } },
            { url : "images/crabs/Pagurixus hectori 02.jpg", "attribution" : { "name" : "Kelvin Perrie", "link" : "https://inaturalist.nz/observations/92721199", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp184-187). NIWA" },
            { id: 2, detail : "iNaturalist. Available from https://www.inaturalist.org. Accessed 15/02/2026." }
        ]
    },
    {
        commonName : "",
        scientificName : "Dardanus arrosor",
        aka : [],
        memoirNiwaPage : 81,
        inaturalistLink: "https://inaturalist.nz/taxa/466901-Dardanus-arrosor",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["red", "yellow"] },
            { key: "outerClawSurface" , values : ["smooth","lined"] },
            { key: "antenaeColour" , values : ["red", "yellow"] },
        ],
        details : [
            { text: "Colour: Carapace is red with hints of yellow. Claws and legs yellowish-red to violet red. Knees can be a darker red.", references: [1]},
            { text: "Eye stalks pale pink with a pink band at midlength and pink band below the eye. Antennae and antennules reddish yellow.", references: [1]},
            { text: "Claws: Outer surface of claws flat but with crooked lines running around them. Left claw is much larger than right."},
            { text: "Size: Around 24-75mm carapace length.", references: [1]},
            { text: "Depth: Problably most commonly found between 15 to 165m.", references: [1]},
            { text: "Habitat is unknown????"},
            { text: "Distribution: Found on both coasts around and north of Auckland.", references: [1]}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Dardanus arrosor 01.jpg", "attribution" : { "name" : "nakileigh", "link" : "https://inaturalist.nz/observations/156184588", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp81-85). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Pagurus albidianthus",
        aka : [],
        memoirNiwaPage : 199,
        inaturalistLink: "https://inaturalist.nz/taxa/962623-Pagurus-albidianthus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["red", "brown", "orange"] },
            { key: "outerClawSurface" , values : ["smooth","smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands", "brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and legs can range from a fadded pink to a plum colour. Smaller crabs can be mostly white. Knees have white bands and can orange patches.", references: [1, 2]},
            { text: "Eye stalks are light brown or reddish. Antennae are light brown with narrow white bands. Antennules are light brown or reddish.", references: [1]},
            { text: "Claws: Outer surface of claw probably appear smooth, but actually covered in small/subtle bumps.", references: [1]},
            { text: "Size: ??"},
            { text: "Depth: Probably intertidalish / close to the beach.", references: [1]},
            { text: "Habitat: Mainly on sand.", references: [1]},
            { text: "Distribution: Probably all of New Zealand.", references: [2]}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Pagurus albidianthus 01.jpg", "attribution" : { "name" : "Zachary Robertson", "link" : "https://inaturalist.nz/observations/270599369", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } },
            { url : "images/crabs/Pagurus albidianthus 02.jpg", "attribution" : { "name" : "Evelyn Virens", "link" : "https://inaturalist.nz/observations/40682385", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp199-206). NIWA" },
            { id: 2, detail : "iNaturalist. Available from https://www.inaturalist.org. Accessed 15/02/2026." }
        ]
    },
    {
        commonName : "",
        scientificName : "Lophopagurus thompsoni",
        aka : [],
        memoirNiwaPage : 157,
        inaturalistLink: "https://inaturalist.nz/taxa/603299-Lophopagurus-thompsoni",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["blue", "mauve"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands", "brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Carapace pale orange/red. Claws and legs orange-red with red stripes running up them. White knees.", references: [1]},
            { text: "Eye stalks are orange-red with pale blue below the eye. Antennae banded in reddish-brown and white. Antennules are pale blue or mauve.", references: [1]},
            { text: "Claws: Outer surface of claws has very small bumps."},
            { text: "Size: ??"},
            { text: "Depth: ??"},
            { text: "Habitat: Muddy bottoms.", references: [1]},
            { text: "Distribution: Found all through New Zealand.", references: [1]}
        ],
        similarTo: [
            { key: "Lophopagurus foresti", label: "Lophopagurus foresti" }
        ],
        images : [
            { url : "images/crabs/Lophopagurus thompsoni 01.jpg", "attribution" : { "name" : "Luca Davenport-Thomas", "link" : "https://inaturalist.nz/observations/243039360", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp157-161). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Lophopagurus pumilus",
        aka : [],
        memoirNiwaPage : 150,
        inaturalistLink: "https://inaturalist.nz/taxa/1071800-Lophopagurus-pumilus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["yellow", "orange"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["maroonWhiteBands","brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main body is brownish with greenish claws that have white marking towards tips. Legs are banded in maroon/brown and white stripes.", references: [1]},
            { text: "Eye stalks are white and greenish, appearing mottled. Antennae are maroon with small white bands. Antennules are yellow-orange.", references: [1]},
            { text: "Claws: Outer surface of claws has scattered small bumps."},
            { text: "Size: ??"},
            { text: "Depth: From 20m to 120m", references: [1]},
            { text: "Habitat: Sand, muddy sand, gravel.", references: [1]},
            { text: "Distribution: A bit unclear where found - probably most of the North Island and top and eastern part of the South Island.", references: [1]},
            { text: "<b>Eyes a lot wider than eye stalks<b> (unlike Pagurus traversi where the eyes are similar with to eye stalks)."},
        ],
        similarTo: [
            { key: "Pagurus traversi", label: "Pagurus traversi" },
            { key: "Pagurixus hectori", label: "Pagurixus hectori" }
        ],
        images : [
            { url : "images/crabs/Lophopagurus pumilus 01.jpg", "attribution" : { "name" : "Emily Roberts", "link" : "https://inaturalist.nz/observations/212162737", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp150-153). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Lophopagurus triserratus",
        aka : [],
        memoirNiwaPage : 177,
        inaturalistLink: "https://inaturalist.nz/taxa/1470930-Lophopagurus-triserratus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["transparent", "red"] },
            { key: "outerClawSurface" , values : ["smooth", "smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands","brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and legs is a light reddish brown. Legs have white around the knees; can appare to be red &amp; white bands.", references: [1]},
            { text: "Eye stalks are ??????. Antennae are banded in reddish-brown and white. Antennules have very little colour; transparent / light red.", references: [1]},
            { text: "Claws: Outer surface of claw is smooth on larger crabs and may have a line of small bump through the middle. Small crabs have a bumpy outer surface.", references: [1,2]},
            { text: "Size: ??"},
            { text: "Depth: 60 to 400m", references: [1]},
            { text: "Habitat: Often found in tubes attached to rocks, originally made by worms (so can't move around).", references: [1]},
            { text: "Distribution: All of New Zealand.", references: [1]}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Lophopagurus triserratus 01.jpg", "attribution" : { "name" : "Luca Davenport-Thomas", "link" : "https://inaturalist.nz/observations/283825278", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp177-179). NIWA" },
            { id: 2, detail : "Wikipedia. Available from https://en.wikipedia.org, Wikimedia Foundation. Accessed 15/02/2026." }
        ]
    },
    {
        commonName : "",
        scientificName : "Diacanthurus rubricatus",
        aka : [],
        memoirNiwaPage : 139,
        inaturalistLink: "https://inaturalist.nz/taxa/514925-Diacanthurus-rubricatus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["white"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["red","brown"] },
        ],
        details : [
            { text: "Colour: Claws and legs yellow-brown colour. Knees have bright red bands. Legs have purple vertical marks.", references: [1]},
            { text: "Eye stalks white with red vertical stripe, antennae reddish brown (no bands), antennules white.", references: [1]},
            { text: "Claws: Claws covered in small bumps."},
            { text: "Size: ??"},
            { text: "Depth: Most commonly found between 40 and 220m", references: [1]},
            { text: "Habitat: ??"},
            { text: "Distribution: Found throughout New Zealand."}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Diacanthurus rubricatus 01.jpg", "attribution" : { "name" : "Shaun", "link" : "https://inaturalist.nz/observations/24495318", "licenseUrl" : "https://creativecommons.org/licenses/by/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp139-142). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Paguristes barbatus",
        aka : [],
        memoirNiwaPage : 59,
        inaturalistLink: "https://inaturalist.nz/taxa/472058-Paguristes-barbatus",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["blue","mauve"] },
            { key: "outerClawSurface" , values : ["smooth", "smallBumps"] },
            { key: "antenaeColour" , values : ["blue"] },
        ],
        details : [
            { text: "Colour: Carapace, claws, and legs are brown. Claws and legs are tipped with black.", references: [1]},
            { text: "Eye stalks, antennae, and antennules are blue.", references: [1]},
            { text: "Claws: Outer surface of claws has bumps."},
            { text: "Size: 5.9mm to 8.9mm carapace length.", references: [1]},
            { text: "Depth: Between 20 and 37m.", references: [1]},
            { text: "Habitat: ??"},
            { text: "Distribution: North Island, probably north of Auckland.", references: [1]}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Paguristes barbatus 01.jpg", "attribution" : { "name" : "tangatawhenua", "link" : "https://inaturalist.nz/observations/4235848", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae (pp59-63). NIWA" }
        ]
    },
        {
        commonName : "",
        scientificName : "Lophopagurus laurentae",
        aka : [],
        memoirNiwaPage : 169,
        inaturalistLink: "https://inaturalist.nz/taxa/1096600-Lophopagurus-laurentae",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["brown"] },
            { key: "outerClawSurface" , values : ["smooth"] },
            { key: "antenaeColour" , values : ["brownWhiteBands","maroonWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour of body and legs is a smoky mauve/purple."},
            { text: "Eye stalks are pale brown. Antennae are purple-brown with narrow white bands. Antennules are pale brown.", references: [1]},
            { text: "Claws: Outer surface of claw is mostly smooth, almost appearing scaly.", references: [1]},
            { text: "Size: ??"},
            { text: "Depth: Mostly between 25 and 60m", references: [1]},
            { text: "Habitat: Probably sandy."},
            { text: "Distribution: Western and eastern New Zealand.", references: [1]}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Lophopagurus laurentae 01.jpg", "attribution" : { "name" : "Francesco Martoni", "link" : "https://inaturalist.nz/observations/260780980", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp169-171). NIWA" }
        ]
    },
    {
        commonName : "",
        scientificName : "Dardanus longior",
        aka : [],
        memoirNiwaPage : null,
        inaturalistLink: "https://inaturalist.nz/taxa/1286751-Dardanus-longior",
        attributes : [
            { key: "geographicLocation" , values : ["kermadec"] },
            { key: "antennulesColour" , values : ["yellow"] },
            { key: "outerClawSurface" , values : ["furry", "smooth"] },
            { key: "antenaeColour" , values : ["yellow"] },
        ],
        details : [
            { text: "Colour: Carapace is orange/red. Claws and legs with bands of orange/red with white."},
            { text: "Eye stalks white with undertones of red. Antennae and antennules pale yellow."},
            { text: "Claws: Outer surface of claws are smooth, but probably a bit furry ???Need to confirm this???"},
            { text: "Size: ??"},
            { text: "Depth: ??"},
            { text: "Habitat: ??"},
            { text: "Distribution: Kermadec islands and <b>NOT mainland NZ</b> - based on observations in iNaturalist."}
        ],
        similarTo: [
            { key: "Dardanus sanguinolentus", label: "Dardanus sanguinolentus" }
        ],
        images : [
            { url : "images/crabs/Dardanus longior 01.jpg", "attribution" : { "name" : "pcaiger", "link" : "https://inaturalist.nz/observations/297119369", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
        ]
    },
    {
        commonName : "",
        scientificName : "Dardanus sanguinolentus",
        aka : [],
        memoirNiwaPage : null,
        inaturalistLink: "https://inaturalist.nz/taxa/1287081-Dardanus-sanguinolentus",
        attributes : [
            { key: "geographicLocation" , values : ["kermadec"] },
            { key: "antennulesColour" , values : ["yellow"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["yellow"] },
        ],
        details : [
            { text: "Colour: Carapace is orange/red. Claws and legs with bands of orange/red with white. Has red knees."},
            { text: "Eye stalks white. Antennae and antennules yellow."},
            { text: "Claws: Outer surface of claws has bumps."},
            { text: "Size: ??"},
            { text: "Depth: ??"},
            { text: "Habitat: ??"},
            { text: "Distribution: Kermadec islands and <b>NOT mainland NZ</b> - based on observations in iNaturalist."}
        ],
        similarTo: [
            { key: "Dardanus longior", label: "Dardanus longior" }
        ],
        images : [
            { url : "images/crabs/Dardanus sanguinolentus 01.jpg", "attribution" : { "name" : "Malcolm Francis", "link" : "https://inaturalist.nz/observations/252476447", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
        ]
    },
    {
        commonName : "Queensland Hermit Crab",
        scientificName : "Calcinus sirius",
        aka : [],
        memoirNiwaPage : null,
        inaturalistLink: "https://inaturalist.nz/taxa/1080999-Calcinus-sirius",
        attributes : [
            { key: "geographicLocation" , values : ["kermadec"] },
            { key: "antennulesColour" , values : ["yellow", "red", "pink"] },
            { key: "outerClawSurface" , values : ["smooth"] },
            { key: "antenaeColour" , values : ["yellow","red","pink"] },
        ],
        details : [
            { text: "Colour: Carapace reddish, pink. Claws and legs alternating white and pink/red - not really in bands. Lower claws and fingers white. Darker red often at the knees."},
            { text: "Eye stalks pinkish, can be violet below the eyes. Antennae, and antennules are yellow or light red/pink."},
            { text: "Claws: Outer surface of claws smooth."},
            { text: "Size: ??"},
            { text: "Depth: ??"},
            { text: "Habitat: ??"},
            { text: "Distribution: Kermadec islands, <b>probably not mainland NZ</b>."}
        ],
        similarTo: [
        ],
        images : [
            { url : "images/crabs/Calcinus sirius 01.jpg", "attribution" : { "name" : "pcaiger", "link" : "https://inaturalist.nz/observations/297120139", "licenseUrl" : "https://creativecommons.org/licenses/by-nc/4.0/" } }
        ],
        references : [
        ]
    },
    {
        commonName : "",
        scientificName : "Lophopagurus foresti",
        aka : [],
        memoirNiwaPage : 161,
        inaturalistLink: "https://inaturalist.nz/taxa/1144069-Lophopagurus-foresti",
        attributes : [
            { key: "geographicLocation" , values : ["mainland"] },
            { key: "antennulesColour" , values : ["blue","mauve"] },
            { key: "outerClawSurface" , values : ["smallBumps"] },
            { key: "antenaeColour" , values : ["redWhiteBands","brownWhiteBands"] },
        ],
        details : [
            { text: "Colour: Main colour is whitish pink(?). Legs have red stripes running down them.", references: [1]},
            { text: "Eye stalks are ??????. Antennae are banded in reddish-brown and white. Antennules are mauve.", references: [1]},
            { text: "Claws: Outer surface of right claw has small bumps; left has less bumps. Claws have a ridge running down them", references: [1]},
            { text: "Size: ??"},
            { text: "Depth: Intertidal to 220m", references: [1]},
            { text: "Habitat: Gravel or mud.", references: [1]},
            { text: "Distribution: Probably most of mainland New Zealand.", references: [1]},
            { text: "??how to distinguish from Lophopagurus thompsoni"},
        ],
        similarTo: [
            { key: "Lophopagurus thompsoni", label: "Lophopagurus thompsoni" }
        ],
        images : [
            { url : "images/noimage.png", "attribution" : { "name" : "None", "link" : "", "licenseUrl" : "" } }
        ],
        references : [
            { id: 1, detail : "J. Forest, M. de S. Laurent, P.A. McLaughlin, R. Lemaitre. (2000) The Marine Fauna of New Zealand: Paguridea (Decapoda: Anomura) exclusive of the Lithodidae pp161-163). NIWA" }
        ]
    }
]