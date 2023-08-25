import styled from 'styled-components'

export const StyledCarInfo=styled.div`
width:752px;
height:240px;
max-width:100%;
padding:28px 44px;
margin:20px auto;
display:flex;
background-color:var(--color-grey-10);
flex-direction: column;
align-items: center;
justify-content: space-around;
border-radius:4px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
h2{
    color: var(--color-grey-1);
    font-size: 20px;
    font-weight: 600;
}
.middle{
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .spanDiv{
        display:flex;
        width:max-content;
        gap:10px;
        
        span{
            width:max-content;
            height:32px;
            border-radius: 4px;
            color: var(--color-brand-1);
            background-color: var(--color-brand-4);
            padding:4px 8px;
            font-size:14px;
        }
       
    }

    p{
            color: var(--color-grey-1);
            font-size:16px;
            font-weight: 600;
        }
}
button{
    border-radius: 4px;
    background-color:var(--color-brand-1);
    color:var(--color-white-fixed);
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    align-self: start;
    }

    @media (max-width:425px){
        .middle{
            gap:15px;
            flex-direction: column;
        }
        button{
            align-self:center
        }
  }

`