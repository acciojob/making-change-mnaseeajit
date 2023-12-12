const makeChange = (c) => {
  // your name here
	let qV = parseInt(c/25) ;
	c = c - qV*25;
	let dV = parseInt(c/10) ;
	c = c-dV*10;
	let nV = parseInt(c/5) ;
	c = c-nV*5;
	let pV = parseInt(c/1) ;

	let user = {
		q : qV,
		d : dV,
		n : nV,
		p : pV
	}
	return user;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c))); 
