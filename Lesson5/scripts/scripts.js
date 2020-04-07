new Vue({
	el: '#simpleApp',
	vuetify: new Vuetify(),
	data: {
	  showAlert: false
	  },
	  methods: {
		  loadApi: function () {
			  axios.get('https://jsonplaceholder.typicode.com/posts').
			  then(this.successCallback, this.errorCallback);
		  },
		  successCallback: function(response) {
			  console.log('successCallback response:' , response);
			  this.showAlert = true
		  },
		  errorCallback: function(response) {
			  console.log('errorCallback response:' , response);
		  }
	  }
  });