//Desplazamiento en la pagina
const links = document.getElementsByClassName("linksPages");

for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

function clickHandler(e){
    e.preventDefault();
    const href=this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;;
    scroll({
        top:offsetTop,
        behavior:"smooth",
    });
}
//Desplazamiento en la pagina




//Cargar datos
function loadProfile(){
    fetch('/data/profile.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            document.querySelector("#information").textContent=d.info;
            document.getElementsByClassName("name")[0].textContent=
            document.getElementsByClassName("name")[1].textContent=d.name;
            document.querySelector("#dob").textContent=d.dob;
            document.querySelector("#address").textContent=d.address;
            document.querySelector("#email").textContent=d.email;
            document.querySelector("#phone").textContent=d.phone;
        });
    });
}

function loadContacts(){
    fetch('/data/contact.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            let p = [document.createElement("p"),document.createElement("p"),document.createElement("p"),document.createElement("p")];
            let a = [document.createElement("a"),document.createElement("a")];
            p[0].textContent=d.email;
            p[1].textContent=d.phone;
            p[2].textContent=d.ussLinkedin;
            p[3].textContent=d.ussGit;
            a[1].href=d.linkGit;
            a[0].href=d.linkLinkedin;
            let divs = document.querySelector("#contacts").children;
            divs[0].appendChild(p[0]);
            divs[1].appendChild(p[1]);
            divs[2].appendChild(a[0]);
            a[0].appendChild(p[2])
            divs[3].appendChild(a[1]);
            a[1].appendChild(p[3])


        });
    })
}

function loadEducation(){
    fetch('/data/education.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            let li = document.createElement("li");
            const span = document.createElement("span");
            const h4 = document.createElement("h4");
            const p = [document.createElement("p"),document.createElement("p")];
            span.textContent=d.anio;
            h4.textContent=d.degree;
            p[0].textContent=d.place;
            p[1].textContent=d.description;
            li.appendChild(span);
            li.appendChild(h4);
            li.appendChild(p[0]);
            li.appendChild(p[1]);
            let ul = document.querySelector("#ulEducation");
            ul.appendChild(li);
        });
    })
}

function loadExperience(){
    fetch('/data/experience.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            let li = document.createElement("li");
            const span = document.createElement("span");
            const h4 = document.createElement("h4");
            const p = [document.createElement("p"),document.createElement("p")];
            span.textContent=d.anio;
            h4.textContent=d.work;
            p[0].textContent=d.place;
            p[1].textContent=d.description;
            li.appendChild(span);
            li.appendChild(h4);
            li.appendChild(p[0]);
            li.appendChild(p[1]);
            let ul = document.querySelector("#ulExperience");
            ul.appendChild(li);
        });
    })
}

function loadSkills(){
    fetch('/data/skills.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            let div = document.createElement("div");
            let divDatos = document.createElement("div")
            const p = document.createElement("p");
            const h4 = document.createElement("h4");
            let divTotal = document.createElement("div");
            let divProgress = document.createElement("div");
            p.textContent=d.porcent+"%";
            h4.textContent=d.tittle;
            divDatos.appendChild(h4);
            divDatos.appendChild(p);
            div.setAttribute("class","divSigleSkill");
            divTotal.setAttribute("class","divTotal");
            divProgress.setAttribute("class","divProgress");
            divTotal.style.width="40ch";
            divProgress.style.width=((d.porcent*40)/100)+"ch";
            div.appendChild(divDatos);
            divTotal.appendChild(divProgress);
            div.appendChild(divTotal);
            let divSkills = document.querySelector("#allSkills");
            divSkills.appendChild(div);
        });
    })
}

function loadOthers(){
    fetch('/data/other.json')
    .then(resp => resp.json())
    .then(data =>{
        data.forEach(d => {
            const p = document.createElement("p");
            const h4 = document.createElement("h4");
            let li = document.createElement("li");
            h4.textContent=d.name;
            p.textContent=d.desc;
            li.appendChild(h4);
            li.appendChild(p);
            
            if(d.type=="l"){
                let ul = document.querySelector("#ulLanguages");
                console.log(ul);
                ul.appendChild(li);
            }
            if(d.type=="t"){
                let ul = document.querySelector("#ulTools");
                ul.appendChild(li);
            }
        });
    })
}

loadProfile();
loadEducation();
loadExperience();
loadSkills();
loadContacts();
loadOthers();
