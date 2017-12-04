		let inputs = process.argv.slice(2);
		let result = inputs.map(x => x[0]).reduce( (word, x) => word + x, '');
console.log(`[${inputs}] becomes "${result}"`);