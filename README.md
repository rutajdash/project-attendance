# Project Attendance

A program capable of signing in and attending meetings as per a fixed schedule on behalf of a person.

- Developed on Node.js v12 LTS

**Developed in association with [Cyborg NITR](https://github.com/CYBORG-NIT-ROURKELA/)**

## Present Capabilites

- Attend meetings on MS Teams from hardcoded meeting details and credentials

### Next Steps

- Add mocha and chai for unit testing
- Setup PM2 environment configration
- Create EXE (executable) files to control the program

## Planned Capabilites

- Timetable attach through CSV file
- Deciphering appropriate meeting if more than one exists
- Headless run
- GUI (WebApp) to feed timetable and other meeting details
- Expand beyond MS Teams
- ML based response system if name is called (Experimental)

## Installation

### Requirements

- Node.js v12 or later (with NPM CLI)
  - For Windows and MacOS: (Node.js and NPM)[https://nodejs.org/en/download/]
  - For Ubuntu:
    ```bash
    $ sudo apt install nodejs npm
    ```
- Git CLI
  - For Windows, MacOS and Linux: (Git SCM)[https://git-scm.com/downloads]

### Procedure

```bash
$ git clone https://github.com/rutajdash/project-attendance.git
$ cd project-attendance
$ npm install
```

### To Run

- Production

```bash
$ npm start
```

- Development

```bash
$ npm run dev
```

- Testing

```bash
$ npm run test
```

## Contributing

### Git Workflow

- **Step 1:** Fork the repository
- **Step 2:** Git Setup & Download

```bash
# Clone the repo
$ git clone https://github.com/<User-Name>/project-attendance.git

# Add upstream remote
$ git remote add upstream https://github.com/rutajdash/project-attendance.git

# Fetch and rebase with upstream/development
$ git fetch upstream
$ git rebase upstream/development
```

- **Step 3:** Create and Publish Working Branch

```bash
$ git checkout -b <type>/<issue|issue-number>/{<additional-fixes>}
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Types:
# wip - Work in Progress; long term work; mainstream changes;
# feat - New Feature; future planned; non-mainstream changes;
# bug - Bug Fixes
# junk - Experimental; random experiemntal features; throwaway branch;
```

- **On Task Completion, Step 4:** Commit and push your work

```bash
# Ensure branch
$ git branch

# Fetch and rebase with upstream/development
$ git fetch upstream
$ git rebase upstream/development

# Add untracked files one by one
$ git add filename

# Commit all changes with appropriate commit message and description. Strcitly follow commit message standards.
$ git commit -m "your-commit-message" -m "your-commit-description"

# Fetch and rebase with upstream/development again
$ git fetch upstream
$ git rebase upstream/development

# Push changes to your forked repository
$ git push origin <type>/<issue|issue-number>/{<additional-fixes>}

## Creating the PR using GitHub Website
```

- **Step 5:** Create the PR using GitHub Website

  1. Create Pull Request from <type>/<issue|issue-number>/{<additional-fixes>} branch in your forked repository to the development branch in the upstream repository. Again, ensure the name follows commit standards and the description must detail the work done.
  1. After creating PR, add a Reviewer (Any Admin) and add yourself as the assignee
  1. Link Pull Request to appropriate Issue, or Project+Milestone (if no issue created)
  1. **Do Not Merge the PR.** That will be done by the reviewer.

- **After PR Merge, Step 6:** Working repository cleanup

```bash
# Delete branch from forked repo
$ git branch -d <type>/<issue|issue-number>/{<additional-fixes>}
$ git push --delete origin <type>/<issue|issue-number>/{<additional-fixes>}

# Fetch and rebase with upstream/development
$ git checkout development
$ git pull upstream
$ git push origin
```

### Important Instuctions & Guides

- Always follow [commit message standards](https://chris.beams.io/posts/git-commit/)
- About the [fork-and-branch workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)
