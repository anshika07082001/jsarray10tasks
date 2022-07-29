var arr = [{Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000,Quantity:30,Rating:""},{Company:"Nokia",Model:"S730",Memory:128,Price:22000,Quantity:20,Rating:""},{Company:"Xiomi",Model:"Note",Memory:32,Price:12000,Quantity:10,Rating:""},{Company:"Motorola",Model:"G10",Memory:32,Price:15000,Quantity:20,Rating:""},{Company:"Apple",Model:"S12",Memory:64,Price:25000,Quantity:30,Rating:""}];
design();
populate();
function populate()
{
    var text="";
    text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";
    for(i=0;i<arr.length;i++)
    {
        text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td><td>"+"<input type='checkbox' id='entryDelete' onclick='selectCheck(this)'>"+"</td><td>"+arr[i].Rating+"</td></tr>"
    }
    text += "</table>";
    document.getElementById('container').innerHTML=text;
}
function updSelect()
{
    text="";
    for(i=0;i<arr.length;i++)
    {
        text += "<option>"+arr[i].Company+" "+arr[i].Model+"</option>";
    }
    document.getElementById('selectProductBill').innerHTML=text;
    document.getElementById('selectUpdate').innerHTML=text;
}
function design(args)
{
    var text="";
    text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";
    for(i=0;i<arr.length;i++)
    {
        text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td><td>"+"<input type='checkbox' id='entryDelete' onclick='selectCheck(this)'>"+"</td></tr>";
    }
    text += "</table>";
    document.getElementById('container').innerHTML=text;
}
// ////////////////////////////////////////////////task2////////////////////////////////////////////////////////////////  

function selectproducts()
{
    var selectproduct = document.getElementById('selectproducts');
    var index = selectproduct.selectedIndex;
    for(i=0;i<arr.length;i++)
    {
        if(index == 1)
        {
            var text ="";
            if(document.getElementById('productsquantity').value == arr[i].Company)
            {
                text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td></tr>";
                document.getElementById('searchtable').innerHTML+=text;
            }
        }
        if(index==2)
        {
            var text="";
            if(document.getElementById('productsquantity').value == arr[i].Model)
            {
                text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td></tr>";
                document.getElementById('searchtable').innerHTML+=text;
            }
        }
        if(index==3)
        {
            var text="";
            if(document.getElementById('productsquantity').value == arr[i].Memory)  
            {
                text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td></tr>";
                document.getElementById('searchtable').innerHTML+=text;
            }
        }
        if(index==4)
        {
            var text="";
            if(document.getElementById('productsquantity').value == arr[i].Price)
            {
                text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td></tr>";
                document.getElementById('searchtable').innerHTML+=text;
            }
        }
    }
    document.getElementById('selectproducts').value="-Select field-";
    document.getElementById('productsquantity').value="";
}
// //////////////////////////////////////////////////////////////task3//////////////////////////////////////////////////

function sorted()
{
    var selectsort1 = document.getElementById('sort1').selectedIndex;
    var selectsort2 = document.getElementById('sort2').selectedIndex;
    if(selectsort1==1)
    {
        if(selectsort2==1)
        {
            arr.sort((a,b)=>{
            let fa = a.Company.toLowerCase(),
            fb = b.Company.toLowerCase();
            if(fa<fb){return -1;}
            if(fa>fb){return 1;}
            return 0;});
            populate();
        }
        if(selectsort2==2)
        {
        arr.sort((a,b)=>{
            let fa =a.Model.toLowerCase(),
            fb = b.Model.toLowerCase();
            if(fa<fb){return -1;}
            if(fa>fb){return 1;}
            return 0;});
            populate();
        }
        if(selectsort2==3)
        {
            arr.sort((a,b)=>{
            return a.Memory-b.Memory;
            });
            populate();
        }
        if(selectsort2==4)
        {
            arr.sort((a,b)=>{
            return a.Price-b.Price;
            });
            populate();
        }
    }
    if(selectsort1==2)
    {
        if(selectsort2==1)
        {
            arr.sort((a,b)=>{
            let fa = a.Company.toLowerCase(),
            fb = b.Company.toLowerCase();
            if(fb<fa){return -1;}
            if(fb>fa){return 1;}
            return 0;});
            populate();
        }
        if(selectsort2==2)
        {
            arr.sort((a,b)=>{
            let fa =a.Model.toLowerCase(),
            fb = b.Model.toLowerCase();
            if(fb<fa){return -1;}
            if(fb>fa){return 1;}
            return 0;});
            populate();
        }
        if(selectsort2==3)
        {
            arr.sort((a,b)=>{
            return b.Memory-a.Memory;
            });
            populate();
        }
        if(selectsort2==4)
        {
            arr.sort((a,b)=>{
            return b.Price-a.Price;
            });
            populate();
        }   
    }
}

