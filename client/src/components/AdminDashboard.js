import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ToDoList from './ToDoList';
// import {data} from './data/testdata';
import NewListForm from './NewListForm'

const MainWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 90vh;
    max-width: 100vw;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    h2{
        margin:55px;
    }
`

const Main = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
`

const ToDoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    width: 36%;
    margin-left: 50px;
    .button-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 60px;
    }
    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightblue;
        color: white;
        border: 1px solid grey;
        border-radius: 10px;
        min-width: 155px;
        height: 45px;
        box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
        margin: 30px;
        padding-bottom: 2px;
        text-decoration: none;
        text-shadow: none;
        &:hover{
            background-color: lightgray;
            color: white;
            cursor: pointer;
        }
  }
  .cancel-button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightgray;
        color: white;
        border: 1px solid grey;
        border-radius: 10px;
        min-width: 155px;
        height: 45px;
        box-shadow: 0 9px 18px rgba(0, 0, 0, 0.3), 0 5px 12px rgba(0, 0, 0, 0.22);
        margin: 30px;
        padding-bottom: 2px;
        text-decoration: none;
        text-shadow: none;
        &:hover{
            background-color: lightblue;
            color: white;
            cursor: pointer;
        }
  }
    .lists{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: 100%;
        overflow: auto;
        margin: 10px;
        margin-top: 6px;
        margin-left: 2px;
    }
    .lists::-webkit-scrollbar {
        width: 5px;
    }
    .lists::-webkit-scrollbar-track {
    }
    .lists::-webkit-scrollbar-thumb {
        background: lightgray;
        height: 100px; 
    }
    .lists::-webkit-scrollbar-thumb:hover {
        background: #888; 
    }
`

function AdminDashboard() {
  const { first_name, last_name } = useSelector(state => state.authentication.user);

  const [data, setData] = useState([
    {
        id: 1,
        title: 'Test List',
        name: 'Testy McTesterson',
        item1: 'Item 1',
        item2: 'Item 2',
        item3: 'Item 3',
        item4: 'Item 4',
        item5: 'Item 5',
        item6: 'Item 6',
        item7: 'Item 7',
        item8: 'Item 8',
        item9: 'Item 9',
        item10: 'Item 10',
        item1checked: false,
        item2checked: false,
        item3checked: false,
        item4checked: false,
        item5checked: false,
        item6checked: false,
        item7checked: false,
        item8checked: false,
        item9checked: false,
        item10checked: false,
    },
    {
        id: 2,
        title: 'Another List',
        name: 'Testy McTesterson',
        item1: 'Item 1',
        item2: 'Item 2',
        item3: 'Item 3',
        item4: 'Item 4',
        item5: 'Item 5',
        item6: 'Item 6',
        item7: 'Item 7',
        item8: 'Item 8',
        item9: 'Item 9',
        item10: 'Item 10',
        item1checked: false,
        item2checked: false,
        item3checked: false,
        item4checked: false,
        item5checked: false,
        item6checked: false,
        item7checked: false,
        item8checked: false,
        item9checked: false,
        item10checked: false
    },
    {
        id: 3,
        title: 'This List',
        name: 'This Guy',
        item1: 'Item 1',
        item2: 'Item 2',
        item3: 'Item 3',
        item4: 'Item 4',
        item5: 'Item 5',
        item6: 'Item 6',
        item7: 'Item 7',
        item8: 'Item 8',
        item9: 'Item 9',
        item10: 'Item 10',
        item1checked: false,
        item2checked: false,
        item3checked: false,
        item4checked: false,
        item5checked: false,
        item6checked: false,
        item7checked: false,
        item8checked: false,
        item9checked: false,
        item10checked: false,
    },
    {
        id: 4,
        title: 'Listy List',
        name: 'Listy McListerson',
        item1: 'Item 1',
        item2: 'Item 2',
        item3: 'Item 3',
        item4: 'Item 4',
        item5: 'Item 5',
        item6: 'Item 6',
        item7: 'Item 7',
        item8: 'Item 8',
        item9: 'Item 9',
        item10: 'Item 10',
        item1checked: false,
        item2checked: false,
        item3checked: false,
        item4checked: false,
        item5checked: false,
        item6checked: false,
        item7checked: false,
        item8checked: false,
        item9checked: false,
        item10checked: false,
    }
  ]);

  const [create, setCreate] = useState (false);

  const addNewList = list => {
        const newList = {
            id: Date.now(),
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
        }
        setData([...data, newList])
  }

  const editListFunction = newList =>{
      let listCopy = [...data]
      for (let i =  0; i < listCopy.length; i++){
        if (listCopy[i].id === newList.id){
            listCopy.splice(i, 1, newList)
        }
      }
      setData(listCopy);
  }

  return (
    <>
    <MainWrap>
    <h2>Welcome {first_name} {last_name}!</h2>
    <Main>
        <img
          className="main-img"
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/maintenance_cn7j.svg"
          alt="Admin" width="350px"
        />
        <ToDoListContainer>
            <div className='button-container'>
                {create ? <div className='cancel-button' onClick={() => setCreate(false)} >Cancel</div> : 
                <div className='button' onClick={() => setCreate(true)} >Create To Do List</div>
                }
            </div>
            {create ? <NewListForm addNewList={addNewList} setCreate={setCreate}/> : 
                <div className='lists'>
                    {data.map(item =>(
                        <ToDoList key={item.id} list={item} editListFunction={editListFunction}/>
                    ))}
                </div>
            }
        </ToDoListContainer>
    </Main>
    </MainWrap>
    </>
  );
}

export default AdminDashboard