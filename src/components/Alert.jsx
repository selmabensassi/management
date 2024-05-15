export default function Alert({ type, children }) {
	let alertClass = 'primary';
	let icon = '';

	if (type == 'error') {
		alertClass = 'danger';
		icon = <i className='fa-solid fa-circle-xmark'></i>;
	}

	return (
		<div className={`alert alert-${alertClass}`}>
			{icon && icon} {children}
		</div>
	);
}
