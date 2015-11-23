//Реализовать функцию toArray(obj), которая принимает аргументом массивоподобный объект (например arguments),
//и возвращает массив из тех же элементов, которые входили в массивоподобный объект.

function toArray(obj) {
	var arr = [];

	for(key in obj){
		if(!isNaN(key)){
			arr.push(obj[key])
		}
	}

	return arr
}

toArray({0: 'one', 1: 'two', 2: 'three', length: 3});


/*Написать функцию createSummator(initialValue), с опциональным (необязательным) первым параметром, который является точкой отчета счетчика.
Если аргумент initialValue не передан, то отчет начинается с 0. При каждом вызове функция возвращает объект с методами inc(num), dec(num), get(). 
Объектов, которые возвращает функция createSummator(initialValue), может быть любое количество.

Реализация должна позволять манипуляции со значением счетчика только с использованием этих методов.

 -Вызов метода inc(num) увеличивает значение счетчика на значение аргумента num. Если метод вызван без аргумента, 
  то значение счетчика увеличивается на 1
 -Вызов метода dec(num) уменьшает значение счетчика на значение num, если метод вызван с аргументом. 
  Если метод вызван без аргумента, то значение счетчика уменьшается на 1
 -Вызов метода get() возвращает текущее значение счетчика*/

function createSummator(initialValue) {
	initialValue = initialValue || 0;
	return {
		inc: function (num) {
			if (num) {
				initialValue += num
			}else{
				initialValue += 1
				}
			},
		dec: function (num) {
			if (num) {
				initialValue -= num
			}else{
				initialValue -= 1
				}
			},
		get: function () {
			return initialValue;
		}
	}
}



// Реализовать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число, 
// возвращает новый массив. Число показывает количество элементов в подмассивах, элементы подмассивов 
// берутся из массива data. Оригинальный массив не должен быть изменен.


function toMatrix (data, rowSize) {
	var res = [];
	for (var i = 0; i < data.length; i += rowSize) {
		res.push(data.slice(i, i + rowSize));
	}
	return res;
}

toMatrix([1,1,2,2,3,3], 2);



//Реализовать функцию pick(obj, keys), которая принимает аргументами объект и массив строк (названия ключей). 
//Возвращает новый объект, куда вошли все ключи, указанные в массиве keys, и соответствующие значения из объекта obj.
//Если в объекте obj, нет ключа, указанного в массиве keys, в результирующем объекте этот ключ не должен присутствовать.


function pick(obj, keys) {
	var res = {};
		for(var prop in obj){
			if (keys.indexOf(prop) !== -1) {
				res[prop] = obj[prop];
			};
		}
		return res;
}

var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}
pick(user, ['age', 'name', 'surename']);





//Реализовать функцию compose, которая принимает аргументами любое количество функций, 
//и возвращает функцию, которая при вызове вызовет все функции, которые compose получила аргументом.


function compose() {
	var arr = Array.prototype.slice.call(arguments);

	return function callFunc () {
			for (var i = 0; i < arr.length; i++) {
			arr[i]();
		};
	};
}


/*Реализовать класс Sequence(arr). Конструктор принимает аргументом массив элементов. Имеет методы (описанные в прототипе) go, next, prev.
Запоминает на каком элементе из массива сейчас находится "указатель".

 -Метод go(index) возвращает элемент из массива с индексом index, или последний элемент массива, если index больше длины массива. 
  Запоминает индекс возвращенного элемента. 
 -Метод next() возвращает следующий элемент из массива идущий за запомненным индексом, или первый элемент массива, если последний запомненный 
  индекс - индекс последнего элемента. 
 -Метод prev() возвращает предыдущий элемент из массива идущий перед запомненным индексом, или последний элемент массива, 
  если последний запомненный индекс - индекс первого элемента.*/

  function Sequence (arr) {
	this._array = arr;
	this._currentIndex = 0;
}


Sequence.prototype.go = function(index) {
	for (var i = 0; i < this._array.length; i++) {
		if (this._array.length <= index) {
			this._currentIndex = this._array.length -1;
			return this._array[this._array.length -1];
		}else{
			this._currentIndex = index;
			return this._array[index];
		}
	};

};


Sequence.prototype.next = function() {
	for (var i = 0; i < this._array.length; i++) {
		if (this._currentIndex >= this._array.length -1) {
			this._currentIndex = 0;
			return this._array[this._currentIndex]
		}else{
			this._currentIndex += 1;
			return this._array[this._currentIndex]
		}
	};
};


Sequence.prototype.prev = function() {
	for (var i = 0; i < this._array.length; i++) {
		if (this._currentIndex === 0) {
			this._currentIndex = this._array.length - 1;
			return this._array[this._array.length - 1]
		}else{
			this._currentIndex -= 1;
			return this._array[this._currentIndex]
		}
	};
};

var s1 = new Sequence([{name: 'Mila'}, {name: 'Sasha'}, {name: 'Elena'}, {name: 'Katya'}])




