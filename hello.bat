@echo off
F:
cd F:\Muieay\HelloPicture
call node index.js
call gulp
call git add .
call git commit -m "update"
call git push
pause
