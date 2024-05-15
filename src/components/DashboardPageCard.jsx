import React from 'react';

export default function DashboardPageCard({ title, alignTitle, children }) {
	return (
		<div className='card'>
			<div className='card-header border-bottom-dashed'>
				<div className='row g-4 align-items-center'>
					<div className='col-sm'>
						<div>
							<h5 className='card-title mb-0' dangerouslySetInnerHTML={{ __html: title }}></h5>
						</div>
					</div>
					<div className='col-sm-auto'>
						<div className='d-flex flex-wrap align-items-start gap-2'>{alignTitle}</div>
					</div>
				</div>
			</div>
			<div className='card-body'>{children}</div>
		</div>
	);
}
