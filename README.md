[![build status][travis-image]][travis-url]

# DICSS
Directly injected CSS - Finally, Sass has some _stiff_ competition!

Forget Sass. Forget LESS. What you want is DICSS. Once you've had DICSS, you won't settle for LESS.

Tired of separate build processes for your CSS and JS files? Fret no more. DICSS is Javascript. That means you can code your styles and your scripts in _one language_, and compile and minify everything to a single file. Once you try it, we're sure you'll love DICSS.

DICSS is fun and easy to use!

## Is it safe?
Don't worry. DICSS uses a wrapper.

## How do you use DICSS?
Just grab DICSS and stick it wherever you like. DICSS works equally well in your `<head>` or in your `<body>`.

```html
<head>
    <script src="dicss.js"></script>
</head>
```

Then, go ahead and start putting DICSS in! Put 'em everywhere you like. Nobody will judge you for what you do with your DICSS.

```js
DICSS.putIn('body', 'transition: .1s linear');
DICSS.putIn('p', {
    "height": "100%",
    "width": "100%",
    "&.protection": {
        "border": "solid 1px transparent"
    },
    "a": {
        "color": "#fff"
    }
});
```

And when you're done with a style, you can easily remove it:

```js
DICSS.pullOut('a', 'color');
```

## The possibilities are endless
Since DICSS accepts JSON objects as styles, you can keep your CSS organized very methodically:

```js
var widgetDICSS = {
	'div.widget': {
		'a': {
			font: '1em Verdana,Arial,sans-serif',
			margin: '.5em'
		}
		//... etc
	}
};
```

In fact, there's no reason you couldn't put your DICSS in the back-end, and then deliver them to the client, as needed, via REST service.

## Why no min version?
It's not the size of DICSS that matters, it's what you can do with it.

## Can DICSS be extended?
Yes! You can add whatever you want to DICSS. Just pass an object of methods into `DICSS.extend()`.

DICSS keeps on growing! Some popular DICSS add-ons include

* *COCSS* (cross-origin DICSS),
* *SECSS* (security enhanced DICSS)
* *DICSS-Pics* (DICSS plugin for working with images)
* *Circum-Sizer* (calculate the circumference of a rounded element in CSS)

Okay, so we admit, those add-ons don't actually exist yet. But there's nothing stopping you from making them!

Got something you want to add to DICSS? Let us know! Help us make DICSS bigger and better than ever!


## Is DICSS compatible with other frameworks?
Yes! There are projects currently underway to integrate DICSS with Knockout (KOCSS), Backbone (BoneDICSS), and Angular (Angular-DICSS).

## Does DICSS work with LaTeX?
Yes, but it takes longer.

## It's not working. Help!
Is it in yet? Go to your developer tools console and type `DICSS`. If it's `undefined`, that means you haven't put DICSS in yet. 

## It's still not working!
Don't overthink it. DICSS is only as hard as you make it.

## I don't like DICSS.
That's okay. While we believe most people are fond of DICSS, we realize that DICSS isn't for everyone. There are plenty of alternatives. Feel free to use them instead. And please, never force someone to use DICSS if they're not willing.

## Performance has gotten worse. It doesn't come up as fast as it used to.
Maybe you're using DICSS in the lower `<body>`? Some people experience faster response times using `<head>` or delivering DICSS through the backend.

## THIS IS NUTS!
No, this is DICSS. [NUTS](https://github.com/letsgetrandy/NUTS) is something else.


[travis-image]: https://img.shields.io/travis/letsgetrandy/DICSS/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/letsgetrandy/DICSS
