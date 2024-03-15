window.fetch ("https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json")
.then((data)=>data.json())
.then((res)=>{
    console.log(res);
    for(let ele of res){
        console.log(ele);
        let demo = document.getElementById("demo");
        console.log(demo);
        let tr =`
        <tr>
        <td>${ele.name}</td>
        <td>${ele.dial_code}</td>
        <td>${ele.code}</td>
        </tr>`
        demo.innerHTML += tr;
    }
    
})