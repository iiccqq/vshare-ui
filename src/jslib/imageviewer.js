var vm = new Vue({
	el: '#app',
	data: {
		itemDetail: {}
	},
	methods: {
	
	}
});

var itemid = getquerystring("itemid");
var url = webserver + "/api/items/" + itemid + "/detail";
mui.ajax({
	url: url,
	data: {},
	success: function(r) {
		vm.itemDetail = r;
	},
	dataType: 'json'
});