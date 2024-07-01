import React, { useEffect, useState } from 'react'
import restaurentimg from './image/restaurant2.png'
import clothingimg from './image/shopping.png'
import groceryimg from './image/grocery.png'
import stationaryimg from './image/stationary.png'
import pencilimg from './image/pencil.png'
import bin from './image/delete.png'

export default function ExpenseList({ expenses, setExpenses }) {

    // const [expenses,setExpenses]= useState([]);

    // useEffect(()=>{
    // if (window.location.reload) {
    //     console.log('reloading')
    //     const storedContent = 'hello';
    //     expenses.forEach((index) => {
    //         storedContent += JSON.parse(localStorage.getItem('content' + index));
    //         console.log(storedContent);
    //     })
    //     // setExpenses(storedContent);
    //     console.log('content is displayed', storedContent);
    //     // if (storedContent) {
    //     // }
    // }

    //calculating totalamount
    let totalamount = 0;
    let localExpense = [...expenses];
    if (expenses.length > 0) {
        expenses.forEach((expense, index) => {
            localStorage.setItem('content' + index, JSON.stringify(expense))
            totalamount += JSON.parse(expense.amount);
        });

    }
    console.log(expenses.length);

    useEffect(()=>{
        let localExpense=[];
        if(expenses.length==0){
            for(let i=0;i<localStorage.length;i++){
                let storedContent=JSON.parse(localStorage.getItem('content'+i))
                if(storedContent){
                    localExpense.push(storedContent)
                }
            }
            setExpenses(localExpense);
        }
    },[expenses])

    // let storedContent;
    // console.log(expenses.length)
    // if (expenses.length === 0) {
    //     console.log('reloading');
        // for (let i = 0; i < localStorage.length; i++) {

        //     storedContent = JSON.parse(localStorage.getItem('content' + i))
        //     localExpense[i] = storedContent;
        // }
        // setExpenses(localExpense); 
    // }


    const categoryImageMap = {
        clothing: clothingimg,
        food: restaurentimg,
        stationary: stationaryimg,
        grocery: groceryimg
    }

    //creating new 
    const deleteExpense = (index) => {
        const newElement = [...expenses] //creating a copy of expenses as React does not recognise direct changes to States
        newElement.splice(index, 1) //1 signifies to delete a single element
        localStorage.removeItem('content' + index)
        setExpenses(newElement);   //
        console.log('deleteelement', expenses[index])
    }

    //functions to edit Amount and Description
    const [changeAtIndex, setIndex] = useState(null);
    const [changeAmount, setChangeAmount] = useState('')
    const [changeDescription, setChangeDescription] = useState('')
    const changeIndex = (index) => {
        document.getElementById('home').click();
        setIndex(index);
    }
    const handleChange = (event) => {
        event.preventDefault();
        console.log({ changeAmount, changeAtIndex, changeDescription })
        let newArray = [...expenses];
        console.log(expenses[changeAtIndex].amount)
        newArray[changeAtIndex].amount = changeAmount
        newArray[changeAtIndex].description = changeDescription
        // ...newArray[changeAtIndex]
        console.log(expenses[changeAtIndex].amount)
        console.log(newArray[changeAtIndex].amount)
        // ...newArray[changeAtIndex],
        // amount: { changeAmount },
        // description: { changeDescription }
        console.log(expenses, newArray)
        setExpenses(newArray);
        document.getElementById('closeinput2').click();
        closeForm();
    }

    const closeForm = () => {
        setIndex('')
        setChangeAmount('')
        setChangeDescription('')
    }

    const [totalExpense, setTotalExpense] = useState('')
    useEffect(() => {
        setTotalExpense(totalamount)
    })

    const [filteredContent,setFilteredContent]=useState([])

    const filter=(value)=>{
        let filterArray=[];
        for(let i=0;i<localStorage.length;i++){
            if(expenses[i].category===value){
                let storeFilter=JSON.parse(localStorage.getItem('content'+i));
                filterArray.push(storeFilter)
            }
        }
        setFilteredContent(filterArray);
    }
    
    return (
        <div id='expense'>

            <p className="text my-4 center">Your Expenses So Far</p>
            <div id='expenseList' className='d-flex justify-content-center'>
                {expenses.map((expense, index) => {
                    //  categoryImage=setImage(expense) ;
                    return (
                        <div className='listbox my-2' id={`listitem${index}`}>
                            <p id={`expenseTime${index}`} className='my-0 mx-1 time'> {expense.time}</p>
                            <div className="listbar d-flex justify-content-around align-items-center">
                                <div className=' listtext d-flex'>
                                    <img src={categoryImageMap[expense.category]} className='categoryicon mx-2' alt='categorysymbol' width='60px' height='60px'></img>
                                    <div className='mx-3'>
                                        <p id='expendedAmount' className='my-0'>Rs.{expense.amount}</p>
                                        <p id='describeExpense' className='my-0 ' >{expense.description}</p>
                                    </div>
                                </div>
                                <div className='listsideimage d-flex'>
                                    <a href='#addelement2' onClick={() => changeIndex(index)}><img src={pencilimg} alt='threedotsymbol' height='30px' width='30px'></img></a>
                                    <a href='#'><img src={bin} onClick={() => deleteExpense(index)} alt="bin" height='30px' width='30px' className='mx-2'></img></a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div id='totalExpenseBar' className="text center listbar my-2">TotalExpense : {totalamount}</div>
            <div class="input-group mb-3 filterbar">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox"/>
                <div>{filteredContent}</div>
            </div>
            <div id="addelement2" className="addelement">
                <div className="d-flex justify-content-between my-2 mx-4">
                    <span className=" text2">Change Amount or Description</span>
                    <a href="#"><button type="button" id="closeinput2" className="btn btn-dark closebtn" >X</button></a>
                </div>
                <form onSubmit={handleChange} className="row g-3 d-flex justify-content-between my-2 mx-4">
                    <div className="col-auto">
                        <label htmlFor="changeAmount" className="visually-hidden">New Amount</label>
                        <input value={changeAmount} onChange={(e) => setChangeAmount(e.target.value)} className="form-control" id="changeAmount" placeholder="Enter in Rupees" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="changeDescription" className="visually-hidden">New Description</label>
                        <input value={changeDescription} onChange={(e) => setChangeDescription(e.target.value)} className="form-control" id="changeDescription" placeholder="Chhole Bhature" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-dark mb-3" onclick="createFolder()">Change</button>
                    </div>
                </form>
            </div>

        </div>
    );
};
