
::%SystemRoot%\explorer.exe "C:\Program Files\MongoDB\Server\3.6\bin"

echo "starting"

cd C:\Program Files\MongoDB\Server\3.6\bin

mongod.exe --dbpath C:\Users\aldri\Mongo-data

pause