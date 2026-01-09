var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIS_Batas_Kecamatan_2024_0 = new ol.format.GeoJSON();
var features_LapakGIS_Batas_Kecamatan_2024_0 = format_LapakGIS_Batas_Kecamatan_2024_0.readFeatures(json_LapakGIS_Batas_Kecamatan_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIS_Batas_Kecamatan_2024_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIS_Batas_Kecamatan_2024_0.addFeatures(features_LapakGIS_Batas_Kecamatan_2024_0);var lyr_LapakGIS_Batas_Kecamatan_2024_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIS_Batas_Kecamatan_2024_0, 
                style: style_LapakGIS_Batas_Kecamatan_2024_0,
    title: 'LapakGIS_Batas_Kecamatan_2024<br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_0.png" />  363.1100 - 3443.6680 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_1.png" />  3443.6680 - 6524.2260 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_2.png" />  6524.2260 - 9604.7840 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_3.png" />  9604.7840 - 12685.3420 <br />\
    <img src="styles/legend/LapakGIS_Batas_Kecamatan_2024_0_4.png" />  12685.3420 - 15765.9000 <br />'
        });

lyr_LapakGIS_Batas_Kecamatan_2024_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIS_Batas_Kecamatan_2024_0];
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Luas Tutupan Hutan Produksi': 'Luas Tutupan Hutan Produksi', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Luas Tutupan Hutan Produksi': 'TextEdit', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Luas Tutupan Hutan Produksi': 'header label', });
lyr_LapakGIS_Batas_Kecamatan_2024_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});