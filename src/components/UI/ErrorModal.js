import React, {Fragment} from 'react';
import Card from './Card';
import Button from "./Button";
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
	// onCLick в нашем компоненте Button работает, так как
	// в нативном элементе button в компоненте Button мы добавили
	// onClick={props.onClick}
	return (
			<Fragment>
				<div className={classes.backdrop} onClick={props.onClearError}/>
				<Card className={classes.modal}>
					<header className={classes.header}>
						<h2>{props.title}</h2>
					</header>
					<div className={classes.content}>
						<p>{props.message}</p>
					</div>
					<footer className={classes.actions}>
						<Button onClick={props.onClearError}>Ok</Button>
					</footer>
				</Card>
			</Fragment>
	);
};

export default ErrorModal;