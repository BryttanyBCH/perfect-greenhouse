# The Perfect Greenhouse in Stardew Valley

Perfect Greenhouse is a Stardew Valley crop calculator with a twist. Instead of calculating the gold per day of your crop layouts like most other calculators, Perfect Greenhouse takes in as input your desired crop yield ratios, and returns percentages for how much space each crop in your field should take up.

Does it sound strange? Here's an example:

Let's say you want a steady supply of the cooked dish: Autumn's Bounty. The ingredients are 1 Yam and 1 Pumpkin. Your first thought might be to plant an equal amount of these ingredients (50% of the field for each), but this would not be optimal. Since Yams take 10 days to grow and pumpkins take 13 days to grow, you would end of with an excess of Yams going unused as time goes on. To find the optimal solution, we need to take into account both the desired yield AND the growth time.

Using Perfect Greenhouse, we find that the optimal percentages are:
- ~57% of the field for Pumpkins
- ~43% of the field for Yams

Perfect Greenhouse is able to arrive at this conclusion be solving a series of automatically generated linear equations. It can also handle arbitrary amount of input crops with any in any desired ratio.


## To-Do:
- [ ] Handling of regrowable crops
- [ ] Handling of multi-harvest crops
- [ ] An option to include cooked dishes as input
- [ ] A more pretty UI
- [ ] A better crop diagram display
