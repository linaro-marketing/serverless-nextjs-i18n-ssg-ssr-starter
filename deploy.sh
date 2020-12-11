echo "Pulling current .serverless state from s3..."
aws s3 sync s3://static-management-files/your_serverless_nextjs_project_cache/${BUILD_ENV}/.serverless .serverless --delete
echo "Deploying serverless changes..."
npx serverless
echo "Pushing any changes to .serverless state to s3..."
aws s3 sync .serverless s3://static-management-files/your_serverless_nextjs_project_cache/${BUILD_ENV}/.serverless --delete
# echo "Pushing latest amplify changes..."
# amplify push --y