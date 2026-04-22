 export default class quanly{    constructor(){
        this.danhsach=[];
    }
    themsv(sv){
         this.danhsach.push(sv);
    }
    laydanhsach(){
        return this.danhsach
    }
    timkiemsv(ten){
    let ketqua = this.danhsach.filter(function(sv){
        if (sv.ten.toLowerCase().includes(ten.toLowerCase())) {
            return true;
        }
        return false;
    });

    return ketqua;
}
    xoasv(masv){
    for (let i = 0; i < this.danhsach.length; i++) {
        if (this.danhsach[i].masv === masv) {
            this.danhsach.splice(i, 1);
            return true;
        }
    }
    return false;
    }
   suasv(masv, svMoi){
    for(let i = 0; i < this.danhsach.length; i++){
        if(this.danhsach[i].masv === masv){
            this.danhsach[i] = svMoi;
            return true;
        }
    }
    return false;
}
        luudanhsach(ds){
            return this.danhsach=ds;
        }
    }


