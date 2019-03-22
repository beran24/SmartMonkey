# Esteve Cabrera SmartMonkey API Consumer

Hello reviewer 👋 My name is Esteve and I'm the author of this application for a job position at SmartMonkey. I resolved the test in the given time plus 0,5, following the instructions, with everything on the place you asked for. Tho, I feel like is gonna be good to write some thoughts I have about the code.

## Architecture

I have one component that have all app logic and the structure of app, then i divide in 3 components, one for the button, another for loader purposes and the last one for results.

## Considerations

In the ResultsComponent(the app wasn't clear in the test instructions, most probably intended ), so I made some assumptions. I considered that I must show the results route, for any given vehicle. For this reason I showed a table before the table that dessigner gived to me, I assume that both have to be there, and have to show one table for each vehicle to see the routes.

I show the response time and distance, but I don't know if it's in KM, Miles, seconds or hours, for this reason I showed given.

## What next?

If I'd have more time I'd focus on:

1. Contact with someone who knows what I have to do properly
2. Improve the dessign
3. Make test with Jest
