var arr = [{Company:"Samsung",Model:"Galaxy",Memory:64,Price:15000},
{Company:"Nokia",Model:"S730",Memory:128,Price:22000},
{Company:"Xiomi",Model:"Note",Memory:32,Price:12000},
{Company:"Motorola",Model:"G10",Memory:32,Price:15000},
{Company:"Apple",Model:"S12",Memory:64,Price:25000}];
design();

function populate(){
    var text="";
text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th></tr>";
for(i=0;i<arr.length;i++){
    text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
}
text += "</table>";

document.getElementById('container').innerHTML=text;

}

function design(args){
var text="";
text += "<table><tr><th>Company</th><th>Model</th><th>Memory (GB)</th><th>Price (Rs)</th></tr>";
for(i=0;i<arr.length;i++){
    text += "<tr><td>"+arr[i].Company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"
    +arr[i].Price+"</td></tr>";
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
