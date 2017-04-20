//
debugger;
!function () {
	const fs = require('fs');
	const path = require('path');
	class Directory {
		constructor(params) {
			this.relativePath = params.relativePath;
			this.directoryPromise = params.directoryPromise;
			this.readDirectory();
		}
		
		readDirectory() {
			fs.readdir(this.relativePath, (error, files) => {
				debugger;
				if (error) {
					throw error;
				}
				this.readStat(files);
			});
		}
		
		readStat(files) {
			if (files.length === 0) {
				debugger;
				this.directoryPromise.resolve();
			}
			else if (files) {
				let file = files.pop();
				let filePath = path.join(this.relativePath, file);
				fs.stat(filePath, (error, stats) => {
					debugger;
					if (error) {
						throw error;
					}
					new Promise((resolve, reject) => {
						let args = {
							name: file,
							filePath: filePath,
							stats: stats,
							filePromise: {
								resolve: resolve,
								reject: reject
							}
						};
						this.checkStoringType(args);
					}).then(
						(value) => {
							debugger;
							this.readStat(files);
						}
					).catch(
						(reason) => {
							debugger;
						}
					);
				});
			}
			else {
				let error = `'files' is not a array.`;
				throw new Error(error);
			}
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
				args.filePromise = params.filePromise;
				new File(args);
			}
			else if (isDirectory) {
				args.directoryPromise = params.filePromise;
				new Directory(args);
			}
			else {
				let error = `${filePath} is not a file and is not a directory.`;
				throw new Error(error);
			}
		}
	}
	class File {
		constructor(params) {
			this.name = params.name;
			this.relativePath = params.relativePath;
			this.filePromise = params.filePromise;
			this.oldContent;
			this.newContent;
			this.readContent();
		}
		
		readContent() {
			fs.readFile(this.relativePath, (error, data) => {
				debugger;
				if (error) {
					throw error;
				}
				this.oldContent = data;
				this.replaceContent();
				this.writeContent();
			});
		}
		
		replaceContent() {
			debugger;
			if (false) {
				this.newContent;
			}
		}
		
		writeContent() {
			debugger;
			this.filePromise.resolve();
		}
	}
	class cssFile extends File {
	
	}
	
	class htmlFile extends File {
	
	}
	
	function main() {
		new Promise((resolve, reject) => {
			let args = {
				relativePath: './',
				directoryPromise: {
					resolve: resolve,
					reject: reject
				}
			};
			new Directory(args);
		}).then(
			(value) => {
				debugger;
			}
		).catch(
			(reason) => {
				debugger;
			}
		);
	}
	
	main();
}();