new Vue(
{
	el: '#simpleApp',
	data: {
		someText: 'I need a beer',
		counter: 0
	},
	methods: {
		callonClick: function(event, someArg) {
			console.log('callonClick() was called, someArg:' , someArg);
			console.log('callonClick() was called, event:' , event);
			this.counter = this.counter + 1;
		}
	},
	computed: {
		putHello: function() {
			return this.someText == 'Hello';
		}
	}
}
);