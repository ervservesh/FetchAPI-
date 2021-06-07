// JavaScript Document
//////////// Basics of Vue App
//var dataURL = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";
var x = new Vue({
	el:"#root",
	data:{
		
		userData:[],
		msg: 'Hi this is my first API Fetch program',
		
	},
	mounted() {
		//var self = this;
		axios.get('https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true')
		.then(response => {
			// handle success
			this.userData = response.data;
			console.log(response);
		})
		.catch(error => {
			// handle error
			console.log(error);
		})
	}
	
})