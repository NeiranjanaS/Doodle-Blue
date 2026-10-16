function Account(){ //outer function
    let balance = 1000
    function deposit(amount){ //inner function
        balance=balance+amount;
        console.log("BalanceAmount: "+balance)
    }
    return deposit
}
const MyAccount = Account()
MyAccount(500)
MyAccount(700)
