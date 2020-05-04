import * as darkLib from "../index"
export default async function(){
	console.log("\n\n-------- arrFind");
	async function x(a:any){
		darkLib.arrFind(a,function(b){return b==4});
		darkLib.arrFind(a,function(b){return b==11});
		darkLib.arrFind(a,function(b){return b>2});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==4});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==11});
		await darkLib.arrFindFuncAsync(a,async function(b){return b>2});
		await darkLib.arrFindAsync(a,function(b){return b==4});
		await darkLib.arrFindAsync(a,function(b){return b==11});
		await darkLib.arrFindAsync(a,function(b){return b>2});

		let b=new Date();
		darkLib.arrFind(a,function(b){return b==4});
		darkLib.arrFind(a,function(b){return b==11});
		darkLib.arrFind(a,function(b){return b>2});
		let c=new Date();
		await darkLib.arrFindFuncAsync(a,async function(b){return b==4});
		await darkLib.arrFindFuncAsync(a,async function(b){return b==11});
		await darkLib.arrFindFuncAsync(a,async function(b){return b>2});
		let d=new Date();
		await darkLib.arrFindAsync(a,function(b){return b==4});
		await darkLib.arrFindAsync(a,function(b){return b==11});
		await darkLib.arrFindAsync(a,function(b){return b>2});
		let e=new Date();
		console.log("normal: ",(c.getTime()-b.getTime())+"ms");
		console.log("fasync: ",(d.getTime()-c.getTime())+"ms");
		console.log("async:  ",(e.getTime()-d.getTime())+"ms");
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
