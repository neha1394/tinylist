import styled from 'styled-components'

const MainContainer = styled.div`
height:644px;
width:100%;
left:0;
right:0;

`
const TinyHeader = styled.div`
height:56px;
width:100%;

background-color:#EB5757;
border:1px solid #EB5757;

`
const TinyLogo = styled.div`
position: absolute;
left: 1.74%;
right: 90.19%;
top: 2.29%;
bottom: 94.29%;

font-family: Sans-serif;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 24px;
/* identical to box height */

letter-spacing: 0.15px;

/* White — High Emphasis */

color: #FFFFFF;

`

const ListInputField = styled.input`
position: absolute;
left: 28.04%;
right: 64.5%;
top: 13.14%;
bottom: 80.14%;

font-family: Sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.15px;

color: #EB5757;
border: 1px solid white;
outline: none

`
const PlusLabel = styled.div`
left: 24.04%;
top: 12.14%;
color: #EB5757;
font-size:28px;
position: absolute;
width: 30px;
height: 30px;
text-align:center;
cursor: pointer;
`
const CustomHr = styled.hr`
position: absolute;
left: 25.43%;
right: 27.04%;
top: 16.80%;
bottom: 81.79%;

border: 1px solid #E0E0E0;
`
const Inputcontainer = styled.div`

width: auto;
`
const ListContainer = styled.div`

left: 12.5%;
height: auto;
text-align:center;
margin-top:100px;
margin-left: 25%;

`

const DeleteWrapper = styled.button`

height: auto;
text-align:center;
margin-left:50px;
margin-right:20px;



`
const ListLabel = styled.td`


height: auto;
text-align:left;
padding-right: 102px;



`
const CheckBox = styled.input`

margin-right:20px;

height: auto;
text-align:center;


`

export {
    MainContainer,
    TinyHeader,
    TinyLogo,
    ListInputField,
    PlusLabel,
    Inputcontainer,
    CustomHr,
    ListContainer,
    CheckBox,
ListLabel,
DeleteWrapper
}