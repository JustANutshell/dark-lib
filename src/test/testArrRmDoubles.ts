import * as darkLib from "../index"
import timer from "./timer"
export default async function(){
	console.log("\n\n-------- arrRmDoubles");
	let a=[1,2,3,2,Infinity,3,4,-4,1,5,6,7,8,9,10,11,12,13,14,1,2,5,7,-Math.PI,Infinity];
	console.log(a.join(" "));
	let x=new timer("arrRmDoubles");
	console.log(darkLib.arrRmDoubles(a).join(" "));
	x.end();
}
