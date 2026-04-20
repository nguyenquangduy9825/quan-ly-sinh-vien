class quanly{
    constructor(){
        this.danhsach=[];
    }
    themsv(sv){
         this.danhsach.push(sv);
    }
    laydanhsach(){
        return this.danhsach
    }
    timkiemsv(masv){
    let ketqua=this.danhsach.find(function(sv){
        if(sv.masv===masv){
            return true;
        }
        else{
            return false;

        }
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
    suasv(ten,tuoi,diachi,masv,diem){
        let sv=this.timkiemsv(masv)
              if(sv){
            sv.ten = ten;
            sv.tuoi = tuoi;
            sv.diachi = diachi;
            sv.diem = diem;
        }
        }
    }


