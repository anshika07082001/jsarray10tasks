var arr = [{Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000,Quantity:30},
{Company:"Nokia",Model:"S730",Memory:128,Price:22000,Quantity:20},
{Company:"Xiomi",Model:"Note",Memory:32,Price:12000,Quantity:10},
{Company:"Motorola",Model:"G10",Memory:32,Price:15000,Quantity:20},
{Company:"Apple",Model:"S12",Memory:64,Price:25000,Quantity:30}];
design();

function populate(){
    var text="";
    
text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><th>Quantity</th><th>Action</th></tr>";
for(i=0;i<arr.length;i++){
    text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td><td>"+arr[i].Quantity+"</td><td>"+"<input type='checkbox' id='entryDelete' onclick='selectCheck(this)'>"+"</td></tr>"
}
text += "</table>";
document.getElementById('container').innerHTML=text;
}

function design(args){
var text="";
text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><th>Quantity</th><th>Action</th></tr>";
for(i=0;i<arr.length;i++){
    text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td><td>"+arr[i].Quantity+"</td><td>"+"<input type='checkbox' id='entryDelete' onclick='selectCheck(this)'>"+"</td></tr>";
}
text += "</table>";

document.getElementById('container').innerHTML=text;
}

// task2  

function selectproducts(){
var selectproduct = document.getElementById('selectproducts');
var index = selectproduct.selectedIndex;

for(i=0;i<arr.length;i++){
    if(index == 1){
        var text ="";
        if(document.getElementById('productsquantity').value == arr[i].Company){
            text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
    document.getElementById('searchtable').innerHTML+=text;
        }
    }
    if(index==2){
        var text="";
        if(document.getElementById('productsquantity').value == arr[i].Model){
            text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
    document.getElementById('searchtable').innerHTML+=text;
        }
    }
    if(index==3){
        var text="";
        if(document.getElementById('productsquantity').value == arr[i].Memory){
            text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
    document.getElementById('searchtable').innerHTML+=text;
        }
    }
    if(index==4){
        var text="";
        if(document.getElementById('productsquantity').value == arr[i].Price){
            text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
    document.getElementById('searchtable').innerHTML+=text;
    }
}
}
document.getElementById('selectproducts').value="-Select field-";
    document.getElementById('productsquantity').value="";

}
// task3

function sorted(){
var selectsort1 = document.getElementById('sort1').selectedIndex;
var selectsort2 = document.getElementById('sort2').selectedIndex;
if(selectsort1==1){
    if(selectsort2==1){
        arr.sort((a,b)=>{
            let fa = a.Company.toLowerCase(),
            fb = b.Company.toLowerCase();
            if(fa<fb){return -1;}
            if(fa>fb){return 1;}
            return 0;});
            populate();
    }
    if(selectsort2==2){
        arr.sort((a,b)=>{
            let fa =a.Model.toLowerCase(),
            fb = b.Model.toLowerCase();
            if(fa<fb){return -1;}
            if(fa>fb){return 1;}
            return 0;});
            populate();
    }
    if(selectsort2==3){
        arr.sort((a,b)=>{
            return a.Memory-b.Memory;
        });
        populate();
    }
    if(selectsort2==4){
        arr.sort((a,b)=>{
            return a.Price-b.Price;
        });
        populate();
    }
}
if(selectsort1==2){
    if(selectsort2==1){
        arr.sort((a,b)=>{
            let fa = a.Company.toLowerCase(),
            fb = b.Company.toLowerCase();
            if(fb<fa){return -1;}
            if(fb>fa){return 1;}
            return 0;});
            populate();
    }
    if(selectsort2==2){
        arr.sort((a,b)=>{
            let fa =a.Model.toLowerCase(),
            fb = b.Model.toLowerCase();
            if(fb<fa){return -1;}
            if(fb>fa){return 1;}
            return 0;});
            populate();
    }
    if(selectsort2==3){
        arr.sort((a,b)=>{
            return b.Memory-a.Memory;
        });
        populate();
    }
    if(selectsort2==4){
        arr.sort((a,b)=>{
            return b.Price-a.Price;
        });
        populate();
    }
}
}

// task4
function newdetails(){
    var company = document.getElementById('inputcompany').value;
    var model = document.getElementById('inputmodel').value;
    var memory = document.getElementById('inputmemory').value;
    var price = document.getElementById('inputprice').value;

    const arra = {Company:company,Model:model,Memory:memory,Price:price,Quantity:"0"};
    arr.splice(2,0,arra);
    populate();
    document.getElementById('inputcompany').value="";
    document.getElementById('inputmodel').value="";
    document.getElementById('inputmemory').value="";
    document.getElementById('inputprice').value="";
}

// task5

    var opts = document.getElementById('selectProductBill');
    for(i=0;i<arr.length;i++){
        var opt = arr[i].Company+"  "+ arr[i].Model;
        var opts1 = document.createElement('option');
        opts1.textContent=opt;
        opts.appendChild(opts1);
    }
    var arradd1=[];
    var arradd;
