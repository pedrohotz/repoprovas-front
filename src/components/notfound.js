import styled from "styled-components"

export default function NotFound(){
    return ( 
        <Container>
            <h1>Não foram encontradas provas...</h1>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height:  100%;
display:  flex;
justify-content: center;
align-items: center;
 h1{
     font-size: 30px;
 }
`