import arrFind from "./testArrFind"
import arrFilter from "./testArrFilter"
import arrConnest from "./testArrConnect"
import arrRmEntry from "./testArrRmEntry"
import arrEntry from "./testArrEntry"
function wait(timems:number=3000):Promise<void>{
	return new Promise(function(resolve,reject){
		setTimeout(function(){
			resolve();
		},timems);
	});
}
(async function(){
	await wait(10);
	await arrFind();
	await wait(20);
	await arrFilter();
	await wait(20);
	await arrConnest();
	await wait(20);
	await arrRmEntry();
	await wait(20);
	await arrEntry();
})();
