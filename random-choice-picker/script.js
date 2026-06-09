let text = document.querySelector('.text')

text.addEventListener("keydown",(event)=>{
    if(event.key === 'Enter'){
        let ans = result(text.value)
        let output = document.querySelector('.output')
        let input = document.querySelector('.input')
        input.innerHTML = `Input : ${ans[1]}`
        output.innerHTML = `Output : ${ans[0]}`
    }
})

function result(text){
    let l = []
    let n = text.length
    let str = ''
    for(let i = 0; i<n; i++){
        if(text[i] === ','){
            l.push(str.trim())
            str = ''
        }
        else{
            str += text[i]
        }
    }
    l.push(str.trim())
    let len = l.length
    return [l[Math.floor(Math.random()*len)],l]
}