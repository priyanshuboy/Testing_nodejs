docker compose up -d
echo "Waiting for the database to be ready..."
./wait-for-it.sh "postgresql://postgres:mysecretpassword@localhost:5432/mydb" --timeout=30 --strict -- echo "Database is ready"
npx migrate dev --name init
npm run test
docker compose down