type arrEntryResponse={
	existing:true,
	value:any,
	index:number,
}|{
	existing:false,
}
enum arrEntryTypePickType{
	first,
	lastWhenTrue,
	last,
}

function defaultEntryDetectFunction(entry:any):boolean{
	return entry!==undefined&&entry!==null;
}
function defaultMissEntryDetectFunction(entry:any):boolean{
	return entry===undefined||entry===null;
}

export function arrEntry(arr:any[],pickType:arrEntryTypePickType,fromBeginning:boolean,func:(entry:any)=>boolean):arrEntryResponse{
	// first: true: first | false: last
	let a=fromBeginning?0:arr.length-1;
	let cached:arrEntryResponse={existing:false};
	while((function(){
		if(fromBeginning){
			return a<arr.length;
		}else{
			return a>=0;
		}
	})()){
		if(func(arr[a])){
			let b={existing:true,value:arr[a],index:a};
			switch(pickType){
				case arrEntryTypePickType.first:
					return b;
					break;
				case arrEntryTypePickType.lastWhenTrue:
					cached=b;
					break;
				case arrEntryTypePickType.last:
					cached=b;
					break;
			}
		}else if(pickType===arrEntryTypePickType.lastWhenTrue){
			return cached;
		}
		if(fromBeginning){
			a++;
		}else{
			a--;
		}
	}
	return cached;
}
/*
	 - : miss entry
	 X : Entry
	(?): Selected
*/
export function arrEntryGetFirstEntry(arr:any[],func:(entry:any)=>boolean=defaultEntryDetectFunction):arrEntryResponse{
	// ---(X)XX---XXX---
	return arrEntry(arr,arrEntryTypePickType.first,true,func);
}
export function arrEntryGetLastFirstMissEntry(arr:any[],func:(entry:any)=>boolean=defaultMissEntryDetectFunction):arrEntryResponse{
	// --(-)XXX---XXX---
	return arrEntry(arr,arrEntryTypePickType.lastWhenTrue,true,func);
}
export function arrEntryGetFirstMissEntry(arr:any[],func:(entry:any)=>boolean=defaultMissEntryDetectFunction):arrEntryResponse{
	// (-)--XXX---XXX---
	return arrEntry(arr,arrEntryTypePickType.first,true,func);
}
export function arrEntryGetLastEntry(arr:any[],func:(entry:any)=>boolean=defaultEntryDetectFunction):arrEntryResponse{
	// ---XXX---XX(X)---
	return arrEntry(arr,arrEntryTypePickType.first,false,func);
}
export function arrEntryGetFirstLastMissEntry(arr:any[],func:(entry:any)=>boolean=defaultMissEntryDetectFunction):arrEntryResponse{
	// ---XXX---XXX(-)--
	return arrEntry(arr,arrEntryTypePickType.lastWhenTrue,false,func);
}
export function arrEntryGetLastMissEntry(arr:any[],func:(entry:any)=>boolean=defaultMissEntryDetectFunction):arrEntryResponse{
	// ---XXX---XXX--(-)
	return arrEntry(arr,arrEntryTypePickType.first,false,func);
}
