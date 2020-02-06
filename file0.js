function mulai( ){
		var nisn=document.getElementById("nisn").value;
		if (nisn == "")
			{
				document.getElementById("err").innerHTML = "masukkan nisn anda";
			}
		else if (matematikasmp.indexOf(nisn)<0)
			{
				document.getElementById("err").innerHTML = "nisn anda salah";
			}
		else
			{	document.getElementById("login").style.display = "none";
				document.getElementById("mulai").style.display = "block";
                document.getElementById("mapel").innerHTML="mat smp";
				var jam=1;
				var menit=59;
				var detik=60;
				setInterval(function( )
								{
									detik--;
									if (detik < 0)
										{
											menit--;
											detik = 60;
										}
									if (menit < 0)
										{
											jam--;
											menit = 59;
										}
									if (jam < 0)
										{
											alert("waktu telah habis!!!");
											selesai();
										}
									if (jam==0&&menit==15&&detik==0)
									{
										alert("waktu tersisa hanya 15 menit!!!, harap segera selesaikan pekerjaan anda, apabila pekerjaan anda belum selesai saat waktu habis, pekerjaan anda akan hilang!");
									}
									document.getElementById("waktu").value = jam + " :  " + menit + " : " + detik;
								}, 1000);
			}
	}

function selesai( )
	{
		document.getElementById("mulai").style.display = "none";

	}