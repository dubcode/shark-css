**WHAT IS SHARK CSS**
Shark CSS is a highly opinionated predefined set of CSS classes, Resets and Common Components. Built to be easily extendable and to take full advantage of CSS Variables, Flexbox and CSS Grid.

Weighing in at under 20k uncompressed and under 3k GZipped, Shark CSS is without a doubt faster, lighter and more efficient when compared to most other CSS Frameworks. Shark CSS can easily be used as a full custom framework tailored to suit your project or brand.

| Framework | Version | Original - kb | GZipped - kb |
| Shark CSS | V 1.0.0 | 17.8kb | 2.7kb |
| Foundation | V -.-.- | 154.1kb | 15.9kb |
| Materialize | V -.-.- | 175.0kb | 21.1kb |
|Bootstrap | V 4.0.0 | 187.8kb | 22.7kb |
| Tailwind | V -.-.- | 783.5kb | 78.0kb |

**SETUP**
To get setup simply [download Shark CSS](https://raw.githack.com/dubcode/shark-css/master/shark.css) or add it to your project using a script tag.

```
<script src="https://raw.githack.com/dubcode/shark-css/master/shark.css"></script>
```
        
**BASIC USAGE**
Shark CSS runs on a Blocks, Grids and Columns system and does away with BEM CSS in favour of more lightweight naming conventions.

See below a simple example of a common layout.

```
<div class="block b-1 c-10 mb-4 p-4 flex">
  header
</div>
<div class="block mb-4">
  <div class="grid grid-3 s-col-w-2 m-col-w-3 l-col-w-4 xl-col-w-2 gg-4">
    <div class="col-1 s-col-2 b-3 c-10 p-4 flex">column 1</div>
    <div class="col-2 s-col-1 b-5 c-10 p-4 flex">column 2</div>
    <div class="col-3 s-col-3 b-3 c-10 p-4 flex">column 3</div>
  </div>
</div>
```
