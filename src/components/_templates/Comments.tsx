import React, { useState } from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '@mui/material';

function Comments() {
	const [value, setValue] = useState('');
	const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	};
	return (
		<Wrapper>
			<StyledTextarea
				placeholder='Write your feedback here ...'
				value={value}
				onChange={handleChangeValue}
			/>
			<Button variant='contained'>Add comment</Button>
			<ListOfComments>
				<Comment>
					<User>
						<Avatar />
						Ivan
					</User>
					<CommentText>
						<p>12-05-2022</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
							similique quod vel placeat corporis minima quam a rerum eaque!
						</p>
					</CommentText>
				</Comment>
				<Comment>
					<User>
						<Avatar />
						Ivan
					</User>
					<CommentText>
						<p>12-05-2022</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
							similique quod vel placeat corporis minima quam a rerum eaque!
						</p>
					</CommentText>
				</Comment>
			</ListOfComments>
		</Wrapper>
	);
}

const CommentText = styled('div')``;
const Comment = styled('div')`
	display: flex;
	gap: 1rem;
`;
const User = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	justify-content: center;
`;

const ListOfComments = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const StyledTextarea = styled('textarea')`
	background: rgba(255, 255, 255, 0.2);
	color: white;
	resize: vertical;
	border: none;
	outline: none;
	padding: 1rem;
	width: 100% !important;
	min-height: 40px;
	::placeholder {
		color: rgba(255, 255, 255, 0.7);
	}
`;
const Wrapper = styled('div')`
	padding-right: 3rem;
`;

export default Comments;
