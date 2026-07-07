document.addEventListener("DOMContentLoaded", () => {

    const copyButton = document.getElementById("copyAddress");
    const toast = document.getElementById("toast");

    copyButton.addEventListener("click", async (e) => {

        e.preventDefault();

        const address = "부산광역시 해운대구 센텀중앙로 79";

        try{

            await navigator.clipboard.writeText(address);

        }catch{

            const textarea = document.createElement("textarea");

            textarea.value = address;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            document.body.removeChild(textarea);

        }

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        },2000);

    });

});
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

fades.forEach(item=>observer.observe(item));
window.addEventListener("load", function(){

    window.scrollTo(0,0);

});
