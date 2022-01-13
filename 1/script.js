document.getElementById('kgsInput').addEventListener('input',function(e){
    let kgs= e.target.value;
    let input = document.getElementById('kgsInput');
    let data = input.value;
    document.getElementById('gOutput').innerHTML= kgs/0.0010000;
    document.getElementById('poundsOutput').innerHTML= kgs*2.2046;
    document.getElementById('ozOutput').innerHTML= kgs*35.274;
    document.getElementById('output').style.visibility='visible';

    if (data =='') {
        document.getElementById('output').style.visibility='hidden';
    }
});