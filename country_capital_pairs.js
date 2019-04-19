
var pairs = [
    {"country":"Afghanistan","capital":"Kabul"},
    {"country":"Albania","capital":"Tirana"},
    {"country":"Algeria","capital":"Algiers"},
    {"country":"American Samoa","capital":"Pago Pago"},
    {"country":"Andorra","capital":"Andorra la Vella"},
    {"country":"Angola","capital":"Luanda"},
    {"country":"Anguilla","capital":"The Valley"},
    {"country":"Argentina","capital":"Buenos Aires"},
    {"country":"Armenia","capital":"Yerevan"},
    {"country":"Australia","capital":"Canberra"},
    {"country":"Austria","capital":"Vienna"},
    {"country":"Bahamas","capital":"Nassau"},
    {"country":"Bahrain","capital":"Manama"},
    {"country":"Bangladesh","capital":"Dhaka"},
    {"country":"Belarus","capital":"Minsk"},
    {"country":"Belgium","capital":"Brussels"},
    {"country":"Bermuda","capital":"Hamilton"},
    {"country":"Bolivia","capital":"Sucre"},
    {"country":"Bosnia and Herzegovina","capital":"Sarajevo"},
    {"country":"Botswana","capital":"Gaborone"},
    {"country":"Brazil","capital":"Brasília"},
    {"country":"British Virgin Islands","capital":"Road Town"},
    {"country":"Bulgaria","capital":"Sofia"},
    {"country":"Cambodia","capital":"Phnom Penh"},
    {"country":"Cameroon","capital":"Yaoundé"},
    {"country":"Canada","capital":"Ottawa"},
    {"country":"Cayman Islands","capital":"George Town"},
    {"country":"Central African Republic","capital":"Bangui"},
    {"country":"Chad","capital":"N'Djamena"},
    {"country":"Chile","capital":"Santiago"},
    {"country":"China","capital":"Beijing"},
    {"country":"Colombia","capital":"Bogotá"},
    {"country":"Costa Rica","capital":"San José"},
    {"country":"Croatia","capital":"Zagreb"},
    {"country":"Cuba","capital":"Havana"},
    {"country":"Cyprus","capital":"Nicosia"},
    {"country":"Czech Republic","capital":"Prague"},
    {"country":"Côte d'Ivoire","capital":"Yamoussoukro"},
    {"country":"Democratic Republic of the Congo","capital":"Kinshasa"},
    {"country":"Denmark","capital":"Copenhagen"},
    {"country":"Dominica","capital":"Roseau"},
    {"country":"Dominican Republic","capital":"Santo Domingo"},
    {"country":"East Timor (Timor-Leste)","capital":"Dili"},
    {"country":"Easter Island","capital":"Hanga Roa"},
    {"country":"Ecuador","capital":"Quito"},
    {"country":"Egypt","capital":"Cairo"},
    {"country":"El Salvador","capital":"San Salvador"},
    {"country":"Estonia","capital":"Tallinn"},
    {"country":"Ethiopia","capital":"Addis Ababa"},
    {"country":"Fiji","capital":"Suva"},
    {"country":"Finland","capital":"Helsinki"},
    {"country":"France","capital":"Paris"},
    {"country":"Gabon","capital":"Libreville"},
    {"country":"Gambia","capital":"Banjul"},
    {"country":"Germany","capital":"Berlin"},
    {"country":"Ghana","capital":"Accra"},
    {"country":"Gibraltar","capital":"Gibraltar"},
    {"country":"Greece","capital":"Athens"},
    {"country":"Greenland","capital":"Nuuk"},
    {"country":"Grenada","capital":"St. George's"},
    {"country":"Guam","capital":"Hagåtña"},
    {"country":"Guatemala","capital":"Guatemala City"},
    {"country":"Guinea","capital":"Conakry"},
    {"country":"Guyana","capital":"Georgetown"},
    {"country":"Haiti","capital":"Port-au-Prince"},
    {"country":"Honduras","capital":"Tegucigalpa"},
    {"country":"Hungary","capital":"Budapest"},
    {"country":"Iceland","capital":"Reykjavík"},
    {"country":"India","capital":"New Delhi"},
    {"country":"Indonesia","capital":"Jakarta"},
    {"country":"Iran","capital":"Tehran"},
    {"country":"Iraq","capital":"Baghdad"},
    {"country":"Ireland","capital":"Dublin"},
    {"country":"Israel","capital":"Jerusalem"},
    {"country":"Italy","capital":"Rome"},
    {"country":"Jamaica","capital":"Kingston"},
    {"country":"Japan","capital":"Tokyo"},
    {"country":"Kenya","capital":"Nairobi"},
    {"country":"Kosovo","capital":"Pristina"},
    {"country":"Kuwait","capital":"Kuwait City"},
    {"country":"Kyrgyzstan","capital":"Bishkek"},
    {"country":"Laos","capital":"Vientiane"},
    {"country":"Latvia","capital":"Riga"},
    {"country":"Lebanon","capital":"Beirut"},
    {"country":"Liberia","capital":"Monrovia"},
    {"country":"Libya","capital":"Tripoli"},
    {"country":"Liechtenstein","capital":"Vaduz"},
    {"country":"Lithuania","capital":"Vilnius"},
    {"country":"Luxembourg","capital":"Luxembourg"},
    {"country":"Macedonia","capital":"Skopje"},
    {"country":"Madagascar","capital":"Antananarivo"},
    {"country":"Malaysia","capital":"Kuala Lumpur"},
    {"country":"Mali","capital":"Bamako"},
    {"country":"Malta","capital":"Valletta"},
    {"country":"Mexico","capital":"Mexico City"},
    {"country":"Moldova","capital":"Chisinau"},
    {"country":"Monaco","capital":"Monaco"},
    {"country":"Mongolia","capital":"Ulaanbaatar"},
    {"country":"Morocco","capital":"Rabat"},
    {"country":"Mozambique","capital":"Maputo"},
    {"country":"Nauru","capital":"Yaren"},
    {"country":"Nepal","capital":"Kathmandu"},
    {"country":"Netherlands","capital":"Amsterdam"},
    {"country":"New Caledonia","capital":"Nouméa"},
    {"country":"New Zealand","capital":"Wellington"},
    {"country":"Nigeria","capital":"Abuja"},
    {"country":"Niue","capital":"Alofi"},
    {"country":"North Korea","capital":"Pyongyang"},
    {"country":"Norway","capital":"Oslo"},
    {"country":"Oman","capital":"Muscat"},
    {"country":"Pakistan","capital":"Islamabad"},
    {"country":"Palestine","capital":"Jerusalem"},
    {"country":"Panama","capital":"Panama City"},
    {"country":"Papua New Guinea","capital":"Port Moresby"},
    {"country":"Paraguay","capital":"Asunción"},
    {"country":"Peru","capital":"Lima"},
    {"country":"Philippines","capital":"Manila"},
    {"country":"Poland","capital":"Warsaw"},
    {"country":"Portugal","capital":"Lisbon"},
    {"country":"Puerto Rico","capital":"San Juan"},
    {"country":"Qatar","capital":"Doha"},
    {"country":"Republic of China (Taiwan)","capital":"Taipei"},
    {"country":"Republic of the Congo","capital":"Brazzaville"},
    {"country":"Romania","capital":"Bucharest"},
    {"country":"Russia","capital":"Moscow"},
    {"country":"Rwanda","capital":"Kigali"},
    {"country":"Saudi Arabia","capital":"Riyadh"},
    {"country":"Scotland","capital":"Edinburgh"},
    {"country":"Senegal","capital":"Dakar"},
    {"country":"Serbia","capital":"Belgrade"},
    {"country":"Sierra Leone","capital":"Freetown"},
    {"country":"Singapore","capital":"Singapore"},
    {"country":"Slovakia","capital":"Bratislava"},
    {"country":"Slovenia","capital":"Ljubljana"},
    {"country":"Solomon Islands","capital":"Honiara"},
    {"country":"Somalia","capital":"Mogadishu"},
    {"country":"South Africa","capital":"Pretoria"},
    {"country":"South Korea","capital":"Seoul"},
    {"country":"Spain","capital":"Madrid"},
    {"country":"Sri Lanka","capital":"Sri Jayawardenapura Kotte"},
    {"country":"Sudan","capital":"Khartoum"},
    {"country":"Suriname","capital":"Paramaribo"},
    {"country":"Swaziland","capital":"Mbabane"},
    {"country":"Sweden","capital":"Stockholm"},
    {"country":"Switzerland","capital":"Bern"},
    {"country":"Syria","capital":"Damascus"},
    {"country":"Tajikistan","capital":"Dushanbe"},
    {"country":"Tanzania","capital":"Dodoma"},
    {"country":"Thailand","capital":"Bangkok"},
    {"country":"Togo","capital":"Lomé"},
    {"country":"Tonga","capital":"Nukuʻalofa"},
    {"country":"Trinidad and Tobago","capital":"Port of Spain"},
    {"country":"Tunisia","capital":"Tunis"},
    {"country":"Turkey","capital":"Ankara"},
    {"country":"Turkmenistan","capital":"Ashgabat"},
    {"country":"Uganda","capital":"Kampala"},
    {"country":"Ukraine","capital":"Kiev"},
    {"country":"United Arab Emirates","capital":"Abu Dhabi"},
    {"country":"United Kingdom; England","capital":"London"},
    {"country":"United States","capital":"Washington, D.C."},
    {"country":"United States Virgin Islands","capital":"Charlotte Amalie"},
    {"country":"Uruguay","capital":"Montevideo"},
    {"country":"Uzbekistan","capital":"Tashkent"},
    {"country":"Vanuatu","capital":"Port Vila"},
    {"country":"Vatican City","capital":"Vatican City"},
    {"country":"Venezuela","capital":"Caracas"},
    {"country":"Vietnam","capital":"Hanoi"},
    {"country":"Wales","capital":"Cardiff"},
    {"country":"Yemen","capital":"Sanaá"},
    {"country":"Zambia","capital":"Lusaka"},
    {"country":"Zimbabwe","capital":"Harare"}
];

