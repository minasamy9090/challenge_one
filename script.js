var defaultVal = "null";
var defaultCountry = "all"
function createTable(username,country) {
	//<-- Table Creation Start -->
	let table = document.createElement("table");
	table.setAttribute("id", "table")
	let thead = document.createElement("thead");
	let tbody = document.createElement("tbody");
	table.append(thead);
	table.append(tbody);
	//<-- Table Creation Ends -->

	// <-- Headers Start -->
	let firstRow = document.createElement('tr');
	let unameHeader = document.createElement('th');
	let memSinceHeader = document.createElement('th');
	let zCodeHeader = document.createElement('th');
	let countryHeader = document.createElement('th');
	unameHeader.innerHTML = "UserName";
	memSinceHeader.innerHTML = "Member Since";
	zCodeHeader.innerHTML = "Zip Code";
	countryHeader.innerHTML = "Country";
	firstRow.appendChild(unameHeader); firstRow.appendChild(memSinceHeader); firstRow.appendChild(zCodeHeader); firstRow.appendChild(countryHeader);
	thead.append(firstRow);
	// <-- Headers End -->

	// <-- Table Content Starts -->
	for (let i = 0; i < data.length; i++) {
		let rows = document.createElement('tr');
		let rowUserName = document.createElement('td');
		rowUserName.innerHTML = data[i].username;
		let rowMemberSince = document.createElement('td');
		rowMemberSince.innerHTML = data[i].memberSince;
		let rowZipCode = document.createElement('td');
		rowZipCode.innerHTML = data[i].zipCode;
		let rowCountry = document.createElement('td');
		rowCountry.innerHTML = data[i].country;
		if ((data[i].username.toLowerCase() == username.toLowerCase() && (data[i].country.toLowerCase() == country.toLowerCase() || country.toLowerCase() == "all")) || (username == "null")) {
			rows.appendChild(rowUserName); rows.appendChild(rowMemberSince); rows.appendChild(rowZipCode); rows.appendChild(rowCountry);
			tbody.append(rows);
		}
	}
	// <-- Table Content Ends -->
	document.getElementById("body").append(table);
}
//<-- Data Start -->
var data = [{
	"username": "Amena",
	"memberSince": "Aug 23, 2021",
	"zipCode": "6772-1258",
	"country": "Colombia"
},
{
	"username": "Chloe",
	"memberSince": "May 24, 2022",
	"zipCode": "21207",
	"country": "Canada"
},
{
	"username": "Lenore",
	"memberSince": "May 31, 2021",
	"zipCode": "427453",
	"country": "Peru"
},
{
	"username": "Natalie",
	"memberSince": "May 24, 2022",
	"zipCode": "1856-5702",
	"country": "Germany"
},
{
	"username": "Meghan",
	"memberSince": "Jan 10, 2023",
	"zipCode": "90542",
	"country": "Indonesia"
},
{
	"username": "Gemma",
	"memberSince": "Sep 30, 2022",
	"zipCode": "777087",
	"country": "Australia"
},
{
	"username": "Reese",
	"memberSince": "Aug 24, 2021",
	"zipCode": "377220",
	"country": "Italy"
},
{
	"username": "Aaron",
	"memberSince": "Dec 9, 2021",
	"zipCode": "3395",
	"country": "Mexico"
},
{
	"username": "Alec",
	"memberSince": "Mar 16, 2023",
	"zipCode": "373241",
	"country": "Australia"
}]
//<-- Data Ends -->

createTable(defaultVal,defaultCountry);

document.getElementById('submit').disabled = true;
document.getElementById("inputCountry").defaultValue = "All"
document.getElementById('inputUserName').addEventListener('keyup', e => {
	//Check for the input's value
	if (e.target.value == "") {
		document.getElementById('submit').disabled = true;
	}
	else {
		document.getElementById('submit').disabled = false;
	}

});
document.getElementById('submit').onclick = function () {
	table.remove();
	createTable(document.getElementById("inputUserName").value , document.getElementById("inputCountry").value);
}


