import * as darkLib from "../index"
import timer from "./timer"
export default async function(){
	console.log("\n\n-------- arrRmEntry");
	let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	console.log(a.join(" "));
	new timer("arrRmEntry").end(darkLib.arrRmEntry(a,[2,4,6,8],[13]));
}
