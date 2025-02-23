# collab
A collab operation between 2 developers. (We locking in, PLEASE)

## How to use

1. Clone the repository

## Useful Git Commands for Collaboration

### 1. `git clone`
- **Usage**: `git clone <repository-url>`
- **Description**: Copies a remote repository to your local machine. This is typically the first step in collaborating on a project.
- **Example**: 
  ```bash
  git clone https://github.com/username/repository.git
  ```

### 2. `git branch`
- **Usage**: `git branch` or `git branch <branch-name>`
- **Description**: Lists all branches in the repository or creates a new branch. Branches allow you to work on different features or fixes independently.
- **Example**: 
  ```bash
  git branch feature-branch
  ```

### 3. `git checkout`
- **Usage**: `git checkout <branch-name>`
- **Description**: Switches to the specified branch. Use this to move between different lines of development.
- **Example**: 
  ```bash
  git checkout feature-branch
  ```

### 4. `git pull`
- **Usage**: `git pull`
- **Description**: Fetches and merges changes from the remote repository to your current branch. This keeps your local branch up-to-date with the remote branch.
- **Example**: 
  ```bash
  git pull origin main
  ```

### 5. `git merge`
- **Usage**: `git merge <branch-name>`
- **Description**: Combines changes from the specified branch into your current branch. This is used to integrate features or fixes.
- **Example**: 
  ```bash
  git merge feature-branch
  ```

### 6. `git status`
- **Usage**: `git status`
- **Description**: Displays the state of the working directory and staging area. It shows which changes have been staged, which haven't, and which files aren't being tracked by Git.
- **Example**: 
  ```bash
  git status
  ```

### 7. `git diff`
- **Usage**: `git diff`
- **Description**: Shows the differences between your working directory and the index. This helps you see what changes are staged for commit.
- **Example**: 
  ```bash
  git diff
  ```

### 8. `git rebase`
- **Usage**: `git rebase <branch-name>`
- **Description**: Reapplies commits on top of another base tip. This is useful for maintaining a clean project history.
- **Example**: 
  ```bash
  git rebase main
  ```

### 9. `git remote`
- **Usage**: `git remote -v`
- **Description**: Shows the remote connections to your repository. This helps you manage remote repositories.
- **Example**: 
  ```bash
  git remote -v
  ```

### 10. `git stash`
- **Usage**: `git stash` and `git stash apply`
- **Description**: Temporarily saves changes that are not ready to be committed. This is useful for switching branches without committing changes.
- **Example**: 
  ```bash
  git stash
  git stash apply
  ```

### Creating a New Branch
- **Command**: `git branch <new-branch-name>`
- **Description**: Creates a new branch from the current branch. This is useful for starting new features or fixes without affecting the main codebase.
- **Example**: 
  ```bash
  git branch new-feature
  ```

These commands will help me and you manage our project efficiently, ensuring that both of us can work on different parts of the project simultaneously and integrate our changes smoothly.


