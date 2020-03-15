---
title: "How to fix pushed local and remote branch name easily on Git?"
date: "2020-01-24T09:56:00.000Z"
category: "Tech Hecks"
cover: /images/git.png
tags:
  - git
  - version control system
---

You created branch and write some of codes, pushed to remote but suddenly you noticed that the branch name was incorrect! Ahh.. Don't worry, you can change easily your branch name:

- Firstly change local branch name on your branch:

```
git branch -m new-name
```

- Push that to remote:

```
git push origin :old-name new-name
```

Your old shitty branch and merge request will delete and you can open new merge request with same changes. You don't lose your changes.

## Here are some Git commands that will help:

br = branch name
sb = source branch
tb = target branch
obr = old branch name
nbr = new branch name

### Basic Snapshotting

| Command                            | Description                                       |
| ---------------------------------- | ------------------------------------------------- |
| `git status`                       | Check status                                      |
| `git add [file-name.txt]`          | Add a file to the staging area                    |
| `git add -A`                       | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes                                    |
| `git rm -r [file-name.txt]`        | Remove a file (or folder)                         |

### Branching & Merging

| Command                            | Description                                             |
| ---------------------------------- | ------------------------------------------------------- |
| `git branch`                       | List branches (the asterisk denotes the current branch) |
| `git branch -a`                    | List all branches (local and remote)                    |
| `git branch [br]`                  | Create a new branch                                     |
| `git branch -d [br]`               | Delete a branch                                         |
| `git push origin -D [br]`          | Delete a remote branch                                  |
| `git checkout -b [br]`             | Create a new branch and switch to it                    |
| `git checkout -b [br] origin/[br]` | Clone a remote branch and switch to it                  |
| `git branch -m [obr] [nbr]`        | Rename a local branch                                   |
| `git checkout [br]`                | Switch to a branch                                      |
| `git checkout -`                   | Switch to the branch last checked out                   |
| `git checkout -- [file-name.txt]`  | Discard changes to a file                               |
| `git merge [br]`                   | Merge a branch into the active branch                   |
| `git merge [sb] [tb]`              | Merge a branch into a target branch                     |
| `git stash`                        | Stash changes in a dirty working directory              |
| `git stash clear`                  | Remove all stashed entries                              |

### Sharing & Updating Projects

| Command                         | Description                                                 |
| ------------------------------- | ----------------------------------------------------------- |
| `git push origin [br]`          | Push a branch to your remote repository                     |
| `git push -u origin [br]`       | Push changes to remote repository (and remember the branch) |
| `git push`                      | Push changes to remote repository (remembered branch)       |
| `git push origin --delete [br]` | Delete a remote branch                                      |
| `git pull`                      | Update local repository to the newest commit                |
| `git pull origin [br]`          | Pull changes from remote repository                         |

### Inspection & Comparison

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `git log`            | View changes                   |
| `git log --summary`  | View changes (detailed)        |
| `git log --oneline`  | View changes (briefly)         |
| `git diff [sb] [tb]` | Preview changes before merging |

_[Sources:_ [_https://www.github.com/joshnh/Git-Commands/blob/master/README.md_](https://github.com/joshnh/Git-Commands/blob/master/README.md)_]_

_[Cover image:_ [_https://svitla.com/blog/gitlab-vs-github_](https://svitla.com/blog/gitlab-vs-github)_]_
