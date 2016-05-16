# README #

Simple ReST API using NodeJS and HappiJS - for testing purposes only


### How do I get set up? ###

* Clone the repo into the desired dir
```
$ git clone ....
```
* Go in the cloned repo dir and install needed npm modules like:
```
$ cd nodejs_pplanner_test
$ npm install
```
* Copy the needed config files, and edit their contents to fit your needs:
```
$ cp src/Config/general.ts.sample src/Config/general.ts
$ cp src/Config/database.ts.sample src/Config/database.ts
```

* Compile with :
```
$ tsc
```

* Run the node with : 
```
 $ node .
```

### Testing ###
* Run the tests with: 
```
$ npm test
```
