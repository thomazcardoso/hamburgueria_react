import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        line-height:150%;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    input{
        border: none;
        outline: none;
    }
    
    :root{
        --color-primary: #27ae60;
        --color-primary-50: #93d7af;
        --color-secondary: #eb5757;
        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #e0e0e0;
        --grey-0: #f5f5f5;
        --negative: #e60000;
        --warning: #ffcd07;
        --success: #168821;
        --information: #155bcb;

    }


`