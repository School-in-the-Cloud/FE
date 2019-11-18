import React, { useState } from 'react';

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
        // console.log (e.target.value);
    }
    const submitForm = e => {
        e.preventDefault();
        props.addNewList(list);
        // console.log (team)
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
    }    

    return (
        <>
            <div className='add-list'>
                <form onSubmit={submitForm}>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' type='text' name='title' onChange={handleChanges} value={list.title} />
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' name='name' onChange={handleChanges} value={list.name} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item1' type='text' name='item1' onChange={handleChanges} value={list.item1} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item2' type='text' name='item2' onChange={handleChanges} value={list.item2} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item3' type='text' name='item3' onChange={handleChanges} value={list.item3} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item4' type='text' name='item4' onChange={handleChanges} value={list.item4} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item5' type='text' name='item5' onChange={handleChanges} value={list.item5} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item6' type='text' name='item6' onChange={handleChanges} value={list.item6} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item7' type='text' name='item7' onChange={handleChanges} value={list.item7} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item8' type='text' name='item8' onChange={handleChanges} value={list.item8} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item9' type='text' name='item9' onChange={handleChanges} value={list.item9} />
                    <label htmlFor='item'>Item:</label>
                    <input id='item10' type='text' name='item10' onChange={handleChanges} value={list.item10} />
                </form>
            </div>
        </>
    )
}

export default NewListForm