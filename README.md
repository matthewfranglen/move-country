How to Leave the UK
===================

This is a website dedicated to interactive comparisons of European countries. You can see it at http://exit.me.uk

Installation and Execution
--------------------------

This requires node and npm.

### Installation

```bash
npm install
bin/build-data
```

### Execution

```bash
npm run serve
```

This should open a new tab in your browser. If it does not then go to http://localhost:8000/

Contributions
-------------

All contributions are welcome. It would be great to increase the statistics shown and the available activities.

If you have any high quality data available, with citations, please create an issue with details.

If you can create a pull request with the change then so much the better :smile:.

### Data Sets

To create a data set add a json file into the data/set folder. This should
contain an object where the keys are the country names. The values will then be
added to the country data when the build-data command is run.

You should look at the other data sets for inspiration.
