import * as darkLib from "../index"
export default async function(){
	console.log("\n\n-------- arrRmEntry");
	let a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	let x=new Date();
	let b=darkLib.arrRmEntry(a,[2,4,6,8],[13]);
	let y=new Date();
	console.log("arrRmEntry took "+(y.getTime()-x.getTime())+"ms");
	console.log(a.join(" "));
	console.log(b.join(" "));
}
