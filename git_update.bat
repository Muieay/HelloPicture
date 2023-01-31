@echo off
F:
cd F:\Muieay\HelloPicture
node index.js
call git add .
call git commit -m "update"
call git push
pause
