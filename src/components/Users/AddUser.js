import React, {useState, Fragment} from 'react';
import Card	from '../UI/Card';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState(null);

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0
		|| enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)'
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0)'
			});
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');
	}

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

		// Для созданных компонентов, в отличии от form, div, label
		// React не понимает className, для него это обычный props
		// Поэтому нужно передавать его как props и объединить в children компоненте
		// c другим className - это относится к компоненту Card
		return (
				<Fragment>
					{error && <ErrorModal
							title={error.title}
							message={error.message}
							onClearError={errorHandler}
					/>}
					<Card className={classes.input}>
						<form onSubmit={addUserHandler}>
							<label htmlFor="username">Username</label>
							<input
									id="username"
									type="text"
									onChange={usernameChangeHandler}
									value={enteredUsername}
							/>
							<label htmlFor="age">Age (years)</label>
							<input
									id="age"
									type="number"
									onChange={ageChangeHandler}
									value={enteredAge}
							/>
							<Button type="submit">Add User</Button>
						</form>
					</Card>
				</Fragment>
		);
};

export default AddUser;