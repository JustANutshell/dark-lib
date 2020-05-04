type arrFindResponse={
	foundAnything:true,
	value:any,
	index:number,
}|{
	foundAnything:false,
}
export function arrFind(arr:any[],func:(arrEntry:any)=>boolean):arrFindResponse{
	for(let a=0;a<arr.length;a++){
		if(func(arr[a])) return {foundAnything:true,value:arr[a],index:a};
	}
	return {foundAnything:false};
}
export async function arrFindFuncAsync(arr:any[],func:(arrEntry:any)=>Promise<boolean>):Promise<arrFindResponse>{
	for(let a=0;a<arr.length;a++){
		if(await func(arr[a])) return {foundAnything:true,value:arr[a],index:a};
	}
	return {foundAnything:false};
}
export function arrFindAsync(arr:any[],func:(arrEntry:any)=>boolean|Promise<boolean>):Promise<arrFindResponse>{
	return new Promise(function(resolve,reject){
		let b=[];
		for(let a=0;a<arr.length;a++){
			b[b.length]=new Promise(async function(resolve,reject){
				try{
					resolve({_:await func(arr[a]),value:arr[a],index:a});
				}catch(e){
					reject(e);
				}
			}).then(function(a:any){
				if(a._)resolve({foundAnything:true,value:a.value,index:a.index});
			}).catch(function(e){
				reject(e);
			});
		}
		Promise.all(b).then(function(a:any){
			resolve({foundAnything:false});
		}).catch(function(e){
			reject(e);
		});
	});
}
