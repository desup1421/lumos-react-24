import React, { useState } from "react";
import axios from "axios";

const useAxios = (url) => {
	const [response, setResponse] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const apiRequest = async (method, path='', data = null) => {
		try {
			const newUrl = url+"/"+path;
			const res = await axios[method](newUrl, data);
			setResponse(res);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};


	return [ response, loading, error, apiRequest ];
}

export default useAxios;