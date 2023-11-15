import { Component } from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mapLoaded(map: Map) {
    console.log('map loaded', map);
    const geojson1 = {
      id: '1',
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [51.4875, 7.4128]
      },
      properties: {
        title: 'Test'
      }
    }

    map.addSource('1', {
      type: 'geojson',
      data: geojson1,
      cluster: true
    });

    map.addLayer({
      id: '1',
      type: 'circle',
      source: '1'
    })
  }
}
