function addTokens(input, tokens){
    
	if(typeof input !== 'string'){
		throw new Error('Invalid input');
	}
	if(input.length<6){
		throw new Error('Input should have at least 6 characters');
	}
	for(let i in tokens){ 
	if(typeof tokens[i].tokenName !== 'string'){
		throw new Error('Invalid array format');
	}}
	if(input.search(/[...]/)==-1){
		return input;
	}
	for(let i in tokens){ 
	input = input.replace('...', "${" + tokens[i].tokenName + "}");
	}
	return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;
