import { Component } from '@angular/core';
import { GeoJsonObject } from 'geojson';
import { GeoJSONFeature, Map } from 'maplibre-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mapLoaded(map: Map) {
    console.log('map loaded', map);

    const line: GeoJSON.Feature = {
      type: 'Feature',
          properties: {},
          geometry: {
              type: 'LineString',
              coordinates: [
                  [7.40369693756104, 51.48381888486939],
                  [7.40348236083984, 51.48317489144141],
                  [7.40339653015138, 51.48270036637107],
                  [7.40356819152832, 51.482056363179625],
                  [7.40404026031496, 51.48114119107971],
                  [7.40404026031496, 51.48049717427869],
                  [7.40348236083984, 51.479920943955045],
                  [7.40356819152832, 51.47954808664175],
                  [7.40507022857666, 51.47944639795659],
                  [7.40610019683838, 51.47880236636284],
                  [7.40695850372314, 51.47931081282506],
                  [7.40700141906738, 51.48080223556934],
                  [7.40751640319824, 51.48168351665737],
                  [7.40803138732912, 51.482158048267786],
                  [7.40888969421387, 51.48297152392784],
                  [7.40987674713133, 51.48263257682617],
                  [7.41043464660643, 51.482937629287755],
                  [7.41125003814696, 51.482429207817725],
                  [7.41163627624512, 51.482564787218985],
                  [7.41223709106445, 51.48337825839438],
                  [7.41378204345702, 51.48368330777276]
              ]
          }
    };

    const geojson1: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [7.4128, 51.4875]
          },
          properties: {
            title: 'Test'
          }
        }
      ]
    }

    map.addSource('route', {
      type: 'geojson',
      data: line
    });

    map.addLayer({
      id: 'route',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#FF0000',
        'line-width': 8
      }
    });

    map.addSource('cluster', {
      type: 'geojson',
      data: geojson1,
      cluster: true
    });

    map.addLayer({
      id: '1',
      type: 'circle',
      source: 'cluster',
      paint: {
        'circle-color': '#FF0000'
      }
    })
  }
}
