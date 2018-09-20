/* 
Expense-tracker - Keeps track of your daily expenses and income. Gives you the balance amount.
addExpense Method - adds expenses to an array in the format {description,amount}
addIncome Method - adds Income to an array in the format {description,amount}
getAccountSummary Method - Calculates the balance amount. Displays your total income and expenses.
*/

const account ={
    name: "Dev Sanghvi",
    expense: [],
    income: [],
    addExpense : function(description,amount){
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    addIncome : function(description,amount){
        this.income.push({
            description:description,
            amount:amount
        })
    },
    getAccountSummary : function(){
        let totalExpenses = 0
        this.expense.forEach(function(item){
            totalExpenses = totalExpenses + item.amount
        })

        let totalIncome = 0
        this.income.forEach(function(item){
            totalIncome = totalIncome + item.amount
        })

        return `${this.name} has a balance of $${totalIncome-totalExpenses}. $${totalIncome} in income. $${totalExpenses} in Expenses.`
    }
}

account.addExpense("coffee",2)
account.addExpense("rent",700)
account.addIncome("salary",1000)
account.addIncome("side project",50)
console.log(account.getAccountSummary())

