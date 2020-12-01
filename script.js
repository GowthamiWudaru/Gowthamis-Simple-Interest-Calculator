function compute(){
    let p
    p = parseInt(document.getElementById("principal").value);
    console.log(p)
    if(p<=0 || Number.isNaN(p)){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }
    let i = parseFloat(document.getElementById("rate").value);
    let y = parseInt(document.getElementById("years").value);
    let a = p*i*y/100
    let n= new Date().getFullYear()
    document.getElementById("result").innerHTML=`If you deposit <span>${p}</span>,
at an interest rate of <span>${i}</span>.
You will recieve an amount of <span>${a}</span>,
in the year <span>${n+y}</span></pre>`

}
function changeValue(){
    i = parseFloat(document.getElementById("rate").value);
    document.getElementById("value").innerHTML=i+"%"
}
        