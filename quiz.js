var questions = [{
				question: "Berapa 2*5√1?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			},{
				question: "Berapa 2*5?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			},{
				question: "Berapa 2*5?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			},{
				question: "Berapa 2*5?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			},{
				question: "Berapa 2*5?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			},{
				question: "Berapa 2*5?",
				choices: [2, 5, 10, 15, 20],
				correctAnswer: "c"
			}, {
				question: "Berapa Hasil dari 3*6?",
				choices: [3, 6, 9, 12, 18],
				correctAnswer: "e"
			}, {
				question: "Berapa Hasil dari 8*9?",
				choices: [72, 99, 108, 134, 156],
				correctAnswer: "a"
			}, {
				question: "Berapa Hasil dari 1*7?",
				choices: [4, 5, 6, 7, 8],
				correctAnswer: "d"
			}, {
				question: "What is 8*8?",
				choices: [20, 30, 40, 50, 64],
				correctAnswer: "e"
			}
	];

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
						daftar += "<input type='button' value='0" + (k + 1) + "' id='num' onclick='kesoal(this.value-1)' style='background-color: white; border: 2px solid " + warna + ";margin:2.5%;padding:2.5%;border-radius:100%; color:" + warnaf + "; outline:none; font-size;2dp; font-weight:500'/>";
					}
				else
					{
						daftar += "<input type='button' value='" + (k + 1) + "' id='num' onclick='kesoal(this.value-1)' style='background-color:white; border: 2px solid " + warna + ";margin:2.5%;padding:2.5%;border-radius:100%;color:" + warnaf + "; font-size:2dp; outline:none; font-weight:500'/>";}

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
		document.getElementById("pilgan0").innerText = questions[i].choices[0];
		document.getElementById("pilgan1").innerText = questions[i].choices[1];
		document.getElementById("pilgan2").innerText = questions[i].choices[2];
		document.getElementById("pilgan3").innerText = questions[i].choices[3];
		document.getElementById("pilgan4").innerText = questions[i].choices[4];
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
		else if (matematikasmp.indexOf(nisn)<0 && ipa.indexOf(nisn)<0 && fisika.indexOf(nisn)<0 && matematikasma.indexOf(nisn)<0 && kimia.indexOf(nisn)<0 && biologi.indexOf(nisn)<0)
			{
				document.getElementById("err").innerHTML = "nisn anda salah";
			}
		else if (nisn=="")
			{
				document.getElementById("err").innerHTML = "masukkan nisn anda";
			}
		else
			{	document.getElementById("login").style.display = "none";
				document.getElementById("mulai").style.display = "block";
				kesoal("0");
				updatedaftar(0);
                document.getElementById("mapel").innerHTML="simulasi";
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
		
		var kir="https://wa.me/" + nomor[1] + "?text=Nama%20%3D%20" + nama + "%0ANISN%20%3D%20" + nisn + "%0ABidang Uji%20%3D%20SIMULASI%0A%0Akode%20verifikasi%20" + total + kode[acak2] + benar;
		localStorage.setItem("id", kir);
		Android.nextScreen(kir);
	}
