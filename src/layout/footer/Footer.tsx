import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #eee;
`;

const CreditsContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 12px 20px 0 20px;
`;

const Link = styled.a`
    color: darkcyan;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;

class Footer extends React.Component {

    render() {
        return (
            <FooterContainer>
                <div className="container mx-auto">
                    <CreditsContainer>
                        <Link href="https://storken.github.io/">Kontakt</Link>
                    </CreditsContainer>
                    <CreditsContainer>
                        Made with illustrations by <Link href="https://www.humaaans.com/">humaaans.com</Link>
                    </CreditsContainer>
                </div>
            </FooterContainer>
        );
    }
}

export default Footer;
