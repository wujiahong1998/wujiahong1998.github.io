// build time:Fri Feb 07 2020 19:25:16 GMT+0800 (GMT+08:00)
!function(){function t(t){var r=[];a.fillStyle="#005eac";var h=new Date,u=70,s=30,v=h.getHours(),g=Math.floor(v/10),m=v%10;r.push({num:g}),r.push({num:m}),r.push({num:10});var c=h.getMinutes(),g=Math.floor(c/10),m=c%10;r.push({num:g}),r.push({num:m}),r.push({num:10});var M=h.getSeconds(),g=Math.floor(M/10),m=M%10;r.push({num:g}),r.push({num:m});for(var p=0;p<r.length;p++)r[p].offsetX=u,u=f(u,s,r[p].num,t),p<r.length-1&&10!=r[p].num&&10!=r[p+1].num&&(u+=l);if(0==i.length)i=r;else for(var C=0;C<i.length;C++)i[C].num!=r[C].num&&(n(r[C]),i[C].num=r[C].num);return e(t),o(),h}function n(t){for(var n=t.num,e=m[n],o=0;o<e.length;o++)for(var f=0;f<e[o].length;f++)if(1==e[o][f]){var a={offsetX:t.offsetX+u+2*u*f,offsetY:30+u+2*u*o,color:g[Math.floor(Math.random()*g.length)],g:1.5+Math.random(),vx:4*Math.pow(-1,Math.ceil(10*Math.random()))+Math.random(),vy:-5};v.push(a)}}function e(t){for(var n=0;n<v.length;n++)t.beginPath(),t.fillStyle=v[n].color,t.arc(v[n].offsetX,v[n].offsetY,u,0,2*Math.PI),t.fill()}function o(){for(var t=0,n=0;n<v.length;n++){var e=v[n];e.offsetX+=e.vx,e.offsetY+=e.vy,e.vy+=e.g,e.offsetY>h-u&&(e.offsetY=h-u,e.vy=-e.vy*s),e.offsetX>u&&e.offsetX<r-u&&(v[t]=v[n],t++)}for(;t<v.length;t++)v.pop()}function f(t,n,e,o){for(var f=m[e],a=0;a<f.length;a++)for(var r=0;r<f[a].length;r++)1==f[a][r]&&(o.beginPath(),o.arc(t+u+2*u*r,n+u+2*u*a,u,0,2*Math.PI),o.fill());return o.beginPath(),t+=f[0].length*u*2}var a,r=820,h=250,u=7,l=10,s=.65,v=[];const g=["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];var i=[],m=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],c=document.getElementById("canvas");c.width=r,c.height=h,a=c.getContext("2d");new Date;setInterval(function(){a.clearRect(0,0,a.canvas.width,a.canvas.height),t(a)},50)}();
//rebuild by neat 