Thank you for your time that you are willing to invest in our interview process.
We appreciate your effort and hope you will enjoy this small project.

The technical assignment consist of developing/enhancing a small web application
that will let the user search for the cheapest flights in Europe.

You can have a look at our flight selector in our homepage www.ryanair.com to understand how
this works.

Remember that not all destinations are available for a specific departure airport.

There are some key requirements that the applications needs to have:

## Requirements

* No external library, except the libraries already present in the
  package.json.

* Gracefully handle errors. Shit happens so the users needs to be informed

* Mobile first design
* Using Ryanair palette ( colors included in styles.scss )

### Services

In order to get the list of Iata codes ( airport codes )  with the relative destinations
the webapp will get those information from the following API:

```
https://murmuring-ocean-10826.herokuapp.com/en/api/2/forms/flight-booking-selector/
```

Instead to get the list of cheap flights:

```
https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/DUB/to/STN/2014-12-02/2015-02-02/250/unique/?limit=15&offset-0
```

where DUBis the originating IATA code, STNis the destination IATA code,
the first date range is the start of the period, and the second is the end.

### Mid/Senior position ( only )
  
* Accessibility concerns - the whole form should work without using the mouse
* Lazy loading unnecessary modules
* Reactive forms - Usage of reactive forms
* Performance mindset ( assets )
* One way dataflow, all data should follow a one way dataflow approach.
* Unit tests - At least one component and one service should be tested.

Show us the best you can do!

## Workflow

* Fork the project on gitlab
* Do your magic, commits messages and style will be also evaluated
* Share your fork with

    * @fortunatof_ryanair ( Reporter access )
    * @sanchezjl ( Reporter access )
