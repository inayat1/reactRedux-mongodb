export function request(method, data, url) {
	if(method==="GET") {
		return fetch(url).then(req => req.json());
	} else {
		return fetch(url, {
			headers: {
				"Content-Type" : "application/json"
			},
			method,
			body:JSON.stringify(data)
		}).then(req => req.json());
	}
}