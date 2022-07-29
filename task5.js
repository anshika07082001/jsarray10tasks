var arr = [{Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000,Quantity:30},
{Company:"Nokia",Model:"S730",Memory:128,Price:22000,Quantity:20},
{Company:"Xiomi",Model:"Note",Memory:32,Price:12000,Quantity:10},
{Company:"Motorola",Model:"G10",Memory:32,Price:15000,Quantity:20},
{Company:"Apple",Model:"S12",Memory:64,Price:25000,Quantity:30}];
populate();
function populate()
{
    var text="";
    text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><th>Quantity</th></tr>";
    for(i=0;i<arr.length;i++)
    {
        text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td></tr>";
    }
    text += "</table>";
    document.getElementById('dispTable').innerHTML=text;
}
var opts = document.getElementById('selectProductBill');
for(i=0;i<arr.length;i++)
{
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
    text += "<tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";
    for(i=0;i<tempArr.length;i++)
    {
        text += "<tr><td>"+tempArr[i].Company+"</td><td>" +tempArr[i].Quantity+"</td><td>"+tempArr[i].Amount+"</td></tr>";
    }
    document.getElementById('addBill').innerHTML=text;    
}
function addSelect()
{
    inputQuantity = document.getElementById('productInput').value;
    var selectedproduct = document.getElementById('selectProductBill').selectedIndex;
    value1 = document.getElementById('selectProductBill').value;
    //code to find the price of the selected item
    var basicPrice=0;
    var splitArr=value1.split(" ");
    var val=splitArr[0];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].Company==val)
        {
            basicPrice=arr[i].Price;   
        }
    }
    //code to find the index of selected item
    var ind=-1;
    for(i=0;i<arradd1.length;i++)
    {
        if(arradd1[i].Company==value1)
        {
            ind=i;
        }
    }
    if(ind==-1)//push new items
    {
        if(inputQuantity>arr[selectedproduct].Quantity)
        {
            alert("out of stock");
            return ;
        }
        sum1=inputQuantity*arr[selectedproduct].Price;
        arradd={Company:value1,Quantity:inputQuantity,Amount:sum1};
        arradd1.push(arradd);
        
        arr[selectedproduct].Quantity-=inputQuantity;
        populate();
        populateGenerate(arradd1);
        
    }    
    else//item already exists
    {
        if(inputQuantity>arr[selectedproduct].Quantity)
        {
            alert("out of stock");
            return ;
        }
        arr[selectedproduct].Quantity-=inputQuantity;
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