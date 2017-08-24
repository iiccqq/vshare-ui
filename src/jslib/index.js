var vm = new Vue({
	el: '#app',
	data: {
		items: []
	},
	methods: {
		getDetailUrl: function(item) {
		 var url = "imageviewer.html?itemid=" + item.id;
		 window.location.href=url;
		}
	}
});

var url = webserver + "/api/items";
mui.ajax({
	url: url,
	data: {
	},
	success: function(r) {
		vm.items = r;
	},
	dataType: 'json'
});