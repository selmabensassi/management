import React from 'react';

export default function Card({ title, children }) {
	return (
		<div className='card'>
			<h5 className='card-header'>{title}</h5>
			<div className='card-body'>{children}</div>
		</div>
	);
}
