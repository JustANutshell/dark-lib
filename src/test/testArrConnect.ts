import * as darkLib from "../index"
import timer from "./timer"
export default async function(){
	console.log("\n\n-------- arrConnect");
	let a=[1,2,3,4,5,6,7,8,9];
	let b=[10,11,12,13,14];
	console.log(a,b);
	new timer("arrConnect").end(darkLib.arrConnects([a,b]));
}
