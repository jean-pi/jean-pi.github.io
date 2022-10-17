let y = 0,
x = 0;

export function ballMovimiento (e,ball,ballContainer){
    const   $ball = document.querySelector(ball),
            $ContainerBall = document.querySelector(ballContainer),
            ballLimit = $ball.getBoundingClientRect(),
            containerLimit = $ContainerBall.getBoundingClientRect();

    switch (e.keyCode) {
        case 38:
            // up
            console.log(ballLimit)
            if(ballLimit.top > containerLimit.top){
                y--;
                e.preventDefault()
            }
        break;
        case 40:
            // down
            if(ballLimit.bottom < containerLimit.bottom){
                e.preventDefault()
                y++;
            } 
        break;
        case 39:
            // right
            if(ballLimit.right < containerLimit.right) {
                x++;
                e.preventDefault()
            }
        break;
        case 37:
            // left
            if(ballLimit.left > containerLimit.left) {
                x--;
                e.preventDefault()
            }
        break;
    }
    $ball.style.transform = `translate(${x*10}px , ${y*10}px )`
    
}
export function ballDispositivo(ball,mesageCelular,ballActive,mesageCelularActive){
    const   $ball = document.querySelector(ball),
            $mesajeCelular = document.querySelector(mesageCelular);
    let ua = navigator.userAgent;
        const isDesktop = {
            window: () =>  ua.match(/windows nt/i),
            mac: () =>  ua.match(/Macintosh/i),
            any: function (){
                return this.window() || this.mac()
            }
        }
        if(isDesktop.any()){
            $ball.classList.add(ballActive)
        }else{
            $mesajeCelular.classList.add(mesageCelularActive)
        }
}

