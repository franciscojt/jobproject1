window.onload = function() {
                var data = document.getElementById('data');
				console.log(data)
            };



function call(arr) {
	var data = document.getElementById('data');
	for(var i = 0; i < arr.length; i++){
		var tr = document.createElement("tr")
		var td1 = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td");
		var fname = document.createTextNode(arr[i].first_name);
		var lname = document.createTextNode(arr[i].last_name);
		var home = document.createTextNode(arr[i].home);
		
		tr.appendChild(td1);
		td1.appendChild(fname);
		tr.appendChild(td2);
		td2.appendChild(lname);
		tr.appendChild(td3);
		td3.appendChild(home);
		data.appendChild(tr);

	}

}
var table_data = [{
	first_name: 'Rose',
	last_name: 'Tyler',
	home: 'Earth'},
	{
	first_name: 'Zoe',
	last_name: 'Heriot',
	home: 'Space Station W3'},
	{
	first_name: 'Joe',
	last_name: 'Grant',
	home: 'Earth'},
	{
	first_name: 'Leela',
	last_name: null,
	home: 'Unspecified'},
	{
	first_name: 'Romana',
	last_name: null,
	home: 'Gallifrey'},
	{
	first_name: 'Clara',
	last_name: 'Oswald',
	home: 'Earth'},
	{
	first_name: 'Adric',
	last_name: null,
	home: 'Alzarius'},
	{
	first_name: 'Susan',
	last_name: 'Foreman',
	home: 'Gallifrey'}
];
window.onload = function(){
	call(table_data);
}
