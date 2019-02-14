	var list1 = [

{
	"name":"Amit",
	"age":22,
	"salary":6000,
	"DOB":"02-10-1997"
}
,
{
	"name":"Ajay",
	"age":18,
	"salary":900,
	"DOB":"20-01-2001"
}
,
{
	"name":"Rahul",
	"age":21,
	"salary":900,
	"DOB":"09-05-1998"
}
,
{
	"name":"Shweta",
	"age":18,
	"salary":200,
	"DOB":"06-06-2001"
}
,
{
	"name":"Tina",
	"age":22,
	"salary":7000,
	"DOB":"29-01-1997"
}

]


console.log(list1)



console.log("filter all employees with salary greater than 5000")


function chksal(){
	for (var i=0;i<list1.length;i++){
		if(list1[i].salary > 5000){
			console.log(list1[i])
		}
	}
}

chksal()




console.log("group employee on the basis of their age")
	result = list1.reduce(function (r, a) {
	       r[a.age] = r[a.age] || [];
       	       r[a.age].push(a);
       	       return r;
    }, Object.create(null));

console.log(result)






console.log("fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary")

function inc(){
	for (var i=0; i<list1.length;i++){
		if(list1[i].salary<1000 && list1[i].age>20){
			console.log(list1[i]);
			list1[i].salary = list1[i].salary * 5;
		}
	}
	console.log(list1)
}

inc()
