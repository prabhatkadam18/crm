import React from "react";
import CreateForm from "../CreateForm";
import { useNavigate } from "react-router-dom";
import { contactsFormStructure } from "../../data/contactsData";

const CreateContact = () => {

	const navigate = useNavigate();

	const handleOnSave = () => {
		console.log('save');
		navigate('/contacts');
	}

	const handleOnCancel = () => {
		console.log('cancel');
		navigate('/contacts');
	}


	return <div>
		<CreateForm 
			// type={'lead'}
			title={'Create Contact'}
			structure={contactsFormStructure}
			onSave={handleOnSave}
			onCancel={handleOnCancel}

		/>
	</div>;
}

export default CreateContact;
