import React from 'react'
import InputField from './InputField'
import { useState } from 'react';
import { useTodo } from '../../context/TodosContext';

export default function AddTodoItem() {
  var [objTitleDesc, setObjTitleDesc] = useState({});
  var [additionalField, setAdditionalField] = useState([]);
  var [additionalData, setAdditionalData] = useState([]);

  const {addToDoItem} = useTodo();

  function explicateObject(name, val, key) {
    if (!(name && val && key)) {
      return;
    }
    let tempObj = {
      key: key,
      [name]: val
    }
    // ------------------ This code did not work -----------
    /*
    //The code was supposed to filter out additional array
    
      // const index =  additionalData.findIndex((obj)=>{
      //   console.log("found", obj.key, typeof(obj.key), typeof(key))
      //   return obj.key === key;
      // })

      // if(index==-1)
      // {
      //   setAdditionalData(prevState=>[...prevState, tempObj]);
      //   console.log("This was new", key);
      //   console.log(index)
      // }
      // else
      // {
      //   console.log("This was existing");
      //   console.log(index)
      //   let tempArray = [...additionalData];
      //   tempArray[index]=tempObj

      //   setAdditionalData(tempArray);

      //   // const tempObj2 = {
      //   //   ...additionalField[index],
      //   //   [name]: val
      //   // }

      // 
    // ------------------ ---------------------- -----------
    */
    setAdditionalData(prevState => [...prevState, tempObj]);
  }

  function submitForm(e) {
    e.preventDefault();
    
    if (objTitleDesc.title && objTitleDesc.desc) {
      addToDoItem(objTitleDesc.title, objTitleDesc.desc, filterAdditionalValues())
      setObjTitleDesc({})
      setAdditionalField([]);
      setAdditionalData([]);
    }
  }
  function setTitleNDesc(titleName, descVal) {
    if (titleName && descVal) {
      setObjTitleDesc(
        {
          title: titleName,
          desc: descVal
        }
      )
    }
  }

  //// ----------- Adding a Field --------
  function handleAdditonalField() {
    const tempKey = Date.now();
    const tempInputComponent =
      <div className='d-flex flex-row justify-content-center align-items-center col-8' key={tempKey}>
        <InputField key={tempKey} handleChange={explicateObject} name={"Name"} value={"Set value"} keys={tempKey} />
        <button className='btn btn-danger text-white'
          onClick={() => { deleteField(tempKey) }}>
          Delete Field
        </button>
      </div>

    setAdditionalField(prevAdditionalField => {
      return [...prevAdditionalField, tempInputComponent];
    });

  }

  // ----------- Deleting a Field --------
  function deleteField(deleteIndex) {
    setAdditionalField(prevState => {
      return prevState.filter((field) => {
        return field.key != deleteIndex
      })
    });
    setAdditionalData([]);
  }

  // ----------- Filtering the latest object --------
  //The idea is that the latest object is stored at the last index
  function filteringLatestValues(key) {
    var tempArr = additionalData.filter((obj => {
      if (obj.key === key)
        return obj
    }))
    return tempArr[tempArr.length - 1];
  }

  // ----------- Filtering all the redundancy --------
  //This function would filter the redundancy from the additional field
  function filterAdditionalValues() {
    let arr = [];
    additionalData.forEach(item => {
      var obj = filteringLatestValues(item.key);
      arr.push(obj);
    })

    let uniques = [];
    for (let item of arr) {
      if (!uniques.includes(item)) {
        uniques.push(item);
      }
    }
    uniques = uniques.filter(value => {
      return value !== null && value !== undefined && value !== '';
    });
    return uniques;
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <form
        className='d-flex flex-column justify-content-center align-items-center p-2 pb-5 border border-1 border-danger'
        onSubmit={submitForm}>
        <h3 className='my-1 mb-5'>Add a To Do item.</h3>
        <InputField handleChange={setTitleNDesc} />
        {additionalField.length > 0 ?
          <div className='my-5 d-flex flex-column align-items-center justify-content-center'>
            {
              additionalField.map((field, index) => (
                <div key={index}
                  className='d-flex flex-column justify-content-center align-items-center'>
                  {field}
                </div>
              ))}
          </div> :
          <div></div>}
        <button className='btn btn-secondary mt-5 col-4'
          onClick={(e) => {
            e.preventDefault();
            handleAdditonalField();

          }}>
          Add new field</button>
        <button type='submit' className='btn btn-success mt-3 mb-5 col-4'>Add To Do</button>

      </form>
    </div>
  )
}


//set up user account
//add firebase
