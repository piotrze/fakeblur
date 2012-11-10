#fakeblur
========

Inpired by blurjs.com. Allows you to show blured background.
It do not generate blured image from your site, You need to prepare then by yourself.
It only shows your blured image in good position.

## Configure

Create blured background image version, save it with prefix `-blured.png`. 
Set your primary background in css to some element(default it is `body`).
Now you have to call fake blur on element which is on higher layer than your background. 
Plugin will position and place blurred background in your element.


```js
$('#some-div-over-other-elements').fakeblur({})
  ```

##Default options
```js
{
  source: 'body',
  overlay: '',
  suffix: 'blured',
  offset: {
    x: 0,
    y: 0
  },
  optClass: '',
  draggable: false,
  debug: false
}
```



