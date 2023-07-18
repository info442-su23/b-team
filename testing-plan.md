# Testing Plan

## Testing Type
We will use manual acceptance testing to validate that our web application behaves the way our stakeholders expect to. By seeing the web application with an end-user perspective, we can catch any errors that a user may face before deployment.

## Testing Process
The project manager and designer will run the tests corresponding to the milestone as soon as they have been hit. At the latest, tests should be run on July 23, or a couple days before Sprint 2 to give ample time to fix any bugs. Similarly, Sprint 2 tests are run by August 3 at the latest.

## Test Environment
Google Chrome Browser
Code run on production website
Desktop device

## Defect Management
If a bug has been found:
1. **Verify the bug**: Try to replicate the same steps that led them to produce that bug to verify that it’s not an isolated case.
2. **Search for Existing Issues**: Check the repo’s issues tracker to see if the bug has already been reported. If you find a similar issue, leave a comment with any additional information about the bug.
3. **Create a new issue**: Feel free to copy this template to fill out the bug report
- **Title**: Clear, descriptive summary of the  problem
- **Comment**:
  - **Steps to Reproduce**: List specific steps taken to encounter the bug, including any user input or data used in testing (e.g. “Clicked on ‘next’ button”)
  - **Expected Behavior**: What should happen if someone follow the steps
  - **Actual Behavior**: What actually happened
  - **Environment**:
    Operating system
    Browser
    Was the web app run on test or production?
  - **Screenshots or Logs**
4. **Assign labels**:
- “Bug - High priority” (e.g. If bug inhibits the end user from playing the game, crashes, functionality issues)
- “Bug - Low priority” (e.g. cosmetic issues)
5. **Assigning to Team Members**
- Assign based on familiarity with the code and where the bug is being produced
- Consider workload and availability
- Self-assign if you feel competent that you could resolve it on your own
6. **Close the issue once resolved**

## User Acceptance Testing Script

### Quiz Game Feature
**Context**: First-time user who has selected tomato seed and have not played any games up to this point

**Action**: Visit the game catalog page.
**Result**: Expect to see the progress bar to be at 0/100 (Requirements G1a, G1b)

**Action**: Click the “Quiz” banner.
**Result**: Expect to lead to “Quiz Instructions” Page (Requirement 13j)

**Action**: Click the “Next” button
**Result**: Expect to lead to “Question ⅕” Page (Requirements 14f and 14g).
Expect “Submit” button to be grayed out and not clickable.

**Action**: Click the top left button answer
**Result**: Expect top left button to be colored in to indicate user selection (Requirement 15e). Expect “Submit” button to no longer be grayed out and clickable (Requirement 15f)

**Action**: Click the top right button answer
**Result**: Expect top left button to no longer be colored in and top right button should be colored in (Requirement 15e)

**Action**: Click the “Submit” button
**Result**: Expect to be taken to “Correct/Incorrect” Page (Requirement 15f)
Expect incorrect answers to be grayed out and correct answer to be not grayed out (Requirement 16b)
Expect “Next Question” button to be clickable (Requirement 16d)

**Context**: User has submitted fifth and final question

**Action**: Click “Next” button
**Result**: Expect total number of questions answered correctly to be shown (Requirement 18b)
Expect correct number of points to be awarded (Requirement G1ba, 18c)
Expect progress bar to add new total of points (Requirement G1b)

**Action**: Click “Back to Games” button
**Result**: Expect to be taken to “Select a game” Page (Requirement 18d)

### Sort Game Feature
**Context**: First-time user who has selected tomato seed and have not played any games up to this point

**Action**: Visit the game catalog page.
**Result**: Expect to see the progress bar to be at 0/100 (Requirements G1a, G1b)

**Action**: Click “Sort” icon
**Result**: Expect to be taken to Sort Game Instruction Page (Requirement 13j)

**Action**: Click the “Next” button
**Result**: Expect to be taken to “Sort ⅕” Page (Requirements 23c).
Expect “Submit” button to be grayed out and not clickable (Requirement 23g).

**Action**: Click “Paper” bin image
**Result**: Expect “Paper” bin image to have black stroke (Requirement 23e).
Expect the rest of bin images to be dimmed (Requirement 23e).
Expect “Submit” button to no longer be grayed out and clickable (Requirement 23g).

**Action**: Click “Submit” button
**Result**: Expect to be taken to the “Correct Answer” Page (Requirements 24g and 24h).
Expect “Next” button to be displayed (Requirement 24j)

**Action**: Click “Games” button in navbar
**Result**: Expect popup warning to user that points will not be saved upon exiting the game early (Requirement 24k)

**Action**: Click “Next” button
**Result**: Expect to be taken to next sorting question (Requirement 24j)

**Context**: User has submitted their 5th and final answer and all answers have been correct

**Action**: Click “Next” button
**Result**: Expect to be taken to “Sort Complete” Page (Requirement 24j).
Expect total number of questions answered correctly to be shown (Requirement 18b)
Expect correct number of points to be awarded (Requirement G1ba, 18c)
Expect progress bar to add new total of points (Requirement G1b)

**Action**: Click “Back to Games” button
**Result**: Expect to be taken to “Select a game” Page (Requirement 25g)