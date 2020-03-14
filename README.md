# node-selenium

This is a sample nodejs app that uses express. The purpose of this is to explore different azure devops pipeline options we can create with these apps. 

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

Make sure you have the latest Chromedriver installed. This can be found here https://chromedriver.chromium.org/. Depending on the operation system, you need to add this to your path. This is required for selenium. For the current version we need chrome driver version 80.0.3987.106. Also make sure you have chrome browser version that is greater than 80

```sh
git clone https://github.com/nikhil-nomula/node-selenium.git # or clone your own fork
cd node-selenium
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Testing

```
npm run test
```


## Questions

nikhidas@gmail.com