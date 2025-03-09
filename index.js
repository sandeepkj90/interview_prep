let obj1 = { a: "x", b: "y", c: "z" };
let obj2 = { x: "ABC1", y: "BCD1", z: "DEF1" };

// Output: {a:'ABC1', b:'BCD1', c:'DEF1'}

function getObj(obj1, obj2) {
	let obj = {};
	for (let item in obj1) {
		obj[item] = obj2[obj1[item]];
	}
	console.log(obj);
}

getObj(obj1, obj2);

// obj[item], { a: "" };
