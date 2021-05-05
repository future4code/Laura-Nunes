import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends React.Component {
	state = {
		comentario: "",
		dados: {}
	};

	onChangeComentario = (event) => {
		this.setState({ comentario: event.target.value });
	};

	criarComentario = () => {
		this.props.aoEnviar()
		console.log("Comentário: ", this.state.comentario);

	};

	render() {
		return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.criarComentario}>Enviar</button>
		</CommentContainer>
		);
	}
}
