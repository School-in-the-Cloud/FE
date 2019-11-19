import React, {useState} from "react";
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  height: 340px;
  margin: 20px;
  margin-top: 40px;
  text-shadow: none;
  color: black;
  background-color: white;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
  transition: transform 0.3 ease;
  &:hover{
      transform: scale(1.2);
  }
  .title{
    font-weight: bold;
    font-size: 1.7rem;
    color: darkgray;
    margin: 12px;
    border-bottom: 1px solid black;
  }
  .name{
      margin-top: -10px;
      margin-bottom: 5px;
      font-weight: bold;
  }
  .items{
      width: 80%;
      text-align: left;
      min-height: 200px;
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
  .delete-button{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: darkred;
      color: white;
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
`

function ToDoList (props){

    const list = props.list;

    const [editing, setEditing] = useState(false);

    const [editList, setEditList] = useState({
        title: list.title,
        name: list.name,
        item1: list.item1,
        item2: list.item2,
        item3: list.item3,
        item4: list.item4,
        item5: list.item5,
        item6: list.item6,
        item7: list.item7,
        item8: list.item8,
        item9: list.item9,
        item10: list.item10
    })

    const handleChanges = e => {
        setEditList ({...list, [e.target.name]: e.target.value})
    }

    const handleEdit = e =>{
        e.preventDefault();
        setEditing(true)
    }

    const submitEdit = e =>{
        e.preventDefault();
        props.editListFunction(editList)
        setEditList(editList)
        console.log('submit here', editList)
        setEditing(false)
    }

    return (
        <>
        <List>
            {editing ? (
                <>
                {console.log ('are we editing ',editing)}
                <form onSubmit={submitEdit}>
                    <label htmlFor='title'>Title:</label>
                    <input
                        id='title'
                        type='text'
                        name='title'
                        className='edit-input'
                        onChange={handleChanges}
                        defaultValue={editList.title}
                    />
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' name='name'className='edit-input' onChange={handleChanges} defaultValue={editList.name} />
                    <input id='item1' type ='text' name='item1' className='edit-input' onChange={handleChanges} defaultValue={editList.item1} />
                    <input id='item2' type ='text' name='item2' className='edit-input' onChange={handleChanges} defaultValue={editList.item2} />
                    <input id='item3' type ='text' name='item3' className='edit-input' onChange={handleChanges} defaultValue={editList.item3} />
                    <input id='item4' type ='text' name='item4' className='edit-input' onChange={handleChanges} defaultValue={editList.item4} />
                    <input id='item5' type ='text' name='item5' className='edit-input' onChange={handleChanges} defaultValue={editList.item5} />
                    <input id='item6' type ='text' name='item6' className='edit-input' onChange={handleChanges} defaultValue={editList.item6} />
                    <input id='item7' type ='text' name='item7' className='edit-input' onChange={handleChanges} defaultValue={editList.item7} />
                    <input id='item8' type ='text' name='item8' className='edit-input' onChange={handleChanges} defaultValue={editList.item8} />
                    <input id='item9' type ='text' name='item9' className='edit-input' onChange={handleChanges} defaultValue={editList.item9} />
                    <input id='item10' type ='text' name='item10' className='edit-input' onChange={handleChanges} defaultValue={editList.item10} />
                    <div className='button-container'>
                        <button className='edit-button' type='submit'>Save</button>
                        <button className='delete-button' type='submit'>Delete</button>
                    </div>
                </form>
                </>
            ) : (
                <>
                <div className='title'>{list.title}</div>
                <div className='name'>-{list.name}-</div>
                <div className='items'>
                    <div>{list.item1}</div>
                    <div>{list.item2}</div>
                    <div>{list.item3}</div>
                    <div>{list.item4}</div>
                    <div>{list.item5}</div>
                    <div>{list.item6}</div>
                    <div>{list.item7}</div>
                    <div>{list.item8}</div>
                    <div>{list.item9}</div>
                    <div>{list.item10}</div>
                </div>
                <div className='edit-button' onClick={handleEdit}>Edit</div>
                </>
            )}
        </List>
        </>
    )

}

export default ToDoList