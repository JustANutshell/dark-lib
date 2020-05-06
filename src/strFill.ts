export function strFill(str:string,lng:number,direction:boolean=true,char:string=" "):string{
	while(str.length<lng){
		if(direction){
			str=str+char;
		}else{
			str=char+str;
		}
	}
	return str;
}
