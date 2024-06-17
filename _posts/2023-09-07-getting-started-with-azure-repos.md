---
title: "Getting Started with Azure Repos"
date: 2023-09-07T12:00:00Z
image: /images/post/azuredevops.png
categories: 
    - devops
    - azure
    - repos
featured: false
draft: true
---

Welcome to the third post in our Azure DevOps series. Today, we'll be exploring Azure Repos, a cloud-hosted version control system that lets you manage your code securely and collaboratively.

Version control is an essential part of software development. It allows you to track changes to your code, revert to previous versions, and collaborate with other developers. Without version control, you risk losing your work, creating conflicts, and wasting time.

Azure Repos supports two types of version control systems: Git and Team Foundation Version Control (TFVC). Git is a distributed version control system that lets you work offline and sync your changes with a remote repository. TFVC is a centralized version control system that requires you to connect to a server to access your code.

In this post, we'll focus on Git, as it's the most popular and widely used version control system today. We'll cover the basics of Git, how to create a repository in Azure Repos, how to clone it to your local machine, how to commit and push changes to Azure Repos, and how to work with pull requests.

By the end of this post, you'll have a solid understanding of how to use Azure Repos with Git and how to collaborate with other developers on your code. Let's get started!

## Introduction to Version Control Systems

In the world of software development, Version Control Systems (VCS) are indispensable. They are systems that record changes to a file or set of files over time so that you can recall specific versions later.

There are two types of VCS: Centralized Version Control Systems (CVCS) and Distributed Version Control Systems (DVCS). 

**Centralized Version Control Systems**, like Subversion (SVN) and Perforce, involve a single, central repository of files and changes. Developers get a copy of the files they need to work on, but the history is stored only on a central server. This approach has some downsides: if the central server goes down, no one can collaborate or save versioned changes, and if the central database's hard disk gets corrupted and proper backups haven't been kept, you lose absolutely everything - the project's complete history.

On the other hand, **Distributed Version Control Systems**, like Git, Mercurial, and Bazaar, mirror the repository fully on every developer's computer. This means every checkout is a full backup of all the data including history. This offers many advantages such as allowing developers to work offline and enabling multiple workflows that aren't possible in centralized systems.

Among these, Git is currently the most popular DVCS being used today due to its flexibility, performance, security and support for distributed, non-linear workflows.

In this blog post series, we'll be focusing on Git as it is integrated into Azure Repos which is a part of Azure DevOps suite. In the next section, we'll cover some Git basics to get you started.

## Git Basics

Git is a distributed version control system that lets you work on your code locally and sync it with a remote repository. A repository is a collection of files and folders that are tracked by Git. A remote repository is a repository that is hosted on a server, such as Azure Repos. A local repository is a copy of the remote repository that you have on your machine.

To work with Git, you need to understand some basic concepts and commands:

- **Clone**: To clone a repository means to create a local copy of it on your machine. You can clone a repository from Azure Repos using the URL of the repository.
- **Add**: To add a file or folder to Git means to tell Git to start tracking it. You can add files or folders using the `git add` command.
- **Commit**: To commit changes means to save them to your local repository. A commit is a snapshot of your code at a point in time. You can commit changes using the `git commit` command.
- **Push**: To push changes means to upload them from your local repository to the remote repository. You can push changes using the `git push` command.
- **Pull**: To pull changes means to download them from the remote repository to your local repository. You can pull changes using the `git pull` command.
- **Branch**: A branch is a parallel version of your code that you can create and switch to. Branches allow you to work on different features or bug fixes without affecting the main codebase. You can create and switch branches using the `git branch` and `git checkout` commands.
- **Merge**: To merge branches means to combine their changes into one branch. You can merge branches using the `git merge` command.

These are some of the most common Git commands that you'll use in your daily work. There are many more commands and options that you can explore in the [Git documentation](https://git-scm.com/docs).

### Best Practice for Using Git

1. **Use Atomic Commits**: When you do an atomic commit, you're committing only one change. It might be across many files, but it's one single change. Each commit should be able to get built. If any commit is breaking the build, it should be reversible.

2. **Commit Early, Commit Often**: It would be best if you commit your changes early and often. Early commit helps to cut the risk of conflicts between two concurrent changes.

3. **Do Not Commit Generated Files**: You should not commit files that are generated by your build process or other tools.

4. **Use Branches**: One of the features of Git is cheap branching. Pushing code straight to the master branch doesn't promote collaboration. Use branches for features, bug fixes, experiments.

5. **Write Meaningful Commit Messages**: Good commit messages serve at least three important purposes:
    - To speed up the reviewing process.
    - To help write a good release notes.
    - To help the future maintainers of your software (it could be you!), say five years into the future, to find out why a particular change was made to the code or why a specific feature was added.

6. **Use .gitignore**: Always set up a .gitignore file before your initial commit. This will prevent you from adding files and directories that don't belong in your Git repository.

Remember, these are just guidelines and may vary depending on your team's workflow and the project's requirements. The key is to ensure that your use of Git is enhancing your productivity and not becoming a hindrance.

## Azure Repos

Azure Repos is a set of version control tools that help you manage your code. It provides unlimited, cloud-hosted Git repositories for your project, making it easy for you and your team to collaborate.

