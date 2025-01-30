function mudarCor(){
    const cores = ['#ff9a9e' , '#fad0c4' , '#ffdde1' , '#fc6076' , '#ff6f61'];
    document.body.style.background = `linear-gradient(135deg, ${cores[Math.floor(Math.ramdom()* cores.length)]}, ${cores[Math.floor(Math.random() *cores.length)]})`;
}