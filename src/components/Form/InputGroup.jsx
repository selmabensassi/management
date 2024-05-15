import { forwardRef } from 'react';

function InputGroup(props, ref) {
	const { label, name, register, error, helper, ...others } = props;

	return (
		<div className='mb-3'>
			<label className='form-label'>{label} : </label>
			<input ref={ref} {...register} className={`form-control ${error ? 'is-invalid' : ''}`} {...others} />
			{error && <div className='invalid-feedback d-block'>{error}</div>}
			{helper && <div className='form-text'>{helper}</div>}
		</div>
	);
}

export default forwardRef(InputGroup);
