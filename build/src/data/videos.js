System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            const videos = [{
                "title": "Amsterdam Central",
                "description": "The station, which is one of the most visited touristic destinations in the country, is situated literally in the center of Amsterdam.",
                "url": {
                    "SD": " ./src/assets/videos/PedraBonita1k.mp4",
                    "HD": " ./src/assets/videos/PedraBonita1k.mp4"
                },
                "thumbnail": "/res/img/1.jpg"
            }, {
                "title": "Veer Centraal Station",
                "description": "In Veer Centraal Station you can free cross the river. Really fast and convenient. You can even go with your bike.",
                "url": {
                    "SD": "./src/assets/videos/Kyshana - converted with Clipchamp.mp4",
                    "HD": "./src/assets/videos/Kyshana - converted with Clipchamp.mp4"
                },
                "thumbnail": "/res/img/2.jpg"
            }];

            _export("videos", videos);
        }
    };
});