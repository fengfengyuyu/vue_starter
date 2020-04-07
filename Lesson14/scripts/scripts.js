new Vue(
{
	el: '#simpleApp',
	vuetify: new Vuetify(),
	data: {
		apiData: undefined,
		selectedCountry: undefined,
		showDetails: false,
		playerDialog: false,
		selectedPlayer: undefined
	},
	methods: {
		loadApi: function () {
			axios.get('https://raw.githubusercontent.com/fengfengyuyu/vuejsTest/master/db.json').
			then(this.successCallback, this.errorCallback);
		},
		successCallback: function(response) {
			this.apiData = response.data;
			console.log('successCallback this.apiData:' , this.apiData);
		},
		errorCallback: function(response) {
			console.log('errorCallback response:' , response);
		},
		selectionChanged: function() {
			console.log('selectionChanged:this.selectedCountry:' , this.selectedCountry);
		},
		toggleDetails: function() {
			this.showDetails = !this.showDetails;
		},
		openPlayerDialog: function(player) {
			console.log('openPlayerDialog player:' , player);
			this.selectedPlayer = player;
			this.playerDialog = true;
			drawChart();
		}

	}
}
);










































