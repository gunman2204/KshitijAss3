import React from 'react'
import { useState } from 'react'

export default function AddExpenseForm({ addExpense}) {
    const [time, setTime] = useState('')
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit running', time, amount, description, category)
        
        if(amount!='' && time!='' &&  description!='' && category!='')  
            {addExpense({ time, amount, description, category })}
        setAmount('');
        setTime('');
        setDescription('')
        setCategory('')
        console.log('handlesubmit running', time, amount, description, category)
    };

    const setExpenseCategory=()=>{
        let a = document.getElementById('expensecategory').value
        console.log(a);
        setCategory(a)
    }
    const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    const setCurrentTime = () => {
        let a = new Date;
        let b=a.toLocaleDateString(undefined,options);
        let c=a.toLocaleTimeString();
        console.log(a,c,b,a.getDay())
        let e= c+" On "+b
        setTime(e);
        document.getElementById('time').value = e;
    }
    // let k=1;
    // let content=document.getElementById('expenseList')
    // let str="";
    // const submitForm=()=>{
    //     k++;
    //     let amount=document.getElementById('amount').value;
    //     let description=document.getElementById('description').value;
    //     let category=document.getElementById('category').value
    //     let times=document.getElementById('time').value;
    //     console.log(amount,description,category,time);
    //     if(amount!==null && description!==null && category!==null && time!==null ){
    //         setDetails({
    //             am:amount,
    //             des:description,
    //             cat:category,
    //             time:times

    //         })
    //     localStorage.setItem('amount'+k,amount)
    //     localStorage.setItem('description'+k,description)
    //     localStorage.setItem('category'+k,category)
    //     localStorage.setItem('times'+k,times)
    //     str+=`
    //     <div className='listbox' id='listitem${k}'>
    //                 <p id='expenseTime${k}' className='my-0 mx-1' >${times}</p>
    //                 <div className="listbar d-flex justify-content-between align-items-center">
    //                     <div className='d-flex'>
    //                         <img src={restaurantimg} className='categoryicon' alt='categorysymbol' width='60px' height='60px'></img>
    //                         <div className='mx-3'>
    //                             <p id='expendedAmount' className='my-0'>${amount}</p>
    //                             <p id='describeExpense' className='my-0 ' >${description}</p>
    //                         </div>
    //                     </div>
    //                     <div className='listsideimage'>
    //                         <img src={threedots} alt='threedotsymbol' height='40px'></img>
    //                         <img src={bin} alt="bin" height='30px' className='mx-2'></img>
    //                     </div>
    //                 </div>
    //             </div>
    //     `
    //         localStorage.setItem('content', str);
    //         content.innerHTML = localStorage.getItem('content');
    // document.getElementById('closeinput').click();
    // content.innerHTML=str;
    // localStorage.setItem('content',str);
    // }
    // }
    // content.innerHTML=str;
    return (
        <form onSubmit={handleSubmit}>

            <div id="addExpense" className="flex mx-4 mt-5">
                <div>
                    <p className='text'>Add  Expenses</p>
                </div>
                <div id="addExpenseBox" className=''>
                    <p className='text3'>Add New Expense</p>
                    <div className="d-flex justify-content-between space">

                        <div className='tofill'>
                            <label htmlFor='amount'>Amount:</label><br></br>
                            <input type="number" id="amount" className="input" placeholder=" 0.00 Rupees" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                        </div>
                        <div className='tofill'>
                            <label htmlFor='description'>Description</label><br></br>
                            <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="description" className="input" placeholder=" bought a new laptop"></input>
                        </div>
                    </div>
                    <label className='mt-2' htmlFor='expensecategory'>Category</label><br></br>
                    <select value={category} onChange={setExpenseCategory} onClick={setExpenseCategory} placeholder='select' id='expensecategory'  name="categories" className='input ' >
                        {/* <li>select</li> */}
                        <option value="clothing">Clothing</option>
                        <option value="food">Food</option>
                        <option value="stationary">Stationary</option>
                        <option value="grocery">Grocery</option>
                    </select>
                    <div className="time">
                        <label htmlFor='time' >Time</label><br></br>
                        <input value={time} onChange={(e) => setTime(e.target.value)} id='time' className='input ' type='text' onClick={setCurrentTime} placeholder='Sat Jun 29 2024 00:15:36 GMT+0530 (India Standard Time)' ></input>
                    </div>
                    <button type="submit" className="btn btn-outline-light my-4 ">Add Expense</button>

                </div>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem accusantium recusandae modi, vel ab quam. Sed, minus recusandae cumque quae, quasi amet vel eos, earum magni illo perferendis commodi explicabo rerum vero iste?</p> */}

            </div>
            
            
        </form>

    )
}
