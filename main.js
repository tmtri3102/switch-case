//  Bai 1

let browser2 = prompt("Enter browser name!");
switch (browser2) {
	case "Edge":
		alert("You've got the Edge!");
		break;
	case "Chrome":
	case "Firefox":
	case "Safari":
	case "Opera":
		alert("Okay we support these browsers too");
		break;
	default:
		alert("We hope that this page looks ok!");
}

// Bai 2
let a = +prompt("a?", "");
switch (a) {
	case 0:
		alert(0);
		break;
	case 1:
		alert(1);
		break;
	case 2:
	case 3:
		alert("2,3");
		break;
}

// Bai 3
let value = +prompt("Type a number", 0);
switch (value) {
	case 5:
		alert(1);
		break;
	case 0:
		alert(0);
		break;
	case -5:
		alert(-1);
		break;
}
// if (value > 0) {
// 	alert(1);
// } else if (value < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }
