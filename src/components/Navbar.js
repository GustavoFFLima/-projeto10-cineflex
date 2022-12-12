import styled from "styled-components";

export default function Navbar() {
    return (
        <NavbarStyled>
            <h1>CINEFLEX</h1>
        </NavbarStyled>
    )
}

const NavbarStyled= styled.div`
    width: 375px;
    height: 67px;
    left: 0px;
    top: 0px;
    background: #C3CFD9;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;
    }
`