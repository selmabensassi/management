import React from 'react';

export default function Model({ id, title, showCloseBtn = true, children, btn }) {
	return (
		<div className='modal fade' id={id} tabIndex={-1} aria-hidden='true'>
			
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' dangerouslySetInnerHTML={{ __html: title }}></h1>
						<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
					</div>
					<div className='modal-body'>{children}</div>
					<div className='modal-footer'>
					{console.log("model")}
						{btn}
						{showCloseBtn && (
							<button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
								Close
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
