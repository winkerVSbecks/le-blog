---
layout: post
title: Custom Easing with SASS
citation: patakk.tumblr.com
citation-link: http://patakk.tumblr.com/post/88602945835/heres-a-simple-function-you-can-use-for-easing
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% highlight js %}
x = 300 * ease(time, g);

float ease(float p, float g){
  if (p < 0.5)
    return 0.5 * pow(2*p, g);
  else
    return 1 - 0.5 * pow(2*(1 - p), g);
}
{% endhighlight %}

<p data-height="500" data-theme-id="7569" data-slug-hash="Cihkr" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/winkerVSbecks/pen/Cihkr/'>SASS Mixin for Generating a Custom Easing Function</a> by Varun Vachhar (<a href='http://codepen.io/winkerVSbecks'>@winkerVSbecks</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

{% include citation.html %}