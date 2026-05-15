
const ling = {
    luas: function(r, phi){
        const luas = phi * r * r
        return luas

    },
    kel: function(r, phi){
        const kel = 2 * phi * r
        return kel
    },
    hitung: function(r){
        if(typeof r !== "number"){
            console.log("Eror var R bukan number")
            return
        }
        let phi
        if (r%7 == 0){
            phi = 22/7
        }else{
            phi = 3.14
        }
        console.log("Luas Lingkaran ", this.luas(r, phi))
        console.log("Keliling Lingkaran ", this.kel(r, phi))
    }

}

ling.hitung(21)