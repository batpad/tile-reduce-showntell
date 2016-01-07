
module.exports = function(data, tile, writeData, done) {
    var roads = data.streets.road;
    var count = roads.features.length;
    done(null, count);
};