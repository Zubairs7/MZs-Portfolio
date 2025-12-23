@echo off
echo Starting Backend and Frontend servers...
echo.
echo Backend will run on: http://localhost:8000
echo Frontend will run on: http://localhost:3000
echo.
echo Press Ctrl+C to stop both servers
echo.

start "Backend Server" cmd /k "cd backend && python -m uvicorn server:app --reload --host 127.0.0.1 --port 8000"
timeout /t 3 /nobreak >nul
start "Frontend Server" cmd /k "cd frontend && npm start"

echo.
echo Both servers are starting in separate windows.
echo Please wait for the frontend to compile (this may take 30-60 seconds).
echo.


