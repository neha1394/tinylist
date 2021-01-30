import React,{Component} from "react";
//import DeleteIcon from '@material-ui/icons/Delete';

import {
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
} from './style';

const Home = () => {
    const [tinyList, setTinyList] = React.useState([]);
    const [listName,setListName ] = React.useState('');
    const [display,setDiaplay ] = React.useState();
 const addList = () =>{

     const list =tinyList;
     if(listName.length>1)
     {console.log('listName:',listName);
        let isExist =false;
        list.map(l=>{
          
     if(listName.length>1){
      //Avoiding duplicate entry
           if( l.name===listName){
            isExist=true;
              return; 
                 }
                }
                });
    if(!isExist){
       const listdata = {name:listName,id:Math.floor(Math.random() * 1000) + 1,date:new Date()};
        list.push(listdata);
        setTinyList(list);
        document.getElementById('list-name').value = ''
    }
     }

 }
 const removeList = (e) =>{
     let list =tinyList;
     const id = e.target.id.substr(3);
     console.log('removinf...',e.target.id);
     tinyList.map((l,i)=>{
         if(l.id===parseInt(id)){
        console.log('removinf...',id);
        list.splice(i,1);
        console.log('removed...',list);
        setTinyList(list);
        return true;
         }
     });

    
};

const checkChecked = (e) =>{
   // alert(document.getElementById(e.target.id).checked);
    console.log('checkChecked',document.getElementById(e.target.id).checked);
if(document.getElementById(e.target.id).checked){
    
    document.getElementById('btn'+e.target.id).disabled=false;
}
}

setTimeout(()=>{
    ////console.log('tinyList',tinyList);
    const tosort =tinyList.sort(function(a,b){return a.date.getTime() - b.date.getTime()});
    let  DisplayList= tosort.map((l,i)=>{
        return <tr key= {i}><CheckBox id={l.id} type='checkbox' onChange={checkChecked} /> <ListLabel>{l.name} </ListLabel><td><DeleteWrapper id= {'btn'+l.id} name= {l.id} onClick={removeList} disabled ={false}>Delete</DeleteWrapper></td></tr>;
    });
    setDiaplay(DisplayList);
},1000);

//setDiaplay(DisplayLisyt);
//console.log('DisplayList',display);
        return(
            <div>
                <TinyHeader   >
                <TinyLogo>TinyList</TinyLogo>
                </TinyHeader>
                <MainContainer >
              <Inputcontainer>
             <label> <PlusLabel onClick = {addList}>+</PlusLabel> </label><ListInputField id="list-name" type='text' placeholder='Add to list...'
             onKeyUp = {e=>setListName(e.target.value)}/> 
              
              </Inputcontainer>
              <CustomHr/>
              <ListContainer>{display}</ListContainer>
                </MainContainer>
                
                
            </div> 
        );
    
} ;
export default Home;

