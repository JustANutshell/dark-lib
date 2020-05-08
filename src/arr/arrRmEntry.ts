export function arrRmEntry(arr:any[],entriesByValueToRm:any[]=[],entriesByIndexToRm:any[]=[]){
	let out:any[]=[];
	for(let a=0;a<arr.length;a++){
		let keep:boolean=true;
		for(let b=0;b<entriesByValueToRm.length&&keep;b++){
			if(entriesByValueToRm[b]===arr[a]) keep=false;
		}
		for(let b=0;b<entriesByIndexToRm.length&&keep;b++){
			if(entriesByIndexToRm[b]===a) keep=false;
		}
		if(keep){
			out[out.length]=arr[a];
		}
	}
	return out;
}
