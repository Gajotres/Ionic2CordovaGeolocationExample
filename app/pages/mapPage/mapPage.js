import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/mapPage/mapPage.html',
})

export class MapPage {
	
	constructor(platform: Platform) {
		this.platform = platform;

		this.initializeMap();    
	}

	initializeMap() {

		this.platform.ready().then(() => {

			let locationOptions = {timeout: 20000, enableHighAccuracy: true};

			navigator.geolocation.getCurrentPosition(

				(position) => {

					let options = {
					  center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
					  zoom: 16,
					  mapTypeId: google.maps.MapTypeId.ROADMAP
					}

					this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
				},

				(error) => {
					console.log(error);
				}, locationOptions

			);

		});
	}  
}
