### 为什么要模块化？
现在的web系统越来越庞大、复杂，需要团队分工，多人协作，大型系统的javascript文件经常存在复杂的依赖关系，后期的维护成本会越来越高。


> 模块Module：一个模块，就是一个对其他模块暴露自己的属性或者方法的文件。

> 导出Export：作为一个模块，它可以选择性地给其他模块暴露（提供）自己的属性和方法，供其他模块使用。

> 导入Import：作为一个模块，可以根据需要，引入其他模块的提供的属性或者方法，供自己模块使用。

### 常用的模块化方案

---

- ES6 Module
```js
//moduleA.js

const name = 'yuri';

let age = 18;

const say = () => {
    console.log('hello');
}

export {name, age, say};
```

```js
//moduleB.js
import {name, age, say} from './moduleA.js';

console.log(name, age, say());
```
---

- CommonJS
> Node、webpack、Browserify

```js
var $ = require('jquery');
var _ = require('underscore');
 
function a(){}
function b(){}
function c(){}
 
//    暴露公共方法
module.exports = {
    b,
    c
};
```

---

- AMD
> ReruireJS

```js
//moduleA.js
define('moduleA', ['jquery', 'underscore'], function ($, _) {

    const name= 'moduleA';
    function a(){console.log($, _)} 
    function b(){} 
    function c(){} 
     
    return {
        name,
        b: b,
        c: c
    }
});
```

```js
//moduleB.js
define('moduleB', ['jquery', 'underscore', 'moduleA'], function ($, _, moduleA) {

    console.log(moduleA.name);
    
});
```
---

- UMD
> 兼容了AMD和CommonJS, 还支持全局变量
```js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('moduleA', ['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // root
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    
    function myFunc(){}
 
    return myFunc;
}));
```