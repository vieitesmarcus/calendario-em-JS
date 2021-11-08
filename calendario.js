document.addEventListener('DOMContentLoaded', function(){
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro","Outubro","Novembro","Dezembro"];
    const diaSemanas = ["Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

    function diaCalendario(mes, ano){
        document.getElementById("mes").innerHTML = meses[mes] + " de " + ano;
        let diaUmdoMes = new Date(ano,mes,1);
        let ultimoDiaMes = new Date(ano,mes+1,1-1);
        let dt = document.getElementsByClassName("dias");
        for(let i = 0; i< 42; i++){
            dt[i].style.color = "black";
            dt[i].innerHTML = " ";
        }
        
        for(i = diaUmdoMes.getDate(), j = diaUmdoMes.getDay(); i <= ultimoDiaMes.getDate(); i++, j++){
            dt[j].innerHTML = i +" "+meses[diaUmdoMes.getMonth()];
        }
        //próximo mes
        let pMes = new Date(ano,mes + 1,1);
        for(i = pMes.getDate(); j < 42; i++, j++){
            dt[j].innerHTML = i +" "+ meses[pMes.getMonth()];
            dt[j].style.color = "#00CED1";
        }

        //faz mes passado no calendario
        dia = new Date(ano,mes,1-1);
        //necessario um if para poder organizar 
        if(dia.getDay() == 6){
        }else{
            for(i = dia.getDate(), j = dia.getDay(); j >= 0 ; i--,j--){
                dia.setDate(i);
                dt[j].innerHTML = dia.getDate() +" "+meses[dia.getMonth()];
                dt[j].style.color = "#00CED1";
            }
        }
    }

    function diaAtual(){
        const hoje = new Date();
        document.getElementById("atual").innerHTML = diaSemanas[hoje.getDay()]+ ", " + hoje.getDate() +" de " + meses[hoje.getMonth()];
    }

    

    let hoje = new Date();
    let mes = hoje.getMonth();
    let ano = hoje.getFullYear();
    diaCalendario(mes, ano);
    diaAtual();
    const botao_anterior = document.getElementById('btn_ant');
    
    botao_anterior.onclick = function diminuiMes(){
        mes--;
        if(mes < 0){
            mes = 11;
            ano--;
        }
        diaCalendario(mes,ano);
    }

    const botao_avancar = document.getElementById('btn_avanca');
    
    botao_avancar.onclick = function aumentaMes(){
        mes++;
        if(mes > 11){
            mes = 0;
            ano++;
        }
        diaCalendario(mes,ano);
    }
   
   

})