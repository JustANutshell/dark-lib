type arrFilterResponse={
	content:{value:any,index:number}[]
}
export function arrFilter(arr:any[],func:(arrEntry:any)=>boolean):arrFilterResponse{
	let out:arrFilterResponse={content:[]};
	for(let a=0;a<arr.length;a++){
		if(func(arr[a])) out.content[out.content.length]={value:arr[a],index:a};
	}
	return out;
}
export async function arrFilterFuncAsync(arr:any[],func:(arrEntry:any)=>Promise<boolean>):Promise<arrFilterResponse>{
	let out:arrFilterResponse={content:[]};
	for(let a=0;a<arr.length;a++){
		if(await func(arr[a])) out.content[out.content.length]={value:arr[a],index:a};
	}
	return out;
}
export function arrFilterAsync(arr:any[],func:(arrEntry:any)=>boolean|Promise<boolean>):Promise<arrFilterResponse>{
	return new Promise(function(resolve,reject){
		let b=[];
		for(let a=0;a<arr.length;a++){
			b[b.length]=new Promise(async function(resolve,reject){
				try{
					resolve({_:await func(arr[a]),value:arr[a],index:a});
				}catch(e){
					reject(e);
				}
			});
		}
		Promise.all(b).then(function(a:any[]){
			let out:arrFilterResponse={content:[]};
			for(let c=0;c<a.length;c++){
				if(a[c]._) out.content[out.content.length]={value:a[c].value,index:a[c].index};
			}
			resolve(out);
		}).catch(function(e){
			reject(e);
		});
	});
}
