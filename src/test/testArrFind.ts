import * as darkLib from "../index"
import timer from "./timer"
export default async function(){
	console.log("\n\n-------- arrFind");
	async function x(a:any){
		console.log("testArr length:",a.length);
		let b:timer;
		darkLib.arrFind(a,function(b){return b==4});
		darkLib.arrFind(a,function(b){return b==11});
		darkLib.arrFind(a,function(b){return b>2});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==4});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==11});
		await darkLib.arrFindFuncAsync(a,async function(b){return b>2});
		await darkLib.arrFindAsync(a,function(b){return b==4});
		await darkLib.arrFindAsync(a,function(b){return b==11});
		await darkLib.arrFindAsync(a,function(b){return b>2});

		b=new timer("arrFind");
		darkLib.arrFind(a,function(b){return b==4});
		darkLib.arrFind(a,function(b){return b==11});
		darkLib.arrFind(a,function(b){return b>2});
		b.end();
		b=new timer("arrFindFuncAsync");
		await darkLib.arrFindFuncAsync(a,async function(b){return b==4});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==11});
		await darkLib.arrFindFuncAsync(a,async function(b){return b>2});
		b.end();
		b=new timer("arrFindAsync");
		await darkLib.arrFindAsync(a,function(b){return b==4});
		await darkLib.arrFindAsync(a,function(b){return b==11});
		await darkLib.arrFindAsync(a,function(b){return b>2});
		b.end();
	}
			let a=[];
			for(let c=0;c<10;c++){
				a[c]=c;
			}
			console.log(darkLib.arrFind(a,function(b){return b==4}));
			console.log(darkLib.arrFind(a,function(b){return b==11}));
			console.log(darkLib.arrFind(a,function(b){return b>2}));
			console.log(await darkLib.arrFindFuncAsync(a,async function(b){return b==4}));
			console.log(await darkLib.arrFindFuncAsync(a,async function(b){return b==11}));
			console.log(await darkLib.arrFindFuncAsync(a,async function(b){return b>2}));
			console.log(await darkLib.arrFindAsync(a,function(b){return b==4}));
			console.log(await darkLib.arrFindAsync(a,function(b){return b==11}));
			console.log(await darkLib.arrFindAsync(a,function(b){return b>2}));
			await x(a);

			for(let c=10;c<10000;c++){
				a[c]=c;
			}
			await x(a);
}
