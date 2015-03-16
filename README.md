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
