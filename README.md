The United Nations Code for Trade and Transport Locations is a code list mantained by UNECE, United Nations agency, to facilitate trade.

## Data

Data comes from the [UNECE page](http://www.unece.org/cefact/locode/welcome.html), released at least once a year. The files released in this package are extracted from the mdb archive to preserve UTF-8 encoding.

## License

All data is licensed under the [ODC Public Domain Dedication and Licence (PDDL)](http://opendatacommons.org/licenses/pddl/1-0/).

## Fork notes

I tried adding JSON versions of the CSV data (though larger) as well as publishing on NPM aside from DPM. I've yet to manage to automate the JSON generation by Gulp to remove the built result from source control; so far I used the [Papa Parse demo](http://papaparse.com/demo) and Excel. The combination of unquoted CSV data, the 100k+ lines along with the big JSON size make this kind of unfortunate though.
