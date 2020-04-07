new Vue(
{
	el: '#simpleApp',
	vuetify: new Vuetify(),
	data: {
		dataLoaded: 0,
		apiData: undefined
	},
	methods: {
		loadApi: function () {
			this.dataLoaded = 0;
			axios.get('https://jsonplaceholder.typicode.com/posts').
			then(this.successCallback, this.errorCallback);
		},
		successCallback: function(response) {
			this.dataLoaded = 1;
			console.log('successCallback response:' , response);
			this.apiData = response.data;
		},
		errorCallback: function(response) {
			this.dataLoaded = 2;
			console.log('errorCallback response:' , response);
		}
	}
}
);