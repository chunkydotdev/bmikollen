import React from 'react';
import styled from 'styled-components';

const FaqContainer = styled.div`
    padding: 0 20px;
`;

const FaqHeader = styled.h2`
    font-size: ${(props: { small: boolean }) => props.small ? '1.5rem' : '2rem' };
    font-family: 'Alatsi', sans-serif;
    width: 100%;
    text-align: left;
`;

const Link = styled.a`
    color: darkcyan;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;

const FaqTextContent = styled.p``;

class Faq extends React.Component {

    render() {
        return (
            <FaqContainer>
                <div className="mb-5">
                    <FaqHeader small={false}>
                        Vad är BMI Kollen?
                    </FaqHeader>
                    <FaqTextContent>
                        Hej och välkommen till BMI Kollen! Här kan du snabbt räkna ut din bmi och logga den för var dag.
                        Det är nämligen så att sista gången per dag som du loggar ditt bmi så sparas ditt bmi lokalt och du kan se hur den utvecklats över tiden.
                    </FaqTextContent>
                </div>
                <div className="mb-10">
                    <FaqHeader small>
                        Vart sparas mina bmi-loggar?
                    </FaqHeader>
                    <FaqTextContent>
                        Dina bmi-loggar sparas lokalt på din dator, om du byter webbläsare, dator eller enhet så kommer du inte se samma historik.
                        Samtidigt är det bara du som kommer se din data, ingen annan, varken jag eller molnet kommer känna till den.
                    </FaqTextContent>
                </div>
                <div className="mb-5">
                    <FaqHeader small={false}>
                        Vad är BMI?
                    </FaqHeader>
                    <FaqTextContent>
                        BMI står för Body Mass Index och är ett sätt att mäta om en person är överviktig, underviktig eller inom ett "normalt" spann.
                        Det är förstås inte så att man kan dra alla över samma kamm, denna skalan stämmer inte alltid, t.ex. om du är extremt vältränad så väger muskler mer än fett vilket gör att det kan se ut som att du är överviktig även om du inte är det enligt BMI skalan.
                        <br></br>
                        <br></br>
                        Man brukar räkna att BMI
                        <br></br>
                        # under 18,5 är <b>Undervikt</b>
                        <br></br>
                        # mellan 18,5-24,9 är <b>Normalvikt</b>
                        <br></br>
                        # mellan 25-29,9 är <b>Övervikt</b>
                        <br></br>
                        # över 30,0 och meter är <b>Fetma</b>
                        <br></br>
                        <br></br>
                        Formulan är vikt/(längd i meter)^2.
                    </FaqTextContent>
                </div>
                <div className="mb-5">
                    <FaqHeader small={false}>
                        Vart kan jag läsa mer?
                    </FaqHeader>
                    <FaqTextContent>
                        Det finns massor av artiklar skrivna om BMI, här är ett axplock.
                        <br></br>
                        <Link href="https://www.1177.se/stockholm/liv--halsa/sunda-vanor/sa-bedomer-du-din-vikt/">1177.se - Så bedömer du din vikt</Link>
                        <br></br>
                        <Link href="https://www.kirurgkliniken.se/behandlingar/overvikt/om-overvikt/bmi/att-mata-bmi-och-midjematt">kirurgkliniken.se - Att mäta bmi och midjemått</Link>
                    </FaqTextContent>
                </div>
            </FaqContainer>
        );
    };
}

export default Faq;
