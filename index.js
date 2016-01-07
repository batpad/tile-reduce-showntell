// require the tile-reduce module
var TileReduce = require('tile-reduce');
var roadCount = 0;

TileReduce({
    'bbox': [77.63497, 12.97894, 77.63749, 12.98132],
    'zoom': 16,
    'sources': [
        {
            name: 'streets',
            url: 'https://b.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1Ijoic2FuamF5YiIsImEiOiJjaWZveXdycGJod3ljc2VtN2tzajJ5Zmt2In0.rTcH6De56b5uvVte71BLiA',
            layers: ['road', 'bridge', 'tunnel']
        }
    ],
    map: __dirname+'/map.js'
}).on('reduce', function(value) {
    roadCount += value;
}).on('end', function() {
    console.log(roadCount);    
});