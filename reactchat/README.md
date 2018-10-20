## A dermatologist app - Dermio:

A patient in US can consult a dermatologist online using our app. A doctor
can give consultation and prescription based on the description by the patient.

**Current app**: dermio.com

**Current stack**: Ruby on Rails and iOS app.


#### Our current objective:

As consultants we always want to our programmatic decisions to result in some
benefit (customer conversion or some sorta business) to our client. With that
objective in mind, we decided to move the entire app to a chat bot flow. At the
moment, there is an issue iPhone with the submit button getting hidden. Hope this
issue would be fixed in the library that we use.


#### Development:

##### Setup:
This project is currently bootstrapped using `create-react-app` tool. We will
later move to `gatsby` so we could enable the SEO thingy.

```
git clone git@gitlab.com:sataiva/dermio-web.git
cd dermio-web
yarn
yarn start
```

##### Coding: 

Have `visual studio code` or `sublime text` or some good editor and have plenty
good plugins like prettier.io that can automate your workflow.

Style guide: Please follow the style guide such as https://github.com/airbnb/javascript
and https://github.com/airbnb/javascript/tree/master/react, and others to code
in a standard way. 

At the moment, we haven't enforced any linting strongly, it is better to resolve the
lint errors and follow a particular coding standard so in future the devs find it
easier.

##### Git:
* Always checkout from master. And create a new branch.
* Commit often, push often. Even if the feature is incomplete try to push often.
* Please do not work or push to master branch
* Write useful commit messages. Good title and good description. 


##### Pull Request:

###### Before Pull Request

* [x] Squash commits  if needed.
* [x] Be up to date with master

git pull --rebase origin master
* [x] Make sure there are no errors in your tests.

[x] Make sure there are no errors while you do manual testing/checking.

###### After

* [x] Give pull request
* [x] Look at the diff of your pull request, just skim through to find any spelling or any other error.
* [x] Wait for some one to review your code.
* [x] Do not merge the pull request yourself.

#### Debugging or when you get stuck:
* Check the code flow. Identify the exact line that causes the issue. Use console.log or puts as much as possible.
* After debugging, googling in stackoverflow, if you're stuck for hours please tell about this issue in gitlab or github repo. 
* You could create an issue in the repo. Tell where the issue occurs and in which scenario it fails, in which it works. And to reproduce the bug what the person should install or run or click. And what you have tried. You could also attach screenshot or stack trace of the error, anything that would help for
others to suggest a solution at a glance

#### Deployment:


This project will be deployed to firebase. There is no automatic deployment yet.

```
yarn run build
firebase deploy
```

Site: https://dermio.sataiva.com/
