import React from 'react';

export default function TestPage() {
	return (
		<>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12'>
						<div className='page-title-box d-sm-flex align-items-center justify-content-between'>
							<h4 className='mb-sm-0'>Syndicates</h4>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='card' id='SyndicatesList'>
							<div className='card-header border-bottom-dashed'>
								<div className='row g-4 align-items-center'>
									<div className='col-sm'>
										<div>
											<h5 className='card-title mb-0'>Syndicates List</h5>
										</div>
									</div>
									<div className='col-sm-auto'>
										<div className='d-flex flex-wrap align-items-start gap-2'>
											<button className='btn btn-danger' id='remove-actions'>
												<i className='ri-delete-bin-2-line' />
											</button>
											<button
												type='button'
												className='btn btn-success add-btn'
												data-bs-toggle='modal'
												id='create-btn'
												data-bs-target='#showModal'
											>
												<i className='ri-add-line align-bottom me-1' /> Add Syndicates
											</button>
											<button type='button' className='btn btn-info'>
												<i className='ri-file-download-line align-bottom me-1' />
												Import
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='card-body border-bottom-dashed border-bottom'>
								<form>
									<div className='row g-3'>
										<div className='col-xl-6'>
											<div className='search-box'>
												<input
													type='text'
													className='form-control search'
													placeholder='Search for Syndicates, email, phone, status or something...'
												/>
												<i className='ri-search-line search-icon' />
											</div>
										</div>
										{/*end col*/}
										<div className='col-xl-6'>
											<div className='row g-3'>
												<div className='col-sm-4'>
													<div className=''>
														<input
															type='text'
															className='form-control'
															id='datepicker-range'
															data-provider='flatpickr'
															data-date-format='d M, Y'
															data-range-date='true'
															placeholder='Select date'
														/>
													</div>
												</div>
												{/*end col*/}
												<div className='col-sm-4'>
													<div>
														<select
															className='form-control'
															data-plugin='choices'
															data-choices=''
															data-choices-search-false=''
															name='choices-single-default'
															id='idStatus'
														>
															<option value=''>Status</option>
															<option value='all' selected=''>
																All
															</option>
															<option value='Active'>Active</option>
															<option value='Block'>Block</option>
														</select>
													</div>
												</div>
												{/*end col*/}
												<div className='col-sm-4'>
													<div>
														<button type='button' className='btn btn-primary w-100'>
															<i className='ri-equalizer-fill me-2 align-bottom' />
															Filters
														</button>
													</div>
												</div>
												{/*end col*/}
											</div>
										</div>
									</div>
									{/*end row*/}
								</form>
							</div>
							<div className='card-body'>
								<div>
									<div className='table-responsive table-card mb-1'>
										<table className='table align-middle' id='SyndicatesTable'>
											<thead className='table-light text-muted'>
												<tr>
													<th scope='col' style={{ width: 50 }}>
														<div className='form-check'>
															<input className='form-check-input' type='checkbox' id='checkAll' defaultValue='option' />
														</div>
													</th>
													<th className='sort' data-sort='Syndicates_name'>
														Syndicates
													</th>
													<th className='sort' data-sort='email'>
														Email
													</th>
													<th className='sort' data-sort='phone'>
														Phone
													</th>
													<th className='sort' data-sort='date'>
														Joining Date
													</th>
													<th className='sort' data-sort='status'>
														Status
													</th>
													<th className='sort' data-sort='action'>
														Action
													</th>
												</tr>
											</thead>
											<tbody className='list form-check-all'>
												<tr>
													<th scope='row'>
														<div className='form-check'>
															<input
																className='form-check-input'
																type='checkbox'
																name='chk_child'
																defaultValue='option1'
															/>
														</div>
													</th>
													<td className='id' style={{ display: 'none' }}>
														<a href='javascript:void(0);' className='fw-medium link-primary'>
															#VZ2101
														</a>
													</td>
													<td className='Syndicates_name'>Mary Cousar</td>
													<td className='email'>marycousar@velzon.com</td>
													<td className='phone'>580-464-4694</td>
													<td className='date'>06 Apr, 2021</td>
													<td className='status'>
														<span className='badge badge-soft-success text-uppercase'>Active</span>
													</td>
													<td>
														<ul className='list-inline hstack gap-2 mb-0'>
															<li
																className='list-inline-item edit'
																data-bs-toggle='tooltip'
																data-bs-trigger='hover'
																data-bs-placement='top'
																title='Edit'
															>
																<a
																	href='#showModal'
																	data-bs-toggle='modal'
																	className='text-primary d-inline-block edit-item-btn'
																>
																	<i className='ri-pencil-fill fs-16' />
																</a>
															</li>
															<li
																className='list-inline-item'
																data-bs-toggle='tooltip'
																data-bs-trigger='hover'
																data-bs-placement='top'
																title='Remove'
															>
																<a
																	className='text-danger d-inline-block remove-item-btn'
																	data-bs-toggle='modal'
																	href='#deleteRecordModal'
																>
																	<i className='ri-delete-bin-5-fill fs-16' />
																</a>
															</li>
														</ul>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className='d-flex justify-content-end'>
										<div className='pagination-wrap hstack gap-2'>
											<a className='page-item pagination-prev disabled' href='#'>
												Previous
											</a>
											<ul className='pagination listjs-pagination mb-0' />
											<a className='page-item pagination-next' href='#'>
												Next
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
