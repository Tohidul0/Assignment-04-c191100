import React, { useEffect, useState } from 'react';
import axios from 'axios';

 function Header(props) {

    const [budget, setBudget] = useState('');
    const [income, setIncome] = useState('');
    const [expense, setExpese] = useState('')
    useEffect(()=>{
        const fetchBudget =async () =>{
           

            try{
                //budget set from server side budget data------------------------------------------------
                const budgetresponse = await axios.get("http://localhost:3000/budget")
                setBudget(budgetresponse.data);

                
                //Income set from server side income data-----------------------------------------------
                let incomeResponse = await axios.get("http://localhost:3000/budget/income")
                setIncome(incomeResponse.data)


                // post income data too server------------------------
                 incomeResponse = await axios.post("http://localhost:3000/budget/income", {
                amount : 230
                })
                .then(response => console.log(response))
                .catch(err => console.log(err))


                //Expence set from server side expence data-----------------------------------
                let expenceResponse = await axios.get("http://localhost:3000/budget/expense")
                setExpese(expenceResponse.data)


                //post expence data too server------------------------------------
                expenceResponse = await axios.post("http://localhost:3000/budget/income",{
                    ammount : 500
                })
                .then(response => console.log(response))
                .catch(err => console.log(err))

            }
            catch(error){
                console.error("Error fetching budget data:", error);
            }
        };
        fetchBudget()
    },[])



    // post data transfer data too server--------------------------
   
    return (
            
<div className="bg-gradient-to-r from-violet-400 to-violet-600">
    <div className="bg-violet-700/30 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-white">
            <h2 className="flex items-center italic">
            <img src="public/logo.svg" height="40" width="40" />
            <span>Budget App</span>
            </h2>
            <div className="flex items-center gap-4">
                <h2>Tohidul Alam</h2>
                <a href="#" className="undeline text-sm text-white/50">
                Sign Out
                </a>
            </div>
        </div>
    </div>
        <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
            <div>
                <h2>Available Budget</h2>
                <p className="mt-1 text-4xl font-medium">
                    + BDT <span id="available-amount">{budget}</span>
                </p>
            </div>
            <div className="mt-4 flex items-center justify-between bg-green-500 px-4 py-3 text-sm">
                <p>Income</p>
                <p>
                + BDT <span id="total-income">{income}</span>
                </p>
            </div>
            <div className="mt-2 flex items-center justify-between bg-red-500 px-4 py-3 text-sm">
                <span>Expenses</span>
                <p>
                - BDT <span id="total-expence">{expense}</span>
                </p>
            </div>
    </div>
</div>


      







        
    );
}

export default Header;