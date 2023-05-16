
import { Button, List, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { leadsSortBy } from '../../data/leadsData';
import { accountsData, accountsSortBy } from '../../data/accountsData';
import AccountsListItem from './AccountsListItem';

const Accounts = () => {

	const [sortByKey, setSortByKey] = useState('none');
	const [sortOrder, setSortOrder] = useState('ascend');

	const handleOnChange = (e) => {
		setSortByKey(e.key);
	}
	  
	const [position, setPosition] = useState('bottom');
  	const [align, setAlign] = useState('center');

	const addedAccounts = JSON.parse(localStorage.getItem('accounts'));

	if (!addedAccounts) {
		localStorage.setItem('accounts', JSON.stringify([]));
	}

	const data = [...addedAccounts];

	const sortedData = data.sort((a, b) => {
		if (sortByKey === 'none') return 0;
		if (sortByKey === 'createdTime') {
			if (sortOrder === 'ascend') {
				return new Date(a[sortByKey]) - new Date(b[sortByKey]);
			} else {
				return new Date(b[sortByKey]) - new Date(a[sortByKey]);
			}
		}
		
		if (sortOrder === 'ascend') {
			return a[sortByKey]?.localeCompare(b[sortByKey]);
		} else {
			return b[sortByKey]?.localeCompare(a[sortByKey]);
		}

	});
	
	return (
		<>
			<div className='subHeader'>
				<Button>
					<Link to={'/accounts/create'}>Create account</Link>
				</Button>
			</div>
			<hr />
			<div className='sortHeader'>
				<span style={{marginRight: '6px'}}>Sort by: </span>
				<Select
					placeholder="Sort by"
					style={{ width: 120 }}
					options={accountsSortBy}
					onChange={(_, obj) => handleOnChange(obj)}
				/>
				{sortByKey !== 'none' && (
					<Select
						className='sortOrder'
						options={[
							{ label: 'Asc', value: 'ascend' },
							{ label: 'Desc', value: 'descend' },
						]}
						defaultValue={sortOrder}
						onChange={val => {
							setSortOrder(val);
						}}
					>
						{sortOrder === 'ascend' ? 'Desc' : 'Asc'}
					</Select>
				)}
			</div>
			<hr style={{marginBottom: '0'}} />
			<List
				pagination={{ position, align, pageSize: 10 }}
				className='list'
				dataSource={sortedData}
				renderItem={(item, index) => (
					<AccountsListItem item={item} index={index} type={'account'} />
				)}
			/>
		
		</>
		
	);
};

export default Accounts;

