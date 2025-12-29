# Restart Development Server
Write-Host "Stopping all Node.js processes..." -ForegroundColor Yellow
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

Write-Host "`nStarting development server..." -ForegroundColor Green
Write-Host "This will load the .env file with your API key." -ForegroundColor Cyan
Write-Host "`nPress Ctrl+C to stop the server.`n" -ForegroundColor Yellow

npm start
