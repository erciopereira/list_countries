import React, { useEffect, useState } from 'react';
import { Container } from './styled';
import useApi from '../../API';
import Card from '../../Componentes/Card'

const Home = () => {
    const [listaPaises, setListaPaises] = useState([]);
    const api = useApi();
    useEffect(() => {
        const consultarPaises = async () => {
            const retornoPaises = await api.getPaises();
            setListaPaises(retornoPaises.res);
        }
        consultarPaises()
    }, [])
    return (
        <Container>
            {listaPaises.map((i, k) => (
                <Card key={k} name={i.translations.br} />
            ))}
        </Container>
    )
}
export default Home;