function populateGenerate(tempArr)
{    
    var text="";
    text += "<table><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";
    for(i=0;i<tempArr.length;i++)
    {
    text += "<tr><td>"+tempArr[i].Company+"</td><td>" +tempArr[i].Quantity+"</td><td>"+tempArr[i].Amount+"</td></tr>";
    }
    document.getElementById('addBill').innerHTML=text;    
}
function addSelect(){
    inputQuantity = document.getElementById('productInput').value;
    var selectedproduct = document.getElementById('selectProductBill').selectedIndex;
    value1 = document.getElementById('selectProductBill').value;
    //code to find the price of the selected item
    var basicPrice=0;
    var splitArr=value1.split(" ");
    var val=splitArr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i].Company==val)
        {
            basicPrice=arr[i].Price;   
        }
     }
     //code to find the index of selected item
     var ind=-1;
     for(i=0;i<arradd1.length;i++){
        if(arradd1[i].Company==value1)
        {
            ind=i;
        }
     }
    if(ind==-1)//push new items
    {
        if(selectedproduct==1){  
            sum1=inputQuantity*arr[0].Price;
            if(0)
            {
            }
            else
            {
                arr[selectedproduct-1].Quantity-=inputQuantity;
                arradd = {Company:value1,Quantity:inputQuantity,Amount:sum1};
                arradd1.push(arradd);
                populate();
                populateGenerate(arradd1);
            }
        }
        if(selectedproduct==2){
            sum1=inputQuantity*arr[1].Price;
            // if(arr[selectedproduct-1].Quantity<inputQuantity){
            //     document.getElementById('error').innerHTML="";
            // }
            if(0){

            }
            else{
                arr[selectedproduct-1].Quantity-=inputQuantity;
                arradd = {Company:value1,Quantity:inputQuantity,Amount:sum1};
                arradd1.push(arradd);
                populate();
               populateGenerate(arradd1);
            }
        }
            if(selectedproduct==3){
            sum1=inputQuantity*arr[2].Price;
            // if(arr[selectedproduct-1].Quantity<inputQuantity){
            //     document.getElementById('error').innerHTML="";
            // }
            if(0){}
            else{
                arr[selectedproduct-1].Quantity-=inputQuantity;
                arradd = {Company:value1,Quantity:inputQuantity,Amount:sum1};
                arradd1.push(arradd);
                populate();
                populateGenerate(arradd1);
            }
        }
            if(selectedproduct==4){
            sum1=inputQuantity*arr[3].Price;
            // if(arr[selectedproduct-1].Quantity<inputQuantity){
            //     document.getElementById('error').innerHTML="";
            // }
            if(0){}
            else{
                arr[selectedproduct-1].Quantity-=inputQuantity;
                arradd = {Company:value1,Quantity:inputQuantity,Amount:sum1};
                arradd1.push(arradd);
                populate();
                populateGenerate(arradd1);
            }
         }   
         if(selectedproduct==5){
            sum1=inputQuantity*arr[4].Price;
            // if(arr[selectedproduct-1].Quantity<inputQuantity){
            //     document.getElementById('error').innerHTML="";
            // }
            if(0){}
            else{
                arr[selectedproduct-1].Quantity-=inputQuantity;
                arradd = {Company:value1,Quantity:inputQuantity,Amount:sum1};
                arradd1.push(arradd);
                populate();
                populateGenerate(arradd1);
            }
         } 
}
else//item already exists
{
    if(inputQuantity>arr[selectedproduct-1].Quantity)
    {
        alert("out of stock");
        return ;
    }
    arr[selectedproduct-1].Quantity-=inputQuantity;
    arradd1[ind].Quantity=parseInt(arradd1[ind].Quantity)+parseInt(inputQuantity);
    arradd1[ind].Amount=parseInt(arradd1[ind].Quantity)*basicPrice;
    populateGenerate(arradd1);
    populate();
}
}
var sumarr=0;
function generatebill(){
    var text="";
    for(i=0;i<arradd1.length;i++){
      sumarr += arradd1[i].Amount;
    }
    text += "<tr><td>Total</td><td>"+sumarr+"</td></tr>";
    document.getElementById('addBill').innerHTML+=text;
    document.getElementById('addBtn').disabled="disabled"; 
    document.getElementById('generateBtn').disabled="disabled";   
}


// // task 6
const checkArr = [];
function selectCheck(args){

tr= args.parentNode.parentNode;
let index = tr.rowIndex;
checkArr.push(arr[index-1].Company);
}

function deleteCheck(){
    for(i=0;i<checkArr.length;i++)
    {
        for(j=0;j<arr.length;j++){
            if(checkArr[i]==arr[j].Company){
                arr.splice(j,1);
            }
        }
    }
    populate();
}


