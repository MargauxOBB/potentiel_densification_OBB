ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([487387.720000, 6744913.100000, 505374.400000, 6762155.239993]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_parcelles_1 = new ol.format.GeoJSON();
var features_parcelles_1 = format_parcelles_1.readFeatures(json_parcelles_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_parcelles_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelles_1.addFeatures(features_parcelles_1);
var lyr_parcelles_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelles_1, 
                style: style_parcelles_1,
                popuplayertitle: 'parcelles',
                interactive: false,
                title: '<img src="styles/legend/parcelles_1.png" /> parcelles'
            });
var format_enjeux_patrimoniaux_2 = new ol.format.GeoJSON();
var features_enjeux_patrimoniaux_2 = format_enjeux_patrimoniaux_2.readFeatures(json_enjeux_patrimoniaux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_enjeux_patrimoniaux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeux_patrimoniaux_2.addFeatures(features_enjeux_patrimoniaux_2);
var lyr_enjeux_patrimoniaux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeux_patrimoniaux_2, 
                style: style_enjeux_patrimoniaux_2,
                popuplayertitle: 'enjeux_patrimoniaux',
                interactive: false,
                title: '<img src="styles/legend/enjeux_patrimoniaux_2.png" /> enjeux_patrimoniaux'
            });
var format_emplacements_reserves_3 = new ol.format.GeoJSON();
var features_emplacements_reserves_3 = format_emplacements_reserves_3.readFeatures(json_emplacements_reserves_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_emplacements_reserves_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_emplacements_reserves_3.addFeatures(features_emplacements_reserves_3);
var lyr_emplacements_reserves_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_emplacements_reserves_3, 
                style: style_emplacements_reserves_3,
                popuplayertitle: 'emplacements_reserves',
                interactive: false,
                title: '<img src="styles/legend/emplacements_reserves_3.png" /> emplacements_reserves'
            });
var format_enjeux_ecologiques_4 = new ol.format.GeoJSON();
var features_enjeux_ecologiques_4 = format_enjeux_ecologiques_4.readFeatures(json_enjeux_ecologiques_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_enjeux_ecologiques_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_enjeux_ecologiques_4.addFeatures(features_enjeux_ecologiques_4);
var lyr_enjeux_ecologiques_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_enjeux_ecologiques_4, 
                style: style_enjeux_ecologiques_4,
                popuplayertitle: 'enjeux_ecologiques',
                interactive: false,
                title: '<img src="styles/legend/enjeux_ecologiques_4.png" /> enjeux_ecologiques'
            });
var format_zonageassainissementcollectif_5 = new ol.format.GeoJSON();
var features_zonageassainissementcollectif_5 = format_zonageassainissementcollectif_5.readFeatures(json_zonageassainissementcollectif_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_zonageassainissementcollectif_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonageassainissementcollectif_5.addFeatures(features_zonageassainissementcollectif_5);
var lyr_zonageassainissementcollectif_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonageassainissementcollectif_5, 
                style: style_zonageassainissementcollectif_5,
                popuplayertitle: 'zonage assainissement collectif',
                interactive: false,
                title: '<img src="styles/legend/zonageassainissementcollectif_5.png" /> zonage assainissement collectif'
            });
var format_risque_feu_de_foret_6 = new ol.format.GeoJSON();
var features_risque_feu_de_foret_6 = format_risque_feu_de_foret_6.readFeatures(json_risque_feu_de_foret_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_risque_feu_de_foret_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_risque_feu_de_foret_6.addFeatures(features_risque_feu_de_foret_6);
var lyr_risque_feu_de_foret_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_risque_feu_de_foret_6, 
                style: style_risque_feu_de_foret_6,
                popuplayertitle: 'risque_feu_de_foret',
                interactive: false,
                title: '<img src="styles/legend/risque_feu_de_foret_6.png" /> risque_feu_de_foret'
            });
var format_temps_de_marche_7 = new ol.format.GeoJSON();
var features_temps_de_marche_7 = format_temps_de_marche_7.readFeatures(json_temps_de_marche_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_temps_de_marche_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temps_de_marche_7.addFeatures(features_temps_de_marche_7);
var lyr_temps_de_marche_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temps_de_marche_7, 
                style: style_temps_de_marche_7,
                popuplayertitle: 'temps_de_marche',
                interactive: false,
    title: 'temps_de_marche<br />\
    <img src="styles/legend/temps_de_marche_7_0.png" /> 5 min<br />\
    <img src="styles/legend/temps_de_marche_7_1.png" /> 10 min<br />' });
