function defaultCompareFunc(entry1:any,entry2:any):boolean{
	return entry1===entry2;
}
export function arrRmDoubles(arr:any,compareFunc:(entry1:any,entry2:any)=>boolean=defaultCompareFunc){
	let newArr:any[]=[];
	for(let a=0;a<arr.length;a++){
		let foundDouble=false;
		for(let b=0;b<newArr.length;b++){
			if(compareFunc(arr[a],newArr[b])) foundDouble=true;
		}
		if(!foundDouble) newArr[newArr.length]=arr[a];
	}
	return newArr;
}