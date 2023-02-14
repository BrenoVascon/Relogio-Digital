import { Container, Number } from "../../components/card/styles"

export function Card({number}){
    return  (
        <Container>
            <Number>{number}</Number>
        </Container>
    )
}