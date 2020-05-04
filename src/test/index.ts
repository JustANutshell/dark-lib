import arrFind from "./testArrFind"
import arrFilter from "./testArrFilter"
import arrConnest from "./testArrConnect"
import arrRmEntry from "./testArrRmEntry"
function wait(timems:number=3000):Promise<void>{
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve();
		},timems);
	});
}
(async function(){
	wait(100);
	await arrFind();
	wait(200);
	await arrFilter();
	wait(200);
	await arrConnest();
	wait(200);
	await arrRmEntry();
})();
