pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "main_corp_street",
        "sceneFadeDuration": 1000
    },

    "scenes": {
    	"main_corp_street": {
    		"type": "equirectangular",
    		"panorama": "img/a_corp.jpg",
    		"vaov": 60,
    		"minPitch": -30,
    		"maxPitch": 30,
    		"minHfov": -75,
    		"maxHfov": 75,
    		"hotSpots": [
                {
                    "pitch": -10,
                    "yaw": 9,
                    "type": "scene",
                    "text": "Корпус А",
                    "sceneId": "main_corp_inside"
                }
            ]
    	},

    	"main_corp_inside": {
    		"type": "equirectangular",
    		"panorama": "img/main_corp_inside.jpg",
    		"vaov": 60,
    		"minPitch": -30,
    		"maxPitch": 30,
    		"minHfov": -60,
    		"maxHfov": 60,
    		"yaw": -120,
    		"pitch": -5,
    		"hotSpots": [
                {
                    "pitch": -5,
                    "yaw": -115,
                    "type": "scene",
                    "text": "Лестница",
                    "sceneId": "lestnitsa"
                }
            ]
    	},

    	"lestnitsa": {
    		"type": "equirectangular",
    		"panorama": "img/lestnitsa.jpg",
    		"vaov": 60,
    		"minPitch": -30,
    		"maxPitch": 30,
    		"minHfov": -60,
    		"maxHfov": 60,
    	}
    }
});