answer_history = [];
let capitals = [];
for (var i = 0 ; i < pairs.length; i ++){
    capitals.push(pairs[i].capital);
}

let country = document.getElementById("pr2_question");
let answer = document.getElementById("pr2_answer");
let submit_button = document.getElementById("pr2_submit");
let result_table = document.getElementById("result_table");

let all = document.getElementById("all");
let correct = document.getElementById("correct");
let wrong = document.getElementById("wrong");
let id_count = 0;



var answer_pair;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillContent(divObj, content) {
    /*
      Fill the contents of the object "divObj" with the string "content"
    */
    divObj.innerHTML = content;
    //왼쪽 테이블을 업데이트 할 때 이 함수를 사용할 것이다.
}

function chooseQuestion(){
    answer_pair = pairs[getRandomInt(0,171)];
    current_answer = answer_pair.capital;
    return answer_pair.country;
}

function refreshQuestion(){
    fillContent(country, chooseQuestion());
    answer.value = "";
}

function checkAnswer(){
    if (answer.value.toUpperCase() ===answer_pair.capital.toUpperCase()){
        answer_history.push([answer_pair.country,answer.value,"correct",answer_pair.capital,id_count])
    }
    else{
        answer_history.push([answer_pair.country,answer.value,"wrong",answer_pair.capital,id_count])
    }
    id_count++;
}