var format_commercesetservices_8 = new ol.format.GeoJSON();
var features_commercesetservices_8 = format_commercesetservices_8.readFeatures(json_commercesetservices_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_commercesetservices_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_commercesetservices_8.addFeatures(features_commercesetservices_8);
var lyr_commercesetservices_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_commercesetservices_8, 
                style: style_commercesetservices_8,
                popuplayertitle: 'commerces et services',
                interactive: false,
                title: '<img src="styles/legend/commercesetservices_8.png" /> commerces et services'
            });
var format_Aidesladcision_9 = new ol.format.GeoJSON();
var features_Aidesladcision_9 = format_Aidesladcision_9.readFeatures(json_Aidesladcision_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Aidesladcision_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aidesladcision_9.addFeatures(features_Aidesladcision_9);
var lyr_Aidesladcision_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aidesladcision_9, 
                style: style_Aidesladcision_9,
                popuplayertitle: 'Aides à la décision',
                interactive: false,
    title: 'Aides à la décision<br />\
    <img src="styles/legend/Aidesladcision_9_0.png" /> espace boisé<br />\
    <img src="styles/legend/Aidesladcision_9_1.png" /> loin des services (à pieds)<br />\
    <img src="styles/legend/Aidesladcision_9_2.png" /> pas d\'assainissement collectif<br />\
    <img src="styles/legend/Aidesladcision_9_3.png" /> pas d\'accès<br />\
    <img src="styles/legend/Aidesladcision_9_4.png" /> proche de la voie ferrée<br />\
    <img src="styles/legend/Aidesladcision_9_5.png" /> risque feu de forêt<br />\
    <img src="styles/legend/Aidesladcision_9_6.png" /> lisière agricole<br />' });
var format_Potentieldedensification_10 = new ol.format.GeoJSON();
var features_Potentieldedensification_10 = format_Potentieldedensification_10.readFeatures(json_Potentieldedensification_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Potentieldedensification_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potentieldedensification_10.addFeatures(features_Potentieldedensification_10);
var lyr_Potentieldedensification_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potentieldedensification_10, 
                style: style_Potentieldedensification_10,
                popuplayertitle: 'Potentiel de densification',
                interactive: true,
    title: 'Potentiel de densification<br />\
    <img src="styles/legend/Potentieldedensification_10_0.png" /> a maintenir (respect des critères)<br />\
    <img src="styles/legend/Potentieldedensification_10_1.png" /> a supprimer (irrespect des critères)<br />\
    <img src="styles/legend/Potentieldedensification_10_2.png" /> a questionner<br />' });
var format_Enveloppeurbaine_11 = new ol.format.GeoJSON();
var features_Enveloppeurbaine_11 = format_Enveloppeurbaine_11.readFeatures(json_Enveloppeurbaine_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Enveloppeurbaine_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enveloppeurbaine_11.addFeatures(features_Enveloppeurbaine_11);
var lyr_Enveloppeurbaine_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Enveloppeurbaine_11, 
                style: style_Enveloppeurbaine_11,
                popuplayertitle: 'Enveloppe urbaine',
                interactive: false,
                title: '<img src="styles/legend/Enveloppeurbaine_11.png" /> Enveloppe urbaine'
            });
var group_Critresdeselection = new ol.layer.Group({
                                layers: [lyr_enjeux_patrimoniaux_2,lyr_emplacements_reserves_3,lyr_enjeux_ecologiques_4,lyr_zonageassainissementcollectif_5,lyr_risque_feu_de_foret_6,lyr_temps_de_marche_7,lyr_commercesetservices_8,],
                                fold: 'open',
                                title: 'Critères de selection'});
var group_Fondsdecarte = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'open',
                                title: 'Fonds de carte'});