### Creating a New Repository in Azure Repos

To create a new repository in Azure Repos, follow these steps:

1. Go to the Azure DevOps portal and navigate to your project.
2. Click on **Repos** in the left-hand menu.
3. Click on the **+ New repository** button.
4. Enter a name for your repository, choose Git as the type
5. Optionally, you can choose to add a README file to your repo
6. Optionally, you can choose to add a.gitignore file to your repo
7. When you are satisfied, click **Create**.

### Cloning the Repository to Your Local Machine

Once you've created a repository in Azure Repos, you can clone it to your local machine:

1. In Azure Repos, navigate to the repository you want to clone.
2. Click on the **Clone** button.
3. Copy the clone URL.
4. Open a terminal on your local machine, navigate to the directory where you want to clone the repository, and run `git clone <clone-url>`.

### Committing and Pushing Changes to Azure Repos

After making changes to your code locally, you can commit and push them to Azure Repos:

1. Open a terminal and navigate to your local repository.
2. Run `git add .` to stage all changes.
3. Run `git commit -m "<commit-message>"` to commit the changes.
4. Run `git push` to push the changes to Azure Repos.

Remember, Azure Repos is more than just a place to store your code—it's a tool that enables collaboration, ensures code quality, and integrates seamlessly with other Azure DevOps services. In the next section, we'll discuss how to work with pull requests in Azure Repos.

### Best Practices

Many of the best practices for Git are also the same for Azure Repos. Here are some additional best practices for using Azure Repos.

1. **Never Store Credentials as Code/Config in Azure Repos**: It's important to keep sensitive data like credentials out of your repositories for security reasons.

2. **Tightly Control Access**: Make sure to manage permissions and access control properly to prevent unauthorized access.

3. **Use Pull Requests for Code Review**: The review that takes place in a pull request is critical for improving code quality. Only merge branches through pull requests that pass your review process.

10. **Use Consistent Naming Convention for Your Feature Branches**: Use a consistent naming convention for your feature branches to identify the work done in the branch.

## Working with Pull Requests**

Pull requests are a way of requesting feedback and approval for your code changes before merging them into the main branch. They are also a great tool for code review, collaboration, and quality assurance.

### Creating a Pull Request in Azure Repos

To create a pull request in Azure Repos, follow these steps:

1. In Azure Repos, navigate to the repository where you have pushed your changes.
2. Click on the **Create pull request** button.
3. Select the source branch (the branch with your changes) and the target branch (the branch you want to merge into).
4. Enter a title and a description for your pull request. You can also add reviewers, labels, and work items to link to your pull request.
5. Click **Create**.

### Reviewing and Merging a Pull Request

To review and merge a pull request in Azure Repos, follow these steps:

1. In Azure Repos, navigate to the pull request you want to review.
2. You can see the details of the pull request, such as the title, description, commits, files changed, comments, and status checks.
3. You can leave comments on the pull request or on specific lines of code. You can also suggest changes or approve or reject the pull request.
4. If there are no conflicts or failed checks, you can merge the pull request by clicking on the **Complete** button. You can choose to delete the source branch after merging or keep it for future use.

Remember, working with pull requests is not only a good practice for version control, but also a way to improve your code quality and collaboration skills. In the next section, we'll share some tips and tricks for using Git and Azure Repos more effectively.

## Best Practics

1. **Select the Right Reviewers**: Make sure to select the right reviewers to assign to a pull request. Include reviewers that know how the code works and ask developers working in other areas to share their ideas.

2. **Provide Clear Description of Changes**: Give a clear description of changes. This helps reviewers understand what has been changed and why.

3. **Use Pull Request Templates**: Provide reviewer guidance with pull request templates. This can help standardize the information provided in a pull request and make it easier for reviewers to understand the context.

4. **Quick Replies**: Reply to comments, accepting the suggestion or explaining why the suggested change isn't ideal. For good suggestions outside the scope of the PR, create new work items, branches, and PRs to make those changes.

5. **Use Branch Policies**: Use branch policies to enforce best practices such as requiring pull requests for key branches like main, requiring a successful build, and enforcing required reviewers.

6. **High-Quality Reviews**: High-quality reviews start with high-quality feedback. Here are some keys to great PR feedback:
    - The PR owner should have the right people review the PR, and make sure that reviewers know what the code does.
    - Reviewers should give actionable, constructive feedback.
    - Owners and reviewers should comment and reply quickly.

## Final Thoughts

Congratulations on completing the third post in our Azure DevOps series! Today, we've explored Azure Repos, a powerful tool for managing your code. We've covered the basics of Git, how to create a repository in Azure Repos, how to clone it to your local machine, how to commit and push changes to Azure Repos, and how to work with pull requests.

Remember, Azure Repos is more than just a place to store your code—it's a tool that enables collaboration, ensures code quality, and integrates seamlessly with other Azure DevOps services. By understanding how to use Azure Repos with Git and how to collaborate with other developers on your code, you're well on your way to becoming proficient in Azure DevOps.

In our next post, we'll dive into Azure Pipelines, where we'll learn about continuous integration and continuous delivery (CI/CD). Stay tuned and happy coding!
