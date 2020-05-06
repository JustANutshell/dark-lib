import * as darkLib from "../index"
export default class timer{
	start:Date;
	name:string;
	expectedTimeLength:number;
	constructor(name:string,expectedTimeLength:number=3){
		this.start=new Date();
		this.name=name;
		this.expectedTimeLength=expectedTimeLength;
	}
	end(out:any=""){
		let d=new Date();
		console.log(darkLib.strFill(this.name,20,true," ")+":"+darkLib.strFill(String(d.getTime()-this.start.getTime()),this.expectedTimeLength+1,false," ")+"ms",out);
	}
}
