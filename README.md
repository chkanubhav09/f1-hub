# F1 HUB

An unofficial, free fan hub for Formula 1. Not affiliated with Formula 1, the FIA or any team.

**Live site:** https://chkanubhav09.github.io/f1-hub/

## Features
- **Home:** next race countdown with weekend schedule, last race result, merged headlines (BBC Sport, Motorsport.com).
- **Live / Session:** latest OpenF1 session with positions, tyre stints, weather and race control messages.
- **Standings:** drivers and constructors with points bars.
- **Calendar:** full season with winners.
- **Results archive:** every season from 1950, race / qualifying / sprint / pit stops.
- **Drivers and Teams:** current grid, career totals (races, wins, poles, titles).
- **Predictions:** winner probabilities and podium from past results, with a backtest on the season so far.
- **Compare:** head-to-head between any two current drivers.
- **Title simulator:** a Monte Carlo toy over the remaining races.

## Data (free, no keys)
[Jolpica F1 API](https://api.jolpi.ca/ergast/f1/) (Ergast-compatible), [OpenF1](https://openf1.org/), BBC Sport and Motorsport.com RSS via rss2json.

## Honest limits
- Predictions use only past results (50% recency-weighted points, 30% season points per race, 20% team points per race). They ignore qualifying, weather, circuit and reliability. Not a betting tip.
- OpenF1's free tier is limited during live sessions; some feeds can be empty and the page shows nothing rather than inventing data.
- Free APIs rate-limit; if a tab fails, retry in a minute.

## Run locally
Open `index.html`. Pure static HTML/JS, no build.
