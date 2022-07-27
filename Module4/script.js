var names=new Array();
names[0]="Naveen";
names[1]="Nithish";
names[2]="Sai";
names[3]="Aswath";
names[4]="Mithra";
names[5]="Tinku";
names[6]="Jeeva";
names[7]="Prakash";
names[8]="Churchill";
names[9]="Abi";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}