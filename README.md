# Nodejs_Task_11Feb

1. Create a Mysql server on your system on port 3307
2. Go to directory where you saved the folder.
3. In the terminal run the command npm install and then run nodemon app.js
4. Backend server will start at port 3000
5. You can test the APIs using postman
6. I have attached the curl.txt file below from which you can directly import and run the APIs


1) Curl for add the employee:

curl --location --request POST 'http://localhost:3000/api/user/addEmployee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"ap;ksdf",
    "email":"ajskdasda@gmail.com",
    "joindate":"12132123",
    "dob":"010800",
    "department":"IT",
    "designation":"SOftware Engineer",
    "reportingUser":"ajskda@gmail.com"
}'


2) Get all employee for a particular user 

curl --location --request GET 'http://localhost:3000/api/user/getEmployee/ajskdasda@gmail.com'

3) Register user

curl --location --request POST 'http://localhost:3000/api/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"apksdf",
    "email":"ajskdasda@gmail.com",
    "password":"123445",
    "mobile":"9557139559",
    "status":"1"
}'

4)Login an User

curl --location --request POST 'http://localhost:3000/api/user/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"ajskdasda@gmail.com",
    "password":"123445"
}
'