// //////////////////////////////       task4       ////////////////////////////////////
function newdetails()
{
    var company = document.getElementById('inputcompany').value;
    var model = document.getElementById('inputmodel').value;
    var memory = document.getElementById('inputmemory').value;
    var price = document.getElementById('inputprice').value;
    const arra = {Company:company,Model:model,Memory:memory,Price:price,Quantity:"0"};
    arr.splice(2,0,arra);
    populate();
    updSelect();
}

// /////////////////////////            task 6          ///////////////////////////////
const checkArr = [];
function selectCheck(args)
{
    tr= args.parentNode.parentNode;
    let index = tr.rowIndex;
    checkArr.push(arr[index-1].Company);
}
function deleteCheck()
{
    for(i=0;i<checkArr.length;i++)
    {
        for(j=0;j<arr.length;j++)
        {
            if(checkArr[i]==arr[j].Company)
            {
                arr.splice(j,1);
            }
        }
    }
    populate();
    updSelect();
}

// task 8

var opts = document.getElementById('selectUpdate');
    for(i=0;i<arr.length;i++){
        var opt = arr[i].Company+"  "+ arr[i].Model;
        var opts1 = document.createElement('option');
        opts1.textContent=opt;
        opts.appendChild(opts1);
    }
function btnUpdate(){
    var Updinput = document.getElementById('productUpdate').value;
    value2 = document.getElementById('selectUpdate').value;
    var splitArr=value2.split(" ");
    var val=splitArr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i].Company==val)
        {
            arr[i].Quantity=Updinput;  
        }
     }
    populate();
    updSelect();
}

// task 9

var opts = document.getElementById('selectProdRate');
    for(i=0;i<arr.length;i++){
        var opts1 = document.createElement('option');
        opts1.textContent=arr[i].Company;
        opts.appendChild(opts1);
    }
const numarr = [1,2,3,4,5];
var opts = document.getElementById('selectRate');
for(i=0;i<numarr.length;i++){
    var opts1 = document.createElement('option');
    opts1.textContent=numarr[i];
    opts.appendChild(opts1);
}
function Rating(){
    value3 = document.getElementById('selectProdRate').value;
    value4 = document.getElementById('selectRate').value;
    for(i=0;i<arr.length;i++){
        if(arr[i].Company==value3)
            {
                arr[i].Rating=value4;
            }
    }
    populate();
}

// task 10

function minMaxSearch(){
var minInp = document.getElementById('minInput').value;
var maxInp = document.getElementById('maxInput').value;
text="";
for(i=0;i<arr.length;i++){
    if(minInp<=arr[i].Price && maxInp>=arr[i].Price)
    {
        text += "<tr><td>"+arr[i].Company+"</td><td>" +arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"
        +arr[i].Quantity+"</td></tr>";
    }         
    }
    document.getElementById('tableRen').innerHTML=text;
    document.getElementById('minInput').value="";
    document.getElementById('maxInput').value="";
}