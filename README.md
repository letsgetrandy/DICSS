# DICSS
Directly injected CSS

Forget SASS. Forget LESS. What you want is DICSS. Once you've had DICSS, you won't settle for LESS.

## Is it safe?
Don't worry. DICSS uses a wrapper.

## How do you use DICSS?
Just grab DICSS and stick it wherever you like. DICSS works equally well in your `<head>` or in your `<body>`.

```
<head>
<script src="dicss.js"></script>
</head>
```

Then, go ahead and start putting DICSS in! Put 'em everywhere you like. Nobody will judge you for what you do with your DICSS.

```
DICSS.putIn('body', 'margin: 0');
DICSS.putIn('p', 'height: 100%');
```

And when you're done with a style, you can easily remove it:

```
DICSS.pullOut('p');
```

Advanced node users have even been putting DICSS in their back-end, but help with this use-case is beyond the scope of this document.

## Why no min version?
It's not the size of DICSS that matters, it's what you can do with it.

## Can DICSS be extended?
Yes! You can add whatever you want to DICSS. Just pass an object of methods into `DICSS.extend()`.

DICSS keeps on growing! Some popular DICSS add-ons include

* *COCSS* (cross-origin DICSS),
* *SECSS* (security enhanced DICSS)
* *Circum-Sizer* (calculate the circumference of a rounded element in CSS)

Got something you want to add to DICSS? Let us know! Help us make DICSS bigger and better than ever!

## It's not working. Help!
Is it in yet? Go to your developer tools console and type `DICSS`. If it's `undefined`, that means you haven't put DICSS in yet. 

## Is DICSS compatible with other frameworks?
Yes! There are projects currently underway to integrate DICSS with Knockout (KOCSS), Backbone (BoneDICSS), and Angular (Angular-DICSS).
