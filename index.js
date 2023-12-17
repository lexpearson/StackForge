function Application() {
	this.firstName = 'Lex';
	this.lastName = 'Pearson';
	this.fullName = `${this.firstName} ${this.lastName}`;
	this.currentAge = 15;
	
	this.printInfo = function () {
		console.log(this.fullName, this.currentAge);
	};
}

const app = new Application();
app.printInfo();
