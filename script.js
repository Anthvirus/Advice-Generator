const adviceNumber = document.getElementById('advice-number');
const adviceCard = document.getElementById('advice-card');
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const advice = fetch('https://api.adviceslip.com/advice')
    .then(res =>{
        return res.json()
    })
    .then(advice =>{
        adviceNumber.innerText = advice.slip.id;
        adviceCard.innerText = advice.slip.advice;
    })
})