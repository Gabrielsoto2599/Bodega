class Cl_Cliente{
    Constructor(Cd , Tc, c){
       this.Cedula = Cd;
       this.Tcomida = Tc;
       this.Cantidad = c;
    }
    
    pagara(){
    let paga = 0;
    if(this.Tcomida === 1)
    paga = this.Cantidad * 20;
    else paga = this.Cantidad * 5;
    return paga;
    }

    despacha(cE,cc){
      if(this.Tcomida === 1 && cE >= this.Cantidad) return true;
      else if(this.Tcomida === 2 && cc >= this.Cantidad) return true;
      else return false;
    }

}

 class Cl_Bodega{
    Constructor(Ie, Ic){
        this.CantIniempanadas = 10
        this.CantInicafe = 5
        this.Precioempanadas = 20
        this.Preciocafe = 5
        this.Acumempanadas = 0
        this.Acumcafe = 0
        this.AcumVentaTotal = 0
        
        }
     
        ProcesarCliente(C){
            {if(C.despacha(this.Acumempanadas, this.Acumcafe))
                if(C.Tcomida === 1)
                this.Acumempanadas = this.Acumempanadas - this.C.Cantidad
             else 
                 this.Acumcafe = this.Acumcafe - this.C.Cantidad
                this.AcumVentaTotal += this.C.pagara()
            }
        }
        
        CantEmpQuedan(){
        return this.CantIniempanadas - this.Acumempanadas
       }

       VentaTotal(){
        this.VentaTotal() = this.AcumVentaTotal;
       }
 }
    
let: Cliente1,Cliente2,Cliente3;    
Cliente1 = new Cl_Cliente('111', 6, 1)
Cliente2 = new Cl_Cliente('222', 4, 3)
Cliente3 = new Cl_Cliente('333', 5, 1)


let: Bodega;
Bodega = new Cl_Bodega()
Bodega.ProcesarCliente(Cliente1)
Bodega.ProcesarCliente(Cliente2)
Bodega.ProcesarCliente(Cliente3)


salida = document.getElementById("app")
salida.innerHTML = "Resultados:"

salida.innerHTML += `<br>${Cliente1.Tcomida.Cantidad} pagara ${Cliente1.pagara()} despacha ${Cliente1.despacha()}`
salida.innerHTML += `<br>${Cliente2.Tcomida.Cantidad} pagara ${Cliente2.pagara()} despacha ${Cliente2.despacha()}`
salida.innerHTML += `<br>${Cliente3.Tcomida.Cantidad} pagara ${Cliente3.pagara()} despacha ${Cliente3.despacha()}`
salida.innerHTML += `<br>`
salida.innerHTML += `<br>$CantEmpQuedan:${Bodega.CantEmpQuedan()}`
salida.innerHTML += `<br>$VentaTotal:${Bodega.VentaTotal()}`