import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--grey-0);
    height: 139px;
    gap: 1rem;
    justify-content:center;
    padding: 0 10px;
    width: 100%;
    margin: 0 auto;

    @media(width > 1024px){
        height: 80px;
        flex-direction: row;
        justify-content: space-around;

        nav{
            max-width: 1400px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }
    }

    div{
        background-color: white;
        height: 60px;
        border: 2px solid var(---grey-100);
        display: flex;
        border-radius: 8px;

        form{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
        }
    }
    
`