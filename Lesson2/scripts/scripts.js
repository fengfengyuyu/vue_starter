new Vue(
{
	el: '#simpleApp',
	data: {
		someText: 'I need a beer'
	},
	computed: {
		putHello: function() {
			return this.someText == 'Hello';
		}
	}
}
);