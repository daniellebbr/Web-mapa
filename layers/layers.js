var wms_layers = [];


        var lyr_HereWegoHybrid_0 = new ol.layer.Tile({
            'title': 'Here Wego Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://developer.here.com/documentation/map-tile/dev_guide/topics/resource-copyright.html">Map tiles by Here Wego</a>',
                url: 'https://2.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png8?app_id=eAdkWGYRoc4RfxVo0Z4B&app_code=TrLJuXVK62IQk0vuXFzaig&lg=eng'
            })
        });
var format_Aeroportos_1 = new ol.format.GeoJSON();
var features_Aeroportos_1 = format_Aeroportos_1.readFeatures(json_Aeroportos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aeroportos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aeroportos_1.addFeatures(features_Aeroportos_1);
var lyr_Aeroportos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aeroportos_1, 
                style: style_Aeroportos_1,
                popuplayertitle: 'Aeroportos',
                interactive: true,
    title: 'Aeroportos<br />\
    <img src="styles/legend/Aeroportos_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/Aeroportos_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/Aeroportos_1_2.png" /> Small Airport<br />'
        });

lyr_HereWegoHybrid_0.setVisible(true);lyr_Aeroportos_1.setVisible(true);
var layersList = [lyr_HereWegoHybrid_0,lyr_Aeroportos_1];
lyr_Aeroportos_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Type': 'Type', });
lyr_Aeroportos_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Type': 'TextEdit', });
lyr_Aeroportos_1.set('fieldLabels', {'name': 'no label', 'iata_code': 'inline label - always visible', 'wikipedia': 'no label', 'Type': 'no label', });
lyr_Aeroportos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});