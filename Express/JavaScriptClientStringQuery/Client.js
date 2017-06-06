const URL = "http://localhost:1337/MESSAGE";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", URL, false ); // false for synchronous request
xmlHttp.send( null );
data= JSON.parse(xmlHttp.responseText);
console.log(data.message);
