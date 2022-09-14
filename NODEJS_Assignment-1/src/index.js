const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent);
	console.log("Hurray! Your file got created")
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		const data = await fs.readFile(fileName, 'utf8');
		console.log(data);
	}
	catch (error) {
		console.log("Opps!, Can't find the file with the name " + fileName + ". Please check the filename in the code.");
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try { 
		await fs.appendFile(fileName, fileContent);
		console.log("Hurray! Your file got updated");
	}
	catch(error) {
		console.log("Oops!, Can't find the file with the name " + fileName + ". Please check the filename in the code.");
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		await fs.unlink(fileName);
		console.log("File has been deleted!");
	}
	catch (error) {
		console.log("Opps!, Can't find the file with the name " + fileName + ". Please check the filename in the code.");
	}
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

