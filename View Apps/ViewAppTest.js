const apps = [
    {
        name: "Andrew Veteto",
        date: "1/1/2023",
        time: "8:00-8:15am"
    },
    {
        name: "Justin Veteto",
        date: "1/1/2023",
        time: "8:00-8:15am"
    },
    {
        name: "Hannah Veteto",
        date: "1/1/2023",
        time: "8:00-8:15am"
    }
]

//Var to hold incoming data to make Elements
let elements = [];

let num = apps.length;
let cycle = 0;

//Makes App List Element
function eleMaker() {
    cycle = 0;
    for (let obj in apps) {
        let x = apps[obj];
        elements.push(new app(x.name, x.date, x.time));
        cycle++;
    }
}

function app(Name, Date, Time){

    //Constructor
    this.name = Name;
    this.date = Date;
    this.time = Time;

    //creating elements
    this.field = document.getElementsByClassName("appList");
    this.ele = document.createElement("span"); //Holds all elements
    this.eleButton = document.createElement("button"); //Arrow Button
    this.eleItem = document.createElement("span"); //Holds info
    this.eleName = document.createElement("p");
    this.eleDate = document.createElement("p");
    this.eleTime =  document.createElement("p");

    //Setting values
    this.eleName.innerHTML = Name;
    this.eleDate.innerHTML = Date;
    this.eleTime.innerHTML = Time;
    this.eleButton.innerHTML=">";

    //adding styling
    this.ele.classList.add("app");
    this.eleButton.classList.add("arrowBtn");
    this.eleItem.classList.add("appListItems");

    //Writing elements to screen
    this.ele.append(this.eleButton);
    this.eleItem.append(this.eleName);
    this.eleItem.append(this.eleDate);
    this.eleItem.append(this.eleTime);
    this.ele.append(this.eleItem);

    //Displays All Apps
    this.field[0].appendChild(this.ele);
}