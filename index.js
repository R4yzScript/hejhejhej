postBtn = document.getElementById("postBtn");
let text = document.getElementById("text");
let numPost = 0

postBtn.onclick = function(){
    numPost +=1;
    numPost = String(numPost);
    let divName = div + numPost
    let (divName) = document.createElement("div");
    divName.className = "post";
    divName.textContent = `${text}`;
    document.getElementById("text").textContent = "";
}