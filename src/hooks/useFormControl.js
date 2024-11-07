import React, { useState } from 'react';

const useFormControl = (initialValues) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState(initialValues);
	const handleChange = (e) => {
		const { name, value } = e.target;
		//prepValues is a copy of values, so it won't be affected by setValues, you can try to console to see the difference
		setValues((prepValues) => ({
			...prepValues,
			[name]: value
		}));
		
		let validation = value ? 'is-valid' : 'is-invalid';
		setErrors((prepErrors) => ({
			...prepErrors,
			[name]: validation
		}));
	}

	//This function is needed to clear form
	const clearForm = () => {
		setValues(initialValues);
		setErrors(initialValues);
	}
	
	const checkValidation = Object.values(errors).some(value => value.includes('is-invalid'));
	return [values, handleChange, clearForm, errors, checkValidation];
}

export default useFormControl;