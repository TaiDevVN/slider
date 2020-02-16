var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0 ,
 	soLuongSlide = slides.length,
 	trangThai = 'dangDungYen'	;
function xacDinh2SlideVaChuyendong(nutnao){
	if(trangThai == 'dangChuyenDong') { return false ;	}
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0 ; 
	var phanTuHienTai = slides[chiSoHienTai] ;	 

	 chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai+1) : 0); 
 
	var phanTuTiepTheo = slides[chiSoHienTai];				
 	var xuLyHienTaiKetThucCD = function(){		 
		this.classList.remove('dangxem');
		this.classList.remove((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext')) ;  
		trangThaiCua2ChuyenDong++ ; 
		trangThai = (trangThaiCua2ChuyenDong==2) ? 'dangDungYen' : trangThai ; 
	} 
	var xuLyTiepTheoKetThucCD = function(){		
		this.classList.remove((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext')) ;		
		this.classList.add('dangxem') ;
		trangThaiCua2ChuyenDong++;  
		trangThai = (trangThaiCua2ChuyenDong==2) ? 'dangDungYen' : trangThai ; 
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD) ;
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD) ;
	phanTuHienTai.classList.add((nutnao == 'nutTrai') ? ('bienMatKhiAnPrev') : ('bienMatKhiAnNext'));
	phanTuTiepTheo.classList.add((nutnao == 'nutTrai') ? ('diVaoKhiAnPrev') : ('diVaoKhiAnNext'));	 
}
var chuyenSlideChoNutPhai = function(){	xacDinh2SlideVaChuyendong('nutPhai');}
var chuyenSlideChoNutTrai = function(){	xacDinh2SlideVaChuyendong('nutTrai');}
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);