lyr_GoogleSatellite_0.setVisible(true);lyr_parcelles_1.setVisible(true);lyr_enjeux_patrimoniaux_2.setVisible(true);lyr_emplacements_reserves_3.setVisible(true);lyr_enjeux_ecologiques_4.setVisible(true);lyr_zonageassainissementcollectif_5.setVisible(true);lyr_risque_feu_de_foret_6.setVisible(true);lyr_temps_de_marche_7.setVisible(true);lyr_commercesetservices_8.setVisible(true);lyr_Aidesladcision_9.setVisible(true);lyr_Potentieldedensification_10.setVisible(true);lyr_Enveloppeurbaine_11.setVisible(true);
var layersList = [group_Fondsdecarte,lyr_parcelles_1,group_Critresdeselection,lyr_Aidesladcision_9,lyr_Potentieldedensification_10,lyr_Enveloppeurbaine_11];
lyr_parcelles_1.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', });
lyr_enjeux_patrimoniaux_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_emplacements_reserves_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_enjeux_ecologiques_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_zonageassainissementcollectif_5.set('fieldAliases', {'insee': 'insee', 'z_lib2': 'z_lib2', 'z_stype': 'z_stype', 'datvalid': 'datvalid', 'z_dat_mj': 'z_dat_mj', 'z_srf_ha': 'z_srf_ha', 'gid': 'gid', });
lyr_risque_feu_de_foret_6.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'surf_ha': 'surf_ha', 'alea': 'alea', 'a_t_faib': 'a_t_faib', 'a_t_moy': 'a_t_moy', 'a_t_fort': 'a_t_fort', 'a_t_tfort': 'a_t_tfort', 'enjeu': 'enjeu', 'e_tf': 'e_tf', 'e_tfm': 'e_tfm', 'def': 'def', 'd_tf': 'd_tf', 'd_tfm': 'd_tfm', 'def_ccr': 'def_ccr', 'd_tf_ccr': 'd_tf_ccr', 'd_tfm_ccr': 'd_tfm_ccr', 'risque': 'risque', 'r_t_faib': 'r_t_faib', 'r_t_moy': 'r_t_moy', 'r_t_fort': 'r_t_fort', 'r_t_tfort': 'r_t_tfort', 'risque_ccr': 'risque_ccr', 'r_t_faib_c': 'r_t_faib_c', 'r_t_mo_ccr': 'r_t_mo_ccr', 'r_t_fort_c': 'r_t_fort_c', 'r_t_tfort_': 'r_t_tfort_', });
lyr_temps_de_marche_7.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_commercesetservices_8.set('fieldAliases', {'osm_id': 'osm_id', 'type': 'type', 'name': 'name', 'brand': 'brand', 'operator': 'operator', 'wheelchair': 'wheelchair', 'opening_ho': 'opening_ho', 'level': 'level', 'siret': 'siret', 'profession': 'profession', 'wikidata': 'wikidata', 'website': 'website', 'phone': 'phone', 'email': 'email', 'facebook': 'facebook', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', 'last_updat': 'last_updat', 'region': 'region', 'code_regio': 'code_regio', 'departemen': 'departemen', 'code_depar': 'code_depar', 'commune': 'commune', 'code_commu': 'code_commu', 'opening__1': 'opening__1', 'professi_1': 'professi_1', 'last_upd_1': 'last_upd_1', 'code_reg_1': 'code_reg_1', 'departem_1': 'departem_1', 'code_dep_1': 'code_dep_1', 'code_com_1': 'code_com_1', 'layer': 'layer', 'path': 'path', });
lyr_Aidesladcision_9.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'Superficie': 'Superficie', 'Densité': 'Densité', 'Superficie_1': 'Superficie_1', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_Potentieldedensification_10.set('fieldAliases', {'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'Superficie m2': 'Superficie m2', 'Densité': 'Densité', 'Superficie ha': 'Superficie ha', 'Commune': 'Commune', 'Logements': 'Logements', 'Etat': 'Etat', 'Note': 'Note', 'Parcelle': 'Parcelle', });
lyr_Enveloppeurbaine_11.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', 'Densité': 'Densité', });
lyr_parcelles_1.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', });
lyr_enjeux_patrimoniaux_2.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_emplacements_reserves_3.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_enjeux_ecologiques_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_zonageassainissementcollectif_5.set('fieldImages', {'insee': 'TextEdit', 'z_lib2': 'TextEdit', 'z_stype': 'TextEdit', 'datvalid': 'TextEdit', 'z_dat_mj': 'TextEdit', 'z_srf_ha': 'TextEdit', 'gid': 'Range', });
lyr_risque_feu_de_foret_6.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'surf_ha': 'TextEdit', 'alea': 'Range', 'a_t_faib': 'TextEdit', 'a_t_moy': 'TextEdit', 'a_t_fort': 'TextEdit', 'a_t_tfort': 'TextEdit', 'enjeu': 'Range', 'e_tf': 'TextEdit', 'e_tfm': 'TextEdit', 'def': 'Range', 'd_tf': 'TextEdit', 'd_tfm': 'TextEdit', 'def_ccr': 'Range', 'd_tf_ccr': 'TextEdit', 'd_tfm_ccr': 'TextEdit', 'risque': 'Range', 'r_t_faib': 'TextEdit', 'r_t_moy': 'TextEdit', 'r_t_fort': 'TextEdit', 'r_t_tfort': 'TextEdit', 'risque_ccr': 'Range', 'r_t_faib_c': 'TextEdit', 'r_t_mo_ccr': 'TextEdit', 'r_t_fort_c': 'TextEdit', 'r_t_tfort_': 'TextEdit', });
lyr_temps_de_marche_7.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_commercesetservices_8.set('fieldImages', {'osm_id': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'brand': 'TextEdit', 'operator': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_ho': 'TextEdit', 'level': 'TextEdit', 'siret': 'TextEdit', 'profession': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'email': 'TextEdit', 'facebook': 'TextEdit', 'address': 'TextEdit', 'com_insee': 'TextEdit', 'com_nom': 'TextEdit', 'last_updat': 'TextEdit', 'region': 'TextEdit', 'code_regio': 'TextEdit', 'departemen': 'TextEdit', 'code_depar': 'TextEdit', 'commune': 'TextEdit', 'code_commu': 'TextEdit', 'opening__1': 'TextEdit', 'professi_1': 'TextEdit', 'last_upd_1': 'TextEdit', 'code_reg_1': 'TextEdit', 'departem_1': 'TextEdit', 'code_dep_1': 'TextEdit', 'code_com_1': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Aidesladcision_9.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'Superficie': 'TextEdit', 'Densité': 'TextEdit', 'Superficie_1': '', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_Potentieldedensification_10.set('fieldImages', {'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'Superficie m2': 'TextEdit', 'Densité': 'TextEdit', 'Superficie ha': 'TextEdit', 'Commune': 'TextEdit', 'Logements': 'TextEdit', 'Etat': 'TextEdit', 'Note': 'TextEdit', 'Parcelle': 'TextEdit', });
lyr_Enveloppeurbaine_11.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', 'Densité': '', });
lyr_parcelles_1.set('fieldLabels', {'id': 'no label', 'commune': 'no label', 'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'contenance': 'no label', 'created': 'no label', 'updated': 'no label', });
lyr_enjeux_patrimoniaux_2.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_emplacements_reserves_3.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_enjeux_ecologiques_4.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_zonageassainissementcollectif_5.set('fieldLabels', {'insee': 'no label', 'z_lib2': 'no label', 'z_stype': 'no label', 'datvalid': 'no label', 'z_dat_mj': 'no label', 'z_srf_ha': 'no label', 'gid': 'no label', });
lyr_risque_feu_de_foret_6.set('fieldLabels', {'fid': 'no label', 'nom': 'no label', 'surf_ha': 'no label', 'alea': 'no label', 'a_t_faib': 'no label', 'a_t_moy': 'no label', 'a_t_fort': 'no label', 'a_t_tfort': 'no label', 'enjeu': 'no label', 'e_tf': 'no label', 'e_tfm': 'no label', 'def': 'no label', 'd_tf': 'no label', 'd_tfm': 'no label', 'def_ccr': 'no label', 'd_tf_ccr': 'no label', 'd_tfm_ccr': 'no label', 'risque': 'no label', 'r_t_faib': 'no label', 'r_t_moy': 'no label', 'r_t_fort': 'no label', 'r_t_tfort': 'no label', 'risque_ccr': 'no label', 'r_t_faib_c': 'no label', 'r_t_mo_ccr': 'no label', 'r_t_fort_c': 'no label', 'r_t_tfort_': 'no label', });
lyr_temps_de_marche_7.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_commercesetservices_8.set('fieldLabels', {'osm_id': 'no label', 'type': 'no label', 'name': 'no label', 'brand': 'no label', 'operator': 'no label', 'wheelchair': 'no label', 'opening_ho': 'no label', 'level': 'no label', 'siret': 'no label', 'profession': 'no label', 'wikidata': 'no label', 'website': 'no label', 'phone': 'no label', 'email': 'no label', 'facebook': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', 'last_updat': 'no label', 'region': 'no label', 'code_regio': 'no label', 'departemen': 'no label', 'code_depar': 'no label', 'commune': 'no label', 'code_commu': 'no label', 'opening__1': 'no label', 'professi_1': 'no label', 'last_upd_1': 'no label', 'code_reg_1': 'no label', 'departem_1': 'no label', 'code_dep_1': 'no label', 'code_com_1': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Aidesladcision_9.set('fieldLabels', {'prefixe': 'no label', 'section': 'no label', 'numero': 'no label', 'Superficie': 'inline label - visible with data', 'Densité': 'inline label - visible with data', 'Superficie_1': 'no label', 'Commune': 'header label - visible with data', 'Logements': 'inline label - visible with data', 'Etat': 'inline label - visible with data', 'Note': 'inline label - visible with data', 'Parcelle': 'header label - visible with data', });
lyr_Potentieldedensification_10.set('fieldLabels', {'prefixe': 'hidden field', 'section': 'hidden field', 'numero': 'hidden field', 'Superficie m2': 'header label - always visible', 'Densité': 'header label - always visible', 'Superficie ha': 'header label - always visible', 'Commune': 'hidden field', 'Logements': 'header label - always visible', 'Etat': 'header label - always visible', 'Note': 'header label - visible with data', 'Parcelle': 'header label - always visible', });
lyr_Enveloppeurbaine_11.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', 'Densité': 'no label', });
lyr_Enveloppeurbaine_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});