<template>
<div class="btn__wrapper">
<section class="portfolio-experiment">
  <a>
    <span class="text">Hover me</span>
    <span class="line -right"></span>
    <span class="line -top"></span>
    <span class="line -left"></span>
    <span class="line -bottom"></span>
  </a>
</section>
</div>
</template>
<script>
export default {
    name: 'b-social-icons'
}
</script>
<style>
 .portfolio-experiment, .scene {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-display: flex;
  -webkit-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-align-items: center;
}

.portfolio-experiment {
  background: #2d2d2d;
}
.portfolio-experiment a {
  color: white;
  padding: 0.7em calc(0.7em * 1.2);
  display: inline-block;
  border: 3px solid transparent;
  position: relative;
  font-size: 1.5em;
  cursor: pointer;
  letter-spacing: 0.07em;
}
.portfolio-experiment a .text {
  font-family: proxima-nova, monospace;
  transform: translate3d(0, 0.7em, 0);
  display: block;
  transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
}
.portfolio-experiment a:after {
  position: absolute;
  content: '';
  bottom: -3px;
  left: calc(0.7em * 1.2);
  right: calc(0.7em * 1.2);
  height: 3px;
  background: #f26522;
  transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
  transform-origin: left;
}
.portfolio-experiment .line {
  position: absolute;
  background: #f26522;
}
.portfolio-experiment .line.-right, .portfolio-experiment .line.-left {
  width: 3px;
  bottom: -3px;
  top: -3px;
  transform: scale3d(1, 0, 1);
}
.portfolio-experiment .line.-top, .portfolio-experiment .line.-bottom {
  height: 3px;
  left: -3px;
  right: -3px;
  transform: scale3d(0, 1, 1);
}
.portfolio-experiment .line.-right {
  right: -3px;
  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
  transform-origin: top;
}
.portfolio-experiment .line.-top {
  top: -3px;
  transition: transform 0.08s linear 0.43s;
  transform-origin: left;
}
.portfolio-experiment .line.-left {
  left: -3px;
  transition: transform 0.08s linear 0.51s;
  transform-origin: bottom;
}
.portfolio-experiment .line.-bottom {
  bottom: -3px;
  transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);
  transform-origin: right;
}
.portfolio-experiment a:hover .text,
.portfolio-experiment a:active .text {
  transform: translate3d(0, 0, 0);
  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
}
.portfolio-experiment a:hover:after,
.portfolio-experiment a:active:after {
  transform: scale3d(0, 1, 1);
  right: -3px;
  left: -3px;
  transform-origin: right;
  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
}
.portfolio-experiment a:hover .line,
.portfolio-experiment a:active .line {
  transform: scale3d(1, 1, 1);
}
.portfolio-experiment a:hover .line.-right,
.portfolio-experiment a:active .line.-right {
  transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;
  transform-origin: bottom;
}
.portfolio-experiment a:hover .line.-top,
.portfolio-experiment a:active .line.-top {
  transition: transform 0.08s linear 0.4s;
  transform-origin: right;
}
.portfolio-experiment a:hover .line.-left,
.portfolio-experiment a:active .line.-left {
  transition: transform 0.08s linear 0.48s;
  transform-origin: top;
}
.portfolio-experiment a:hover .line.-bottom,
.portfolio-experiment a:active .line.-bottom {
  transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
  transform-origin: left;
}
</style>
