
import { Button, List, Select } from 'antd';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { leadsSortBy } from '../../data/leadsData';
import { contactsData } from '../../data/contactsData';
import ContactsListItem from './ContactsListItem';

const Contacts = () => {

	const [sortByKey, setSortByKey] = useState('none');

	const handleOnChange = (e) => {
		setSortByKey(e.key);
	}
	  
	const [position, setPosition] = useState('bottom');
  	const [align, setAlign] = useState('center');

	const data = [...contactsData, ...contactsData, ...contactsData, ...contactsData]
	

	return (
		<>
			<div className='subHeader'>
				<Button>
					<Link to={'/contacts/create'}>Create contact</Link>
				</Button>
			</div>
			<hr />
			<div className='sortHeader'>
				<span style={{marginRight: '6px'}}>Sort by: </span>
				<Select
					placeholder="Sort by"
					style={{ width: 120 }}
					options={leadsSortBy}
					onChange={handleOnChange}
				/>
			</div>
			<hr style={{marginBottom: '0'}} />
			<List
				pagination={{ position, align, pageSize: 10 }}
				className='list'
				dataSource={data}
				renderItem={(item, index) => (
					<ContactsListItem item={item} index={index} type={'contact'} />
				)}
			/>
		
		</>
		
	);
};

export default Contacts;

