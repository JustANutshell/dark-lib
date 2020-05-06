import * as darkLib from "../index"
import timer from "./timer"
export default async function(){
	console.log("\n\n-------- arrEntry");
	//		 0,		   1,		 2,		   3,4,5,6,7,8,9,10,11,12,13,14,	   15,		 16,17,18,19,20,21,22,		 23,	   24
	let arr=[undefined,undefined,undefined,1,2,3,4,5,6,7, 8, 9,10,11,undefined,undefined,14,15,16,17,18,19,undefined,undefined,undefined];
	let x:timer;
	let y:timer=new timer("all arrEntry",2);
	x=new timer("firstEntry",2);		x.end(darkLib.arrEntryGetFirstEntry(arr));
	x=new timer("lastFirstMissEntry",2);x.end(darkLib.arrEntryGetLastFirstMissEntry(arr));
	x=new timer("firstMissEntry",2);	x.end(darkLib.arrEntryGetFirstMissEntry(arr));
	x=new timer("lastEntry",2);			x.end(darkLib.arrEntryGetLastEntry(arr));
	x=new timer("firstLastMissEntry",2);x.end(darkLib.arrEntryGetFirstLastMissEntry(arr));
	x=new timer("lastMissEntry",2);		x.end(darkLib.arrEntryGetLastMissEntry(arr));
	y.end(arr.join(','));
}
