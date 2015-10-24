
var modulo_kind = 
{
     nome_vol : "",
     volontari : [],
     iAm : function (nome){
      this.nome_vol = nome;
      if(this.volontari[nome] != "") { /*Se inserisco un utente che esiste restituisce semplicemente true*/
         return true;
      }
      else{
        this.volontari[nome] = 0;/*Se inserisco un utente che non è presente nella lista volontari (che ha nome uguale a ""), mi crea un utente con 0 ore di volontariato*/
        return false;
      }
    },  
    give : function(ore_vol) {  
      if ((isNaN(ore_vol)==false) && (ore_vol >0)){
        this.volontari[this.nome_vol] = this.volontari[this.nome_vol] + hours;
        return this.volontari[this.nome_vol];
      }
      else{
        return null;
      }
    },
    getPoints : function(){
        var tot_ore = this.volontari[this.nome_vol];
        return tot_ore;
    }
     
};