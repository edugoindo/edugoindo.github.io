var questions = [{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['1010','2020','1009','2019','2018'],
correctAnswer:'a'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['√11','√12','√13','√14','√15'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['-2','-1','0','1','2'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['6 atau -2','3 atau -1','2 atau -4','3 atau 2','2 atau 4'],
correctAnswer:'e'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['7450','7451','6461','1256','990'],
correctAnswer:'b'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma16.jpg">',
choices:['-9/2','-4/9','-3/5','4/9','5/9'],
correctAnswer:'b'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['1/2','1/3','2/3','2','3'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['36','40','42','45','50'],
correctAnswer:'c'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['1/8','1/4','2/3','4','8'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['{1,2,3}','{-1,2,3}','{-1,1,2}','{-1,-2,2}','{1,-2,2}'],
correctAnswer:'c'
},{
question:' <div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['1','2','4','8','9'],
correctAnswer:'a'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['1','2','8','9','15'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma713.jpg">',
choices:['7','10','12','16','24'],
correctAnswer:'b'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1418.jpg">',
choices:['102','105','135','150','165'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1418.jpg">',
choices:['30','45','60','120','150'],
correctAnswer:'c'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1418.jpg">',
choices:['2','3','4','6','7'],
correctAnswer:'a'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1418.jpg">',
choices:['4','6','12','16','24'],
correctAnswer:'c'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1418.jpg">',
choices:['3x+1','3x+3','4x-1','4x+1','5x+1'],
correctAnswer:'d'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1920.jpg">',
choices:['3/4π','4/8π','4/9π','5/27π','9/16π'],
correctAnswer:'e'
},{
question:'<div style="width:100%;white-space:nowrap;overflow:auto;"><img src="ma1920.jpg">',
choices:['1','2','3','4','5'],
correctAnswer:'d'
}];

var i=0;
var inpjwb=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var nilai=0;
var benar=0;
var sendButton = document.getElementById("js_send");

function pilihjwb( inp, nom )
	{
		inpjwb[nom] = inp;
		updatedaftar(nom);
	}
	
	function ukuran(ukur){
		if(ukur==1){
			document.getElementById("uk1").color="#32b5e3";
			document.getElementById("uk2").color="#ddd";
			document.getElementById("uk3").color="#ddd";
			document.getElementById("uk").size="1dp";
		}else if(ukur==2){
			document.getElementById("uk2").color="#32b5e3";
			document.getElementById("uk1").color="#ddd";
			document.getElementById("uk3").color="#ddd";
			document.getElementById("uk").size="2dp";
		}else{
			document.getElementById("uk3").color="#32b5e3";
			document.getElementById("uk2").color="#ddd";
			document.getElementById("uk1").color="#ddd";
			document.getElementById("uk").size="3dp";
		}
	}
	
var daf;
function updatedaftar( ang )
	{
		var warna; var warnaf;
		daf = document.getElementById("daf");
		var daftar="";
		for (var k=0;k < questions.length;k++)
			{

				if (inpjwb[k] == "")
					{warna = "#c2c2c2";}
				else
					{warna = "#32b5e3";}
				if (k == ang)
					{
						warnaf = "#32b5e3";
					}
				else
					{
						warnaf = "#c2c2c2";
					}
				if (k < 9)
					{
						daftar += "<input type='button' value='0" + (k + 1) + "' id='num' onclick='kesoal(this.value-1)' style='background-color: white; border: 2px solid " + warna + ";margin:2.3%;padding:2.5%;border-radius:100%; color:" + warnaf + "; outline:none; font-size;2dp; font-weight:500'/>";
					}
				else
					{
						daftar += "<input type='button' value='" + (k + 1) + "' id='num' onclick='kesoal(this.value-1)' style='background-color:white; border: 2px solid " + warna + ";margin:2.3%;padding:2.5%;border-radius:100%;color:" + warnaf + "; font-size:2dp; outline:none; font-weight:500'/>";}

				if (k == 4 || k == 9 ||k==19|| k == 29 || k == 39 || k == 49 || k == 59 ||k==14||k==24||k==34||k==44||k==54)
					{
						daftar += "<br/>";
					}
			}
		daf.innerHTML = daftar;
	}
function tampildaftar( )
	{
		if (daf.style.display == "none")
			{	document.getElementById("tbl").style.borderRadius="0px";
				daf.style.display="block";
				}
		else
			{
				document.getElementById("tbl").style.borderRadius= "100%";
				daf.style.display = "none";
			}
	}


function kesoal( nmr )
	{
		i = parseInt(nmr);
		updatedaftar(i);
		document.getElementById("tbl").value=(i+1).toString();
		document.getElementById("soal").innerHTML = questions[i].question;
		document.getElementById("pilgan0").innerHTML = questions[i].choices[0];
		document.getElementById("pilgan1").innerHTML = questions[i].choices[1];
		document.getElementById("pilgan2").innerHTML = questions[i].choices[2];
		document.getElementById("pilgan3").innerHTML = questions[i].choices[3];
		document.getElementById("pilgan4").innerHTML = questions[i].choices[4];
		var bfr; var nxt;
		var jmlhsoal=questions.length;
		var index=jmlhsoal - 1;
		if (i > 0 && i < index)
			{
				bfr = i - 1;
				nxt = i + 1;}
		else if (i == 0)
			{
				bfr = index;
				nxt = i + 1;}
		else if (i == index)
			{
				bfr = i - 1;
				nxt = 0;}
		document.getElementById("opt").innerHTML = "<br/><font color='32B5E3'><input type='button' value='< sebelumnya' onclick='kesoal(" + bfr + ")' style='border-radius:7px; border:none; background:#32B5E3; padding:5px; color:white;' />-----<input type='button' value='selesai' onclick='selesai()' style='border-radius:7px; border:none; background:red; padding:5px; color:white;'/>-----<input type='button' value='selanjutnya >' onclick='kesoal(" + nxt + ")' style='border-radius:7px; border:none; background:#32B5E3; padding:5px; color:white;'/></font><br/><br/><i>selamat mengerjakan, semoga sukses</i>";

		if (inpjwb[i] == "")
			{
				document.getElementById("pilgana").checked = false;
				document.getElementById("pilganb").checked = false;
				document.getElementById("pilganc").checked = false;
				document.getElementById("pilgand").checked = false;
				document.getElementById("pilgane").checked = false;
			}
		else
			{
				document.getElementById("pilgan" + inpjwb[i]).checked = true;}
	}


function mulai( )
	{
		var nama=document.getElementById("nama").value;
		var nisn=document.getElementById("nisn").value;
		if (nama == "")
			{
				document.getElementById("err").innerHTML = "masukkan nama anda";
			}
		else if (nisn == "")
			{
				document.getElementById("err").innerHTML = "masukkan nisn anda";
			}
		else if (matematikasma.indexOf(nisn)<0)
			{
				document.getElementById("err").innerHTML = "nisn anda salah";
			}
		else
			{	document.getElementById("login").style.display = "none";
				document.getElementById("mulai").style.display = "block";
				kesoal("0");
				updatedaftar(0);
                document.getElementById("mapel").innerHTML="mat sma";
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
											hitung();
										}
									document.getElementById("waktu").value = jam + " :  " + menit + " : " + detik;
								}, 1000);
			}
	}
function selesai( )
	{
		var con=confirm("apakah kamu yakin?");
		if (con)
			{
				hitung();
			}
	}

function tampungjwb( jwa )
	{
		pilihjwb(jwa, i);
	}

function hitung( )
	{
		for (var m=0;m < questions.length;m++)
			{
				if (inpjwb[m] == questions[m].correctAnswer)
					{
						nilai += 4;
						benar++;
					}
				else if (inpjwb[m] == "")
					{
						nilai += 0;
					}
				else
					{
						nilai--;
					}}
		document.getElementById("mulai").style.display = "none";
		document.getElementById("send").style.display = "block";
		if (nilai < 0)
			{
				total = minus[acak3] + (nilai * -1);
			}
		else
			{
				total = nilai;
			}
		document.getElementById("code").innerHTML = total + kode[acak2] + benar;
	}
var nomor=["6282132308503","6281338918433","6282279670375","6281252343721"];
var kode=["az0l","b4uy","zy99","wt68","11q2","zzaa","kp22","qm15","abww","1255","5ccc","aqrs","walz","zca0","hrwe","aq57","991x","201h","bqzz"];
var acak2=Math.floor(Math.random() * kode.length);
var minus=["a","b","c","d","e","f","g","h"];
var total;
var acak3=Math.floor(Math.random() * minus.length);

function kirim( )
	{
		var acak=Math.floor(Math.random() * nomor.length);
		var nama=document.getElementById("nama").value;
		var nisn=document.getElementById("nisn").value;
		
		var kir="https://wa.me/" + nomor[acak] + "?text=Nama%20%3D%20" + nama + "%0ANISN%20%3D%20" + nisn + "%0ABidang Uji%20%3D%20MATEMATIKA%20SMA%0A%0Akode%20verifikasi%20" + total + kode[acak2] + benar;
		localStorage.setItem("id", kir);
		Android.nextScreen(kir);
	}
