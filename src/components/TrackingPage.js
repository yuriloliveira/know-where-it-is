import React from 'react';

export default class TrackingPage extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <form method="POST" action="https://www2.correios.com.br/sistemas/rastreamento/resultado_semcontent.cfm">
                <input type="text" name="Objetos" value="OG226572624BR" />
                <input type="submit" />
            </form>
        );
    }
}