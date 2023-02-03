@echo off
F:
cd F:\Muieay\HelloPicture
call node index.js
call git add .
call git commit -m "update"
call npm version patch
call git push
pause
