### Вёрстка

1. Как браузер отрендерит такой код? Например: жёлтый треугольник в правом верхнем углу
```html
<div style="float:left; background: red;">
    <span style="position:relative; left: -1000px; top: -1000px; background: yellow;">Text</span>
</div>
```

Красный прямоугольник по размеру текста.

2. Как можно выровнять блок `100x100` по центру экрана? Допишите необходимый код.
```html
<style>
    .center {
        width: 100px;
        height: 100px;
        background: red;
        position: relative;
        top: 50%;
        margin: -50px auto 0 auto;
    }
</style>

<body>
    <div class="center"></div>
</body>
```

3. Напишите код (HTML + CSS), реализующий следующую раскладку страницы:
  - ширина лейаута `70%` от вьюпорта, но не меньше `760px`;
  - 2 колонки: сайдбар шириной `150px` и остальное место под контент;
  - лейаут выровнен по центру.

  <div class="container">
      <div class="sidebar"></div>
      <div class="content"></div>
  </div>

  .container {
      width: 70%;
      min-width: 760px;
      margin: 0 auto;
  }

  .sidebar {
      width: 150px;
      float: left;
  }

  .content {
      margin-left: 151px;
  }

### JavaScript

Дан фрагмент html:
```html
<div id="root">
    <span id="id1"></span>
    <div id="id2">
        <div id="id3"></div>
    </div>
</div>

<script>
    var root = document.getElementById('root');
</script>
```

1. DOM селекторы:
    1. Что вернет `root.getElementsByTagName('div')`? #id2, #id3
    2. Что вернет `root.querySelector('div:first-child')`? #id3
    3. Что вернет `root.querySelectorAll('div')[0]`? #id2

2. DOM события:
    1. что такое всплытие (bubbling) и захват (capturing) DOM событий? `устный ответ`
    2. напиште код, который при клике на любой `div` внутри `root` будет выводить в консоль его `id`.

$('#root').click(function (e) {
    if ($(e.target).tag === 'div') {
        console.log(this.attr['id']);
    }
});

3. Типы:
    1. Напишите все значения, которые может возвращать `typeof` string, undefined, number, object, boolean
    2. В чем разница между примитивными типами и объектами? `устный ответ`
    // 1, '1', true
    // {}, Number(1), Boolean(true)
    3. Что вернет `typeof typeof bar` #string
    4. Что вернет `typeof (function(){})()` #undefined
    5. Как проверить, что переменная `foo` является массивом foo instanceof Array
    6. Есть ли разница между проверками `typeof x === 'undefined'` и `x === undefined`

4. Массивы:
    1. Напишите все методы массивов, которые вы знаете и используете // push, pop, indexOf, join, slice
    2. Напишите минимум 2 варианта добавления элемента `item` в конец массива `items`
    items.push(item);
    items[items.length] = item;
    3. Напишите код, удаляющий из массива `items` элемент с индексом `i`
    items.slice(0, i).concat(items.slice(i + 1))
    4. Напишите код, который сделает из массива объект:
    ```javascript
    var arr = [
        {name: 'width', value: 10},
        {name: 'height', value: 20}
    ];

    var result = {};
    for (var i = 0; i < arr.length; i++) {
        result[arr[i].name] = arr[i].value;
    }

    // на выходе объект {width: 10, height: 20}
    ```

5. Контекст
    1. Что такое `this`? `устный ответ`
    2. Что окажется в консоли после выполнения `(function () { console.log(this) })()` window
    3. Есть функция: `function f() { console.log(this.x); }`. Напишите все известные вам способы, чтобы вывести в консоли значение `x` из объекта `obj = {x: 'yandex'}`;
    f.call(obj);
    f.apply(obj);
    window.x = obj.x; f();
    f.bind(obj)();

6. Классы и наследование
    1. Как реализовано наследование в javascript? `устный ответ`
    Object
    2. Чем отличаются `prototype`, `__proto__`, `Object.getPrototypeOf()`? `устный ответ`

    3. Расскажите, как работает оператор `instanceof`? `устный ответ`
    4. Что произойдет в результате выполнения следующего кода:
    ```javascript
    function Book() {
        this.name = 'foo';
    }

    Book.prototype = {
        getName: function() {
            return this.name;
        }
    }

    var book = new Book();

    Book.prototype.getUpperName = function() {
        return this.getName().toUpperCase();
    }

    book.getUpperName();
    ```
    # FOO

7. Асинхронность
    1. В чем разница между синхронной и асинхронной функцией? `устный ответ`
    2. Напишите функцию, которая асинхронно возвращает случайное число через случайный промежуток времени.
    var a = new Callback();
    a.callback(14);
    a.addCallback(function(){});
    new Promise(function() {

    }).then(function () {
        console.log();
    }).then()

    var f = function (a) {
        console.log(a)
    }
    setTimeout(function () {
        f(14);
    }, Math.random() * 1000)

    function name(callback) {
        setTimeout(function () {
            callback(Math.random() * 1000);
        }, Math.random() * 1000);
    }


    3. Что такое промисы и каковы их преимущества? `устный ответ`

8. Перечислите конструкции из ES6, которые вы знаете

class Trick {
    function a () {}
}

var map = new Map();
var weak = new WeakMap();
var symbol = new Symbol('aa');



9. Проведите код-ревью фрагмента ниже. Напишите замечания в виде комментов:
```javascript
function sendStatistics(serviceName, userName, text, callback) {
    // Нет проверки на наличие аргументов
    // URL с ошибкой &text
    var url = 'http://example.com?service=' + serviceName + '&user=' + userName + 'text=' + text;

    // Неизвостное переменная
    if (!settings.isStatisticsAllowed) {
        return;
    }

    // Неизвестный ajax
    // Нет обработки ошибки
    ajax({
        url: url,
        success: function () {
            console.log('success');
            // Вызов без проверки
            callback();
        }
    });
}
```

10. Палиндром:
```javascript
isPalindrome('Казак'); // true
isPalindrome('А роза упала на лапу Азора'); // true
isPalindrome('Do geese see God?'); // true
isPalindrome('Бряк'); // false

// 'Do geese see God?' -> 'Do geese see God'

function isPalindrome(s) {
    var result = true;

    s = s.replace(/\w/g, '').toLowerCase();
    return s == s.reverse();

    var middle = s.length / 2 + 1;
    for (var i = 0; i <= middle; i++) {
        if (s[i] != s[s.length - i - 1]) {
            result = false;
            break;
        }
    }

    return result;
}
```