function initializeTable() {
    /*
      Initialize the courses in the right plane
    */
    var myRow = result_table.rows.length;
    for (var i = 0; i < myRow - 3; i++){
        result_table.deleteRow(3);
    }
    //테이블의 두 번째 row 를 계속해서 없애는 함수이다.
}

function addAllContentsToTable(){
    for (var i = 0; i < answer_history.length; i++){
        var row = result_table.insertRow(result_table.rows.length);
        var col1 = row.insertCell(0);
        var col2 = row.insertCell(1);
        var col3 = row.insertCell(2);
        var col4 = row.insertCell(3);

        if (answer_history[i][2]==="correct"){
            col1.innerHTML = answer_history[i][0];
            col1.style.color = "green";
            col2.innerHTML = answer_history[i][1];
            col2.style.color = "green";
            col3.innerHTML ="<i class=\"fas fa-check\"></i><input type = 'button' value = 'delete' onclick = 'deleteById("+answer_history[i][4]+ ")'>"
            col3.style.color = "green";
        }
        else{
            col1.innerHTML = answer_history[i][0];
            col1.style.color = "red";
            col2.innerHTML = "<del>"+answer_history[i][1]+"<del>";
            col2.style.color = "red";
            col3.innerHTML = answer_history[i][3]+"<input type = 'button' value = 'delete' onclick = 'deleteById("+answer_history[i][4]+ ")'>"
            col3.style.color = "red";
        }
    }
}

