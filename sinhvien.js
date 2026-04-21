 export default class sinhvien{
    constructor(ten,tuoi,diachi,masv,diem){
        this.ten=ten;
        this.tuoi=tuoi;
        this.diachi=diachi;
        this.masv=masv;
        this.diem=diem;
    }
    xeploai(){
        if(this.diem>=8){
            return "giỏi"
        }
        else if(this.diem>=6.5){
            return "khá"
        }
        else if(this.diem>=5){
            return "trung bình"
        }
        else{
            return "yếu "
        }

    }
}