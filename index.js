import { Observable } from "rxjs";

function obsDemo() {
	return new Observable((obs) => {
		obs.next(10);
	});
	//return new Promise((resolve, reject) => {});
}
obsDemo().subscribe((r) => {
	console.log(r);
});
