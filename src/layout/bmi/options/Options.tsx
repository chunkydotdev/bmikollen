import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, DangerButton } from '../../../shared/styled-components/Buttons';

const ModalWrapper = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-flow: column;
`;

const ModalHeading = styled.h2`
    font-size: 2rem;
    font-family: 'Alatsi', sans-serif;
    text-align: center;
`;

const ModalText = styled.p`
    padding: 10px 0;
`;

class Options extends React.Component<{clearBmiHistory(): void}> {
    state: { open: boolean }

    constructor(props: {clearBmiHistory(): void}) {
        super(props);

        this.state = { open: false };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.removeBmiHistory = this.removeBmiHistory.bind(this);
    }

    public closeModal(event: React.MouseEvent) {
        this.setState({ open: false });
    }

    public openModal(event: React.MouseEvent) {
        this.setState({ open: true });
    }

    public removeBmiHistory(event: React.MouseEvent) {
        this.props.clearBmiHistory();
    }

    public modal() {
        if (this.state.open) {
            return (
                <ModalWrapper onClick={this.closeModal}>
                    <ModalContainer>
                        <ModalHeading>Alternativ</ModalHeading>
                        <ModalText>
                            Ta bort bmi historik
                        </ModalText>
                        <DangerButton onClick={this.removeBmiHistory}>Ta bort</DangerButton>
                        <div className="pt-5"></div>
                        <PrimaryButton onClick={this.closeModal}>Avbryt</PrimaryButton>
                    </ModalContainer>
                </ModalWrapper>
            );
        }
    }

    render() {
        return (
            <div>
                {this.modal()}
                <div className="flex justify-center">
                    <PrimaryButton onClick={this.openModal}>Alternativ</PrimaryButton>
                </div>
            </div>
        );
    }
}

export default Options;
