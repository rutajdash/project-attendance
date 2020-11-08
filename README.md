# Project Attendance

A program capable of signing in and attending meetings as per a fixed schedule on behalf of a person.

- Developed on Node.js v12 LTS

## Present Capabilites

- Attend meetings on MS Teams from hardcoded meeting details and credentials

### Next Steps

- Add mocha and chai for unit testing
- Setup PM2 environment configration
- Create EXE files to control the program

## Planned Capabilites

- Timetable attach through CSV file
- Deciphering appropriate meeting if more than one exists
- Headless run
- GUI (WebApp) to feed timetable and other meeting details
- Expand beyond MS Teams
- ML based response system if name is called (Experimental)

## Contrbuting Instructions

- Project

```bash
# To Download
$ git clone https://github.com/rutajdash/project-attendance.git

# To Set Up
$ npm install
```

- Git Workflow

```bash
## Step 1: Fork Repository

## Step 2: Git Set Up & Download
# Clone the repo
$ git clone https://github.com/<User-Name>/project-attendance.git
# Add upstream remote
$ git remote add upstreatm https://github.com/rutajdash/project-attendance.git
# Fetch and rebase with upstream/development
$ git fetch upstream
$ git rebase upstream/development

## Step 2: Create and Publish Working Branch
$ git checkout -b <type>/<issue|issue-number>/{<additional-fixes>}
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Types:
# wip - Work in Progress; long term work; mainstream changes;
# feat - New Feature; future planned; non-mainstream changes;
# bug - Bug Fixes
# exp - Experimental; random experiemntal features;
```

- On Task Completion:

```bash
## Committing and pushing your work
# Ensure branch
$ git branch
# Fetch and rebase with upstream/development
$ git fetch upstream
$ git rebase upstream/development
# Add untracked files
$ git add .
# Commit all changes with appropriate commit message and description
$ git commit -m "your-commit-message" -m "your-commit-description"
# Fetch and rebase with upstream/development again
$ git fetch upstream
$ git rebase upstream/development
# Push changes to your forked repository
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Creating the PR using GitHub Website
# Create Pull Request from <type>/<issue|issue-number>/{<additional-fixes>} branch in your forked repository to the development branch in the upstream repository
# After creating PR, add a Reviewer (Any Admin) and yourself as the assignee
# Link Pull Request to appropriate Issue, or Project+Milestone (if no issue created)
# IMPORTANT: Do Not Merge the PR unless specifically asked to by an admin.
```

- After PR Merge

```bash
# Delete branch from forked repo
$ git branch -d <type>/<issue|issue-number>/{<additional-fixes>}
$ git push --delete origin <type>/<issue|issue-number>/{<additional-fixes>}
# Fetch and rebase with upstream/development
$ git checkout development
$ git pull upstream
$ git push origin
```

- Always follow [commit message standards](https://chris.beams.io/posts/git-commit/)
- About the [fork-and-branch workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
