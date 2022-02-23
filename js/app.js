let min = 1,
max = 10,
winningNum = getRandomNum(min, max),
guessesleft = 3;

const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

minNum.textContent=min;
maxNum.textContent=max;

guessBtn.addEventListener('click', function(){        
    
    let guess = parseInt(guessInput .value);
    
    if (isNaN(guess) || guess < min || guess > max ){
        setMessage(`Нужно вести число от ${min} до ${max}`, 'red');
    }
    
    if(guess === winningNum){
        guessInput.disabled = true;
        guessInput.style.border = `1px solid green`;
        setMessage(`Поздравляю! Вы угадали число ${winningNum}`, `green`);
        guessBtn.remove();
        guessInput.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Новая игра';
        game.append(resetButton);
        resetButton.addEventListener('click', resetGame);                    
        function resetGame(){
            window.location.reload();    
        }
    }else if (guessesleft > 1){
        guessInput.style.border = `1px solid red`;
        guessesleft=guessesleft-1;
        setMessage(`Вы проиграли у вас осталось ${guessesleft} раз`, `red`)
        guessInput.value = '';
    }else{
        
        guessInput.style.border = `1px solid red`;
        setMessage(`Игра окончена, Вы проиграли. Было загадано число: ${winningNum} `, `red`);
        guessBtn.remove();
        guessInput.disabled = true;
        
        resetButton = document.createElement('button');
        
        resetButton.textContent = 'Попробовать еще раз';
        game.append(resetButton);
        resetButton.addEventListener('click', resetGame);                    
        function resetGame(){
            window.location.reload();    
        }
        
    }
        
    });
    
     function setMessage(msg , color){
        message.textContent = msg;
        message.style.color = color;
    };

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
