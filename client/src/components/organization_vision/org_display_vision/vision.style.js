import styled from 'styled-components'

export const Box = styled.div`
   position: relative;
   margin-top: 1.5rem;
   padding: 10px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const Input = styled.input `
   background-color: ${(props) => props.bgColor};
   padding: ${(props) => props.padding};
   margin: ${(props) => props.margin};
   width: 550px;
   height: 48px;
   border: none;

   &::placeholder {
      font-size: 18px;
      font-family: 'Lato';
      padding-left: 10px;
      color: #999999;
   }
`
export const Editbutton = styled.button `
   border: none;
   position: absolute;
   background-color: transparent;
   top: ${(props) => props.top};
   right: ${(props) => props.right};
   cursor: pointer;
`
export const Title = styled.h3 `
   position: absolute;
   font-family: 'Lato';
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 28px;
   top: ${(props) => props.top};
   right: ${(props) => props.right};
   color: ${(props) => props.color};
`
export const Line = styled.div `
   width: 1102px;
   height: 2px;
   display: block;
   position: absolute;
   top: ${(props) => props.top};
   right: ${(props) => props.right};
   background-color: #eee3e3;
   z-index: 1;
`