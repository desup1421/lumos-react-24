import React, { useState } from 'react';

const useFormControl = (initialValues) => {
	const [values, setValues] = useState(initialValues);
	const handleChange = (e) => {
		const { name, value } = e.target;
		//prepValues is a copy of values, so it won't be affected by setValues, you can try to console to see the difference
		setValues((prepValues) => ({
			...prepValues,
			[name]: value
		}));
	}

	//This function is needed to clear form
	const clearForm = () => {
		setValues(initialValues);
	}
	return [values, handleChange, clearForm];
}

export default useFormControl;