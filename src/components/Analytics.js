import { Progress } from 'antd'
import React from 'react'


const Analytics = ({allTransaction}) => {

    //Categories Data
    const categories = ['salary', 'tip', 'project', 'food', 'movies', 'bills', 'medical', 'fee', 'tax']
     
    //For all the Transactions Made by the user
    const totalTransactions= allTransaction.length
    const totalIncome =  allTransaction.filter((transaction) => transaction.type === 'income') //here we are filtering from the 'allTransactions' data we are getting as props from the HomePage.js component and then retrieving different facts and figure and showing it into the graphical form
    const totalExpense =  allTransaction.filter((transaction) => transaction.type === 'expense')
    const totalIncomePercent = (totalIncome.length / totalTransactions) * 100
    const totalExpensePercent = (totalExpense.length / totalTransactions) * 100
    
    //Total Turnover of the User

    const totalTurnover = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnover = allTransaction.filter((transaction) => transaction.type === 'income').reduce((acc, transaction)=> acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransaction.filter((transaction) => transaction.type === 'expense').reduce((acc, transaction)=> acc + transaction.amount, 0);
    
    //Percentage

    const totalIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100
    const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100

  return (
    <>

        <div className="row m-3">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                    <h5>Total Transactions : {totalTransactions}</h5>
                    
                    </div>
                    <div className="card-body">
                        <h5 className="text-success">Income : {totalIncome.length}</h5>
                        <h5 className="text-danger">Expense : {totalExpense.length}</h5>
                        <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)} //.toFixed to give the round off value without decimal places
                />
              </div>  
                    </div>
                </div>
            </div>
            
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                    <h5>Total Turnover : {totalTurnover}</h5>
                    
                    </div>
                    <div className="card-body">
                        <h5 className="text-success">Income Turnover : {totalIncomeTurnover}</h5>
                        <h5 className="text-danger">Expense Turnover : {totalExpenseTurnover}</h5>
                        <div>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomeTurnoverPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverPercent.toFixed(0)} //.toFixed to give the round off value without decimal places
                />
              </div>  
                    </div>
                </div>
            </div>
       
        
        
       
       
         <div className="col-md-3">
               <h4>Categorywise Income</h4>
               {
                categories.map((category) => {
                    const amount = allTransaction.filter(
                        (transaction) => 
                            transaction.type === 'income' && 
                            transaction.category === category
                            ).reduce((acc, ts) => acc + ts.amount, 0);
                     return(
                        amount > 0 &&
                        <div className="card">
                            <div className="card-body">
                                <h5>{category}</h5>
                                <Progress 
                                    percent={((amount/totalIncomeTurnover) * 100).toFixed(0)} />
                            </div>
                        </div>
                     )
                })
               }
         </div>
         <div className="col-md-3">
               <h4>Categorywise Expense</h4>
               {
                categories.map((category) => {
                    const amount = allTransaction.filter(
                        (transaction) => 
                            transaction.type === 'expense' && 
                            transaction.category === category
                            ).reduce((acc, ts) => acc + ts.amount, 0);
                     return(
                        amount > 0 &&
                        <div className="card">
                            <div className="card-body">
                                <h5>{category}</h5>
                                <Progress 
                                    percent={((amount/totalExpenseTurnover) * 100).toFixed(0)} />
                            </div>
                        </div>
                     )
                })
               }
         </div>
       </div>
       
    </>
  )
}

export default Analytics



