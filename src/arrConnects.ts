export function arrConnects(arrArr:any[][]=[]){
	let out:any[]=[];
	for(let a=0;a<arrArr.length;a++){
		for(let b=0;b<arrArr[a].length;b++){
			out[out.length]=arrArr[a][b];
		}
	}
	return out;
}
