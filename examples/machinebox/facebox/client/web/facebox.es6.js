// Code generated by Remoto; DO NOT EDIT.

// Remoto JavaScript Client
//
// uses the Fetch API: to support older browsers, use the polyfil https://github.github.io/fetch/

"use strict";

// _filesCount keeps track of the number of files being added, and is used
// to generate unique field names.
var _filesCount = 0


// FaceboxClientOptions are the options for the FaceboxClient.
export class FaceboxClientOptions {
	constructor(data = {}) {
		this._data = data
		this._data.endpoint = this._data.endpoint || "http://localhost:8080"
	}
	get endpoint() { return this._data.endpoint }
	set endpoint(endpoint) { this._data.endpoint = endpoint }
}

// Facebox provides facial detection and recognition in images.
export class FaceboxClient {
	constructor(options) {
		this.options = options
	}
	
	CheckFaceprint(checkFaceprintRequest = null) {
		return this.CheckFaceprintMulti([checkFaceprintRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// CheckFaceprintMulti is the batch version of CheckFaceprint.
	CheckFaceprintMulti(checkFaceprintRequests) {
		var data = new FormData()
		checkFaceprintRequests.forEach(function(request){
			if (request && !request instanceof CheckFaceprintRequest) {
				throw 'FaceboxClient.CheckFaceprint: requests must be instances of CheckFaceprintRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(checkFaceprintRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.CheckFaceprint', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new CheckFaceprintResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.CheckFaceprint: ' + error.message
		})
	}
	
	CheckFile(checkFileRequest = null) {
		return this.CheckFileMulti([checkFileRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// CheckFileMulti is the batch version of CheckFile.
	CheckFileMulti(checkFileRequests) {
		var data = new FormData()
		checkFileRequests.forEach(function(request){
			if (request && !request instanceof CheckFileRequest) {
				throw 'FaceboxClient.CheckFile: requests must be instances of CheckFileRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(checkFileRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.CheckFile', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new CheckFileResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.CheckFile: ' + error.message
		})
	}
	
	CheckURL(checkURLRequest = null) {
		return this.CheckURLMulti([checkURLRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// CheckURLMulti is the batch version of CheckURL.
	CheckURLMulti(checkURLRequests) {
		var data = new FormData()
		checkURLRequests.forEach(function(request){
			if (request && !request instanceof CheckURLRequest) {
				throw 'FaceboxClient.CheckURL: requests must be instances of CheckURLRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(checkURLRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.CheckURL', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new CheckURLResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.CheckURL: ' + error.message
		})
	}
	
	FaceprintCompare(faceprintCompareRequest = null) {
		return this.FaceprintCompareMulti([faceprintCompareRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// FaceprintCompareMulti is the batch version of FaceprintCompare.
	FaceprintCompareMulti(faceprintCompareRequests) {
		var data = new FormData()
		faceprintCompareRequests.forEach(function(request){
			if (request && !request instanceof FaceprintCompareRequest) {
				throw 'FaceboxClient.FaceprintCompare: requests must be instances of FaceprintCompareRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(faceprintCompareRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.FaceprintCompare', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new FaceprintCompareResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.FaceprintCompare: ' + error.message
		})
	}
	
	GetState(getStateRequest = null) {
		return this.GetStateMulti([getStateRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// GetStateMulti is the batch version of GetState.
	GetStateMulti(getStateRequests) {
		var data = new FormData()
		getStateRequests.forEach(function(request){
			if (request && !request instanceof GetStateRequest) {
				throw 'FaceboxClient.GetState: requests must be instances of GetStateRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(getStateRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.GetState', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new remototypes.FileResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.GetState: ' + error.message
		})
	}
	
	PutState(putStateRequest = null) {
		return this.PutStateMulti([putStateRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// PutStateMulti is the batch version of PutState.
	PutStateMulti(putStateRequests) {
		var data = new FormData()
		putStateRequests.forEach(function(request){
			if (request && !request instanceof PutStateRequest) {
				throw 'FaceboxClient.PutState: requests must be instances of PutStateRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(putStateRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.PutState', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new PutStateResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.PutState: ' + error.message
		})
	}
	
	RemoveID(removeIDRequest = null) {
		return this.RemoveIDMulti([removeIDRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// RemoveIDMulti is the batch version of RemoveID.
	RemoveIDMulti(removeIDRequests) {
		var data = new FormData()
		removeIDRequests.forEach(function(request){
			if (request && !request instanceof RemoveIDRequest) {
				throw 'FaceboxClient.RemoveID: requests must be instances of RemoveIDRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(removeIDRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.RemoveID', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new RemoveIDResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.RemoveID: ' + error.message
		})
	}
	
	Rename(renameRequest = null) {
		return this.RenameMulti([renameRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// RenameMulti is the batch version of Rename.
	RenameMulti(renameRequests) {
		var data = new FormData()
		renameRequests.forEach(function(request){
			if (request && !request instanceof RenameRequest) {
				throw 'FaceboxClient.Rename: requests must be instances of RenameRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(renameRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.Rename', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new RenameResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.Rename: ' + error.message
		})
	}
	
	RenameID(renameIDRequest = null) {
		return this.RenameIDMulti([renameIDRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// RenameIDMulti is the batch version of RenameID.
	RenameIDMulti(renameIDRequests) {
		var data = new FormData()
		renameIDRequests.forEach(function(request){
			if (request && !request instanceof RenameIDRequest) {
				throw 'FaceboxClient.RenameID: requests must be instances of RenameIDRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(renameIDRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.RenameID', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new RenameIDResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.RenameID: ' + error.message
		})
	}
	
	SimilarFile(similarFileRequest = null) {
		return this.SimilarFileMulti([similarFileRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// SimilarFileMulti is the batch version of SimilarFile.
	SimilarFileMulti(similarFileRequests) {
		var data = new FormData()
		similarFileRequests.forEach(function(request){
			if (request && !request instanceof SimilarFileRequest) {
				throw 'FaceboxClient.SimilarFile: requests must be instances of SimilarFileRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(similarFileRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.SimilarFile', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new SimilarFileResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.SimilarFile: ' + error.message
		})
	}
	
	SimilarID(similarIDRequest = null) {
		return this.SimilarIDMulti([similarIDRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// SimilarIDMulti is the batch version of SimilarID.
	SimilarIDMulti(similarIDRequests) {
		var data = new FormData()
		similarIDRequests.forEach(function(request){
			if (request && !request instanceof SimilarIDRequest) {
				throw 'FaceboxClient.SimilarID: requests must be instances of SimilarIDRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(similarIDRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.SimilarID', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new SimilarIDResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.SimilarID: ' + error.message
		})
	}
	
	SimilarURL(similarURLRequest = null) {
		return this.SimilarURLMulti([similarURLRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// SimilarURLMulti is the batch version of SimilarURL.
	SimilarURLMulti(similarURLRequests) {
		var data = new FormData()
		similarURLRequests.forEach(function(request){
			if (request && !request instanceof SimilarURLRequest) {
				throw 'FaceboxClient.SimilarURL: requests must be instances of SimilarURLRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(similarURLRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.SimilarURL', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new SimilarURLResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.SimilarURL: ' + error.message
		})
	}
	
	TeachFaceprint(teachFaceprintRequest = null) {
		return this.TeachFaceprintMulti([teachFaceprintRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// TeachFaceprintMulti is the batch version of TeachFaceprint.
	TeachFaceprintMulti(teachFaceprintRequests) {
		var data = new FormData()
		teachFaceprintRequests.forEach(function(request){
			if (request && !request instanceof TeachFaceprintRequest) {
				throw 'FaceboxClient.TeachFaceprint: requests must be instances of TeachFaceprintRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(teachFaceprintRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.TeachFaceprint', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new TeachFaceprintResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.TeachFaceprint: ' + error.message
		})
	}
	
	TeachFile(teachFileRequest = null) {
		return this.TeachFileMulti([teachFileRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// TeachFileMulti is the batch version of TeachFile.
	TeachFileMulti(teachFileRequests) {
		var data = new FormData()
		teachFileRequests.forEach(function(request){
			if (request && !request instanceof TeachFileRequest) {
				throw 'FaceboxClient.TeachFile: requests must be instances of TeachFileRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(teachFileRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.TeachFile', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new TeachFileResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.TeachFile: ' + error.message
		})
	}
	
	TeachURL(teachURLRequest = null) {
		return this.TeachURLMulti([teachURLRequest]).then(function(responses) {
			return responses[0]
		})
	}

	// TeachURLMulti is the batch version of TeachURL.
	TeachURLMulti(teachURLRequests) {
		var data = new FormData()
		teachURLRequests.forEach(function(request){
			if (request && !request instanceof TeachURLRequest) {
				throw 'FaceboxClient.TeachURL: requests must be instances of TeachURLRequest'
			}
			let allfiles = request.allFiles()
			allfiles.forEach(function(fieldname) {
				data.set(fieldname, allfiles[fieldname])
			})
		})
		data.set('json', JSON.stringify(teachURLRequests))
		return fetch(this.options.endpoint() + '/remoto/Facebox.TeachURL', {
			method: 'post', body: data,
			headers: {'Content-Type': 'multipart/form-data', 'Accept':'application/json'}
		}).then(function(responseData){ // success
			var responses = []
			responseData.json().forEach(function(response){
				responses.push(new TeachURLResponse(response))
			})
			return responses
		}, function(error){ // error
			throw 'FaceboxClient.TeachURL: ' + error.message
		})
	}
	
}


// CheckFaceprintRequest is the request object for CheckFaceprint calls.
export class CheckFaceprintRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faceprints() { return this._data.faceprints }
	
	set faceprints(faceprints) { this._data.faceprints = faceprints }
}

// CheckFaceprintResponse is the response object for CheckFaceprint calls.
export class CheckFaceprintResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// CheckFileRequest is the request object for CheckFile calls.
export class CheckFileRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get file() { return this._data.file }
	setFile(request, filename, file) { this._data.file = request.addFile(filename, file) }
	
}

// CheckFileResponse is the response object for CheckFile calls.
export class CheckFileResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// CheckURLRequest is the request object for CheckURL calls.
export class CheckURLRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get file() { return this._data.file }
	setFile(request, filename, file) { this._data.file = request.addFile(filename, file) }
	
}

// CheckURLResponse is the response object for CheckURL calls.
export class CheckURLResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// Face describes a face.
export class Face {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
	get matched() { return this._data.matched }
	
	set matched(matched) { this._data.matched = matched }
	get faceprint() { return this._data.faceprint }
	
	set faceprint(faceprint) { this._data.faceprint = faceprint }
	get rect() { return this._data.rect }
	
	set rect(rect) { this._data.rect = rect }
}

// FaceprintCompareRequest is the request object for FaceprintCompare calls.
export class FaceprintCompareRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get target() { return this._data.target }
	
	set target(target) { this._data.target = target }
	get faceprints() { return this._data.faceprints }
	
	set faceprints(faceprints) { this._data.faceprints = faceprints }
}

// FaceprintCompareResponse is the response object for FaceprintCompare calls.
export class FaceprintCompareResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get confidences() { return this._data.confidences }
	
	
	get error() { return this._data.error }
	
	
}

// FaceprintFace is a face.
export class FaceprintFace {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get matched() { return this._data.matched }
	
	set matched(matched) { this._data.matched = matched }
	get confidence() { return this._data.confidence }
	
	set confidence(confidence) { this._data.confidence = confidence }
	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
}

// GetStateRequest is the request object for GetState calls.
export class GetStateRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

}

// PutStateRequest is the request object for PutState calls.
export class PutStateRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get stateFile() { return this._data.state_file }
	setStateFile(request, filename, state_file) { this._data.state_file = request.addFile(filename, state_file) }
	
}

// PutStateResponse is the response object for PutState calls.
export class PutStateResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// Rect is a bounding box describing a rectangle of an image.
export class Rect {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get top() { return this._data.top }
	
	set top(top) { this._data.top = top }
	get left() { return this._data.left }
	
	set left(left) { this._data.left = left }
	get width() { return this._data.width }
	
	set width(width) { this._data.width = width }
	get height() { return this._data.height }
	
	set height(height) { this._data.height = height }
}

// RemoveIDRequest is the request object for RemoveID calls.
export class RemoveIDRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
}

// RemoveIDResponse is the response object for RemoveID calls.
export class RemoveIDResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// RenameIDRequest is the request object for RenameID calls.
export class RenameIDRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
}

// RenameIDResponse is the response object for RenameID calls.
export class RenameIDResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// RenameRequest is the request object for Rename calls.
export class RenameRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get from() { return this._data.from }
	
	set from(from) { this._data.from = from }
	get to() { return this._data.to }
	
	set to(to) { this._data.to = to }
}

// RenameResponse is the response object for Rename calls.
export class RenameResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// SimilarFace is a detected face with similar matching faces.
export class SimilarFace {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get rect() { return this._data.rect }
	
	set rect(rect) { this._data.rect = rect }
	get similarFaces() { return this._data.similar_faces }
	
	set similarFaces(similar_faces) { this._data.similar_faces = similar_faces }
}

// SimilarFileRequest is the request object for SimilarFile calls.
export class SimilarFileRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get file() { return this._data.file }
	setFile(request, filename, file) { this._data.file = request.addFile(filename, file) }
	
}

// SimilarFileResponse is the response object for SimilarFile calls.
export class SimilarFileResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// SimilarIDRequest is the request object for SimilarID calls.
export class SimilarIDRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
}

// SimilarIDResponse is the response object for SimilarID calls.
export class SimilarIDResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// SimilarURLRequest is the request object for SimilarURL calls.
export class SimilarURLRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get uRL() { return this._data.url }
	
	set uRL(url) { this._data.url = url }
}

// SimilarURLResponse is the response object for SimilarURL calls.
export class SimilarURLResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get faces() { return this._data.faces }
	
	
	get error() { return this._data.error }
	
	
}

// TeachFaceprintRequest is the request object for TeachFaceprint calls.
export class TeachFaceprintRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
	get faceprint() { return this._data.faceprint }
	
	set faceprint(faceprint) { this._data.faceprint = faceprint }
}

// TeachFaceprintResponse is the response object for TeachFaceprint calls.
export class TeachFaceprintResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// TeachFileRequest is the request object for TeachFile calls.
export class TeachFileRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
	get file() { return this._data.file }
	setFile(request, filename, file) { this._data.file = request.addFile(filename, file) }
	
}

// TeachFileResponse is the response object for TeachFile calls.
export class TeachFileResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

// TeachURLRequest is the request object for TeachURL calls.
export class TeachURLRequest {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// addFile adds a file to the request and returns its unique name.
	// This method is not usually called directly, instead callers should use the setters
	// on the objects.
	addFile(filename, file) {
		let fieldname = 'files['+(_filesCount++)+']'
		this._files[fieldname] = file
		return fieldname
	}

	// allFiles gets an object of files in this request, keyed with
	// the fieldname.
	get allFiles() { return this._files }
	// filesCount gets the number of files in this request.
	get filesCount() { return _filesCount }
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get iD() { return this._data.id }
	
	set iD(id) { this._data.id = id }
	get name() { return this._data.name }
	
	set name(name) { this._data.name = name }
	get uRL() { return this._data.url }
	
	set uRL(url) { this._data.url = url }
}

// TeachURLResponse is the response object for TeachURL calls.
export class TeachURLResponse {
	constructor(data = {}) {
		this._data = data
		this._files = {}
	}
	
	// toJSON gets a JSON string describing this object.
	toJSON() { return JSON.stringify(this._data) }

	get error() { return this._data.error }
	
	
}

