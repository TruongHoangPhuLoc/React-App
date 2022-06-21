import React, { useState } from 'react';

/// method 1
// const AddTask = ({addTask}) => {
//     const [text,setText] = useState('')
//     const [month,setMonth] = useState('')
//     const [reminder,setReminder] = useState(false)
//     return (
//         <form className='add-form'>
//             <div className='form-control'>
//                 <label>
//                     Task
//                 </label>
//                 <input onChange={(e) => {
//                     setText(e.target.value);
//                     console.log(text)
//                 }} type='text' placeholder='add task' value={text}/>
//             </div>
//             <div className='form-control'>
//                 <label>
//                     Day & Time
//                 </label>
//                 <input onChange={(e) =>{
//                     setMonth(e.target.value);
//                     console.log(month)
//                 }} type='text' placeholder='add day & time' value={month}/>
//             </div>
//             <div className='form-control-check'>
//                 <label>
//                     Set reminder
//                 </label>
//                 <input type='checkbox' value={reminder} onChange={(e) => {
//                     setReminder(e.currentTarget.checked);
//                     console.log(reminder);
//                 }}/>
//             </div>
//             <input type='button' value = 'SaveTask' className='btn btn-block' onClick={(e) =>
//             {
//                 addTask({text,month,reminder});
//             }}></input>
//         </form>
//     );
// };

///method 2: testing add task without const variable
const AddTask = ({addTask}) => {

    var text = '';
    var month = '';
    var reminder = false;
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>
                    Task
                </label>
                <input id='task' onChange={(e) => {
                    text = e.currentTarget.value;
                    console.log(text);
                }} type='text' placeholder='add task' />
            </div>
            <div className='form-control'>
                <label>
                    Day & Time
                </label>
                <input onChange={(e) =>{
                    month = e.currentTarget.value;
                    console.log(month)
                }} type='text' placeholder='add day & time'/>
            </div>
            <div className='form-control-check'>
                <label>
                    Set reminder
                </label>
                <input type='checkbox' value={reminder} onChange={(e) => {
                    reminder = e.currentTarget.checked;
                }}/>
            </div>
            <input type='button' value = 'SaveTask' className='btn btn-block' onClick={(e) =>
            {
                addTask({text,month,reminder});
            }}></input>
        </form>
    );
};

export default AddTask;