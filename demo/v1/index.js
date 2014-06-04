
window.onload = function onload(){

        RANDO.SETTINGS.DEM_URL      = "../../json/trek/903488/dem.json";
        RANDO.SETTINGS.PROFILE_URL  = "../../json/trek/903488/profile.json";
        RANDO.SETTINGS.TILE_TEX_URL = "https://a.tiles.mapbox.com/v3/makina-corpus.i3p1001l/{z}/{x}/{y}.png"
        RANDO.SETTINGS.SIDE_TEX_URL = "../../img/side.jpg";
        RANDO.SETTINGS.FAKE_TEX_URL = "../../img/white.png";
        RANDO.SETTINGS.PICTO_PREFIX = "../../img/";
        RANDO.SETTINGS.CAM_SPEED_F  = 100;

        RANDO.START_TIME = Date.now();
        
        var canvas = document.getElementById('canvas_renderer');
        var cameraID = "demo_camera";
        var scene = new RANDO.Scene(canvas, cameraID, "1.0" );
        scene.init();

};

