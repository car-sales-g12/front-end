import styled from 'styled-components'

export const StyledCardList=styled.ul`
    width: 420px;
    max-width: 100%;
    height:377px;
    margin:20px auto;
    background-color:var(--color-grey-10);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
    padding: 80px 34px 34px 34px;
    color: var(--color-grey-1);
    font-size: 20px;
    font-weight:600;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap:10px;
    position:relative;
    h2{
        position:absolute;
        top:30px;
    }

    p{
        font-size:16px;
        font-weight: 500;
        
    }

    li{
        background-color:var(--color-brand-1);
        width:108px;
        height:108px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        img{
            object-fit: cover;
            width:100%;
            height:100%;
        }
    }
`