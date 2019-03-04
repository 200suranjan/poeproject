var main = document.getElementById("main");
var msgs = document.getElementById("msgs");
var affixlist =[];

var Claw = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/Claws.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();



affixlist[0] =(function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/clawmana.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

affixlist[1] = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/flatfire.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

affixlist[2] = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/flatphys.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

affixlist[3] = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/physacc.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

affixlist[4] = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/physper.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();


var Selecteditem = {
        "state":0,
        "prefix_1":"",
        "prefix_2":"",
        "prefix_3":"",
        "prefix_1_id":-1,
        "prefix_2_id":-1,
        "prefix_3_id":-1
    };
 


function SelectClaws()
{
    document.getElementById("Title").style.textAlign="center";
    document.getElementById("Title").innerHTML = "<h1>Select A claw </h1>";
for(i=0;i<Claw.length;i++)
{
    var divforclaws = `<Div onclick="selectClaw(${i})" class="claws">`;
    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML +divforclaws + `${Claw[i].icon}</br>${Claw[i].info}</div>`;    
}
document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.replace(/(\n)/g,"</br>");
}

function selectClaw(id)
{
    var divforclaws = `<Div class="crafting">`;
    document.getElementById("Title").innerHTML = "<h1>Craft Your Claw </h1>";
    main.innerHTML="";
    divforclaws2 = `<div id='affixes'></div></div>`
    main.innerHTML= divforclaws + `${Claw[id].icon}</br>${Claw[id].info}`+divforclaws2;    
    
    main.innerHTML= main.innerHTML+ `<button onclick="trans()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToMagic.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="alt()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollMagic.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="Augment()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToMagic.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="regal()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeMagicToRare.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="alch()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyUpgradeToRare.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="chaos()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1"></button>`;

    main.innerHTML= main.innerHTML+ `<button onclick="exalt()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png?scale=1"></button>`;
    
    main.innerHTML= main.innerHTML+ `<button onclick="scour()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyConvertToNormal.png?scale=1"></button>`;  
    
    main.innerHTML= main.innerHTML+ `<button onclick="Annul()"><img src="https://web.poecdn.com/image/Art/2DItems/Currency/AnnullOrb.png?scale=1"></button>`;
    updateaffix();

    document.getElementById("main").innerHTML = document.getElementById("main").innerHTML.replace(/(\n)/g,"</br>");

}

function updateaffix()
{
    var affixarea = document.getElementById("affixes");    
    switch(Selecteditem.state){
        case 0:
            affixarea.style.color="white";            
            break;
        case 1:
            affixarea.style.color="Blue";
            break;
        case 2:
            affixarea.style.color="Yellow";
            break;        
        default:
        affixarea.style.color="white";
            break;
    }
    affixarea.innerHTML =`${Selecteditem.prefix_1}</br>${Selecteditem.prefix_2}</br>${Selecteditem.prefix_3}</br>`    
}

function chaos(){

}

function exalt(){

}
function alt(){
    if(Selecteditem.state ==1)
    {
    scour();
    trans();    
    }
    else
    {
        msgs.innerHTML="Wrong Rarity";   
    }
}
function scour(){    
    if(Selecteditem.state !=0)
    {
        Selecteditem.state =0;
        Selecteditem.prefix_1_id=-1;
        Selecteditem.prefix_2_id=-1;
        Selecteditem.prefix_3_id=-1;
        Selecteditem.prefix_1="";
        Selecteditem.prefix_2="";
        Selecteditem.prefix_3="";
        msgs.innerHTML = "";
    }
    else{
        msgs.innerHTML="Wrong Rarity";
    }
    updateaffix();

}
function alch(){

}
function regal(){

}
function Augment(){

}
function Annul(){

}
function trans(){
    if(Selecteditem.state ==0)
    {   
        Selecteditem.state =1;        
        var selectedaffix =0;

        selectedaffix = Math.floor( Math.random()*(affixlist.length));           

        Selecteditem.prefix_1_id=selectedaffix; 
        
        selectedaffix = Math.floor( Math.random() *(affixlist[selectedaffix].length));        
               
        Selecteditem.prefix_1=affixlist[parseInt( Selecteditem.prefix_1_id)][selectedaffix]["affix"];
        
        if(Math.random()<0.5)
        {
            Selecteditem.prefix_2_id=selectnewprefix(); 
            selectedaffix = Math.floor(Math.random()*(affixlist[Selecteditem.prefix_2_id].length));
            Selecteditem.prefix_2=affixlist[Selecteditem.prefix_2_id][selectedaffix]["affix"];             
        }  
        msgs.innerHTML = "";      
    }
    else
    {
        msgs.innerHTML="Wrong Rarity";
    }    
    updateaffix();
    
}

function selectnewprefix()
{
    var t = Math.floor(Math.random()*affixlist.length);
    if(t != Selecteditem.prefix_1_id && t != Selecteditem.prefix_2_id && t != Selecteditem.prefix_3_id)
    {
        return t;
    }
    else
    {
        return selectnewprefix();
    }
}

SelectClaws();







