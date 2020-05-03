import * as darkLib from "./index"
async function x(a:any){
	darkLib.arrFind(a,function(b){return b==4});
	darkLib.arrFind(a,function(b){return b==11});
	darkLib.arrFind(a,function(b){return b>2});
	await darkLib.arrFindAsync(a,function(b){return b==4});
	await darkLib.arrFindAsync(a,function(b){return b==11});
	await darkLib.arrFindAsync(a,function(b){return b>2});

	let b=new Date();
	darkLib.arrFind(a,function(b){return b==4});
	darkLib.arrFind(a,function(b){return b==11});
	darkLib.arrFind(a,function(b){return b>2});
	let c=new Date();
	await darkLib.arrFindAsync(a,function(b){return b==4});
	await darkLib.arrFindAsync(a,function(b){return b==11});
	await darkLib.arrFindAsync(a,function(b){return b>2});
	let d=new Date();
	console.log("normal:",(c.getTime()-b.getTime())+"ms");
	console.log("async: ",(d.getTime()-c.getTime())+"ms");
}
(async function(){
	try{
		let a=[];
		for(let c=0;c<10;c++){
			a[c]=c;
		}
		x(a);

		for(let c=10;c<10000;c++){
			a[c]=c;
		}
		x(a);
	}catch(e){console.error(e);}

})().catch(function(e){console.error(e);});