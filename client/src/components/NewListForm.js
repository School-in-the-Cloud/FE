import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 350px;
  /* height: 340px; */
  margin: 20px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 0.3 ease;
  /* &:hover{
      transform: scale(1.2);
  } */
  form{
      margin-top: 20px;
  }
  .button-container {
      display: flex;
      justify-content: center;
  }
  .edit-button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
      color: black;
      border: 1px solid grey;
      border-radius: 10px;
      width: 55px;
      height: 25px;
      box-shadow: 0 5px 9px rgba(0, 0, 0, 0.3), 0 3px 6px rgba(0, 0, 0, 0.22);
      margin: 15px;
      padding-bottom: 2px;
      text-decoration: none;
      text-shadow: none;
      &:hover{
          background-color: lightgray;
          color: white;
          cursor: pointer;
      }
  }
  input{
  margin: 10px 0;
  border: 0px;
  border-bottom: 1px solid grey;
  width: 270px;
  .name-input{
      margin-left: -10px;
      border: 1px solid red;
  }
}
`

const NewListForm = props => {

    const [list, setList] = useState({
        title: '',
        name: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        item6: '',
        item7: '',
        item8: '',
        item9: '',
        item10: ''
    })

    const handleChanges = e => {
        setList({...list, [e.target.name]: e.target.value});
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewList(list);
        setList({
            title: '',
            name: '',
            item1: '',
            item2: '',
            item3: '',
            item4: '',
            item5: '',
            item6: '',
            item7: '',
            item8: '',
            item9: '',
            item10: ''
        })
        props.setCreate(false)
    }    

    return (
        <>
        <Wrapper>
            <List>
                <form onSubmit={submitForm}>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' type='text' name='title' onChange={handleChanges} value={list.title} /><br />
                    <label htmlFor='name' className='name-input'>Name:</label>
                    <input id='name' type='text' name='name' onChange={handleChanges} value={list.name} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item1' type='text' name='item1' onChange={handleChanges} value={list.item1} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item2' type='text' name='item2' onChange={handleChanges} value={list.item2} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item3' type='text' name='item3' onChange={handleChanges} value={list.item3} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item4' type='text' name='item4' onChange={handleChanges} value={list.item4} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item5' type='text' name='item5' onChange={handleChanges} value={list.item5} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item6' type='text' name='item6' onChange={handleChanges} value={list.item6} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item7' type='text' name='item7' onChange={handleChanges} value={list.item7} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item8' type='text' name='item8' onChange={handleChanges} value={list.item8} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item9' type='text' name='item9' onChange={handleChanges} value={list.item9} /><br />
                    <label htmlFor='item'>Item:</label>
                    <input id='item10' type='text' name='item10' onChange={handleChanges} value={list.item10} /><br />
                    <div className='button-container'>
                    <button className='edit-button' type='submit'>Save</button>
                    </div>
                </form>
            </List>
        </Wrapper>
        </>
    )
}

export default NewListForm