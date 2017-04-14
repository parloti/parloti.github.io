
debugger;
!function () {
	class Directory {
		constructor(params) {
			debugger;
			this.relativePath = params.relativePath;
			this.subDirectories = [];
			this.files = [];
			this.readDirectory();
		}
		
		readDirectory() {
			debugger;
			let fs = require('fs');
			let path = require('path');
			fs.readdir(this.relativePath, (error, files) => {
				debugger;
				if (error) {
					throw new Error(error);
				}
				this.readStat(files);
			});
		}
		
		readStat(files) {
			debugger;
			let fs = require('fs');
			let path = require('path');
			files.forEach((name) => {
				let filePath = path.join(this.relativePath, name);
				fs.stat(filePath, (error, stats) => {
					debugger;
					let args = {
						name: name,
						filePath: filePath,
						stats: stats
					}
					this.checkStoringType(args);
				});
			})
		}
		
		checkStoringType(params) {
			debugger;
			let isFile = params.stats.isFile();
			let isDirectory = params.stats.isDirectory();
			let args = {
				name: params.name,
				relativePath: params.filePath
			}
			if (isFile) {
				this.pushFile(args);
			}
			else if (isDirectory) {
				this.pushDirectory(args);
			}
			else {
				let error = `${filePath} is not a file and is not a directory.`;
				throw new Error(error);
			}
		}
		
		pushFile(params) {
			debugger;
			let args = params;
			let file = new File(args);
			this.files.push(file);
		}
		
		pushDirectory(params) {
			debugger;
			let args = params;
			let directory = new Directory(args);
			this.subDirectories.push(directory);
		}
	}
	class File {
		constructor(params) {
			debugger;
			this.name = params.name;
			this.relativePath = params.relativePath;
		}
	}
	class cssFile extends File {
	
	}
	
	class htmlFile extends File {
	
	}
	function main() {
		let args = {
			relativePath: './'
		};
		let Tree = new Directory(args);
		debugger;
	}
	
	main();
}();