function addCorrectContentsToTable(){

    for (var i = 0; i < answer_history.length; i++){
        if (answer_history[i][2]==="correct"){
            var row = result_table.insertRow(result_table.rows.length);
            var col1 = row.insertCell(0);
            var col2 = row.insertCell(1);
            var col3 = row.insertCell(2);
            var col4 = row.insertCell(3);

            col1.innerHTML = answer_history[i][0];
            col1.style.color = "green";
            col2.innerHTML = answer_history[i][1];
            col2.style.color = "green";
            col3.innerHTML ="<i class=\"fas fa-check\"></i> <input type = 'button' value = 'delete' onclick = 'deleteById("+answer_history[i][4]+ ")'>"
            col3.style.color = "green";
        }
    }
}
function addWrongContentsToTable(){
    for (var i = 0; i <answer_history.length; i++){

        if (answer_history[i][2] === "wrong"){

            var row = result_table.insertRow(result_table.rows.length);
            var col1 = row.insertCell(0);
            var col2 = row.insertCell(1);
            var col3 = row.insertCell(2);
            var col4 = row.insertCell(3);
            col1.innerHTML = answer_history[i][0];
            col1.style.color = "red";
            col2.innerHTML = "<del>"+answer_history[i][1]+"<del>";
            col2.style.color = "red";
            col3.innerHTML = answer_history[i][3] + "<input type = 'button' value = 'delete' onclick = 'deleteById("+answer_history[i][4]+ ")'>";
            col3.style.color = "red";
        }
    }

}


function deleteById(id){

    for (var i = 0 ; i < answer_history.length; i++){
        if (answer_history[i][4] === id){
            console.log("well perfoming");
            answer_history.splice(i,1);
        }
    }

    console.log(answer_history);

    initializeTable();

    addAllContentsToTable();
    refreshQuestion();
}

function updateTable(){
    checkAnswer();
    initializeTable();

    addAllContentsToTable();
    refreshQuestion();
}

function filterTable(){
    initializeTable();
    if (all.checked){
        initializeTable();
        addAllContentsToTable()
    }
    else if (correct.checked){
        addCorrectContentsToTable()
    }
    else{
        addWrongContentsToTable()
    }
}

function checkEnter(event){
    if(event.keyCode == 13){
        updateTable();
    }
}
function enterkey() {
    if (window.event.keyCode == 13) {

        // 엔터키가 눌렸을 때 실행할 내용
        updateTable();


    }
}

$( document ).ready(function() {
    var country_capital_pairs = pairs
});

$(function() {
    $("#pr2_answer").autocomplete({
        source: capitals,
        select: function(event, ui) {
             if (window.event.keyCode !=13){
                console.log(ui.item.value);
                answer.value = ui.item.value;
                updateTable();
             }
            this.value="";
            return false;
        }
    });
});

submit_button.addEventListener('click',updateTable);
answer.onkeydown = enterkey;
all.addEventListener('click',filterTable);
correct.addEventListener('click',filterTable);
wrong.addEventListener('click',filterTable);

refreshQuestion();
filterTable();

