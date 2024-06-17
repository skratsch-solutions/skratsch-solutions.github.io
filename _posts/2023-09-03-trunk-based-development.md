---
title: "Trunk-Based Development - Getting Started"
date: 2023-09-03T10:00:00Z
image: /images/post/trunkbased_treetrunk.png
description: "This article will walk you through Trunk-Based Development, it's history, it's pros and cons, and the basics of how to work with it in your development workflow."
categories:
    - branching
    - trunk
    - beginner
featured: false
draft: false
---

Trunk-Based Development (TBD) is a source-control branching model where developers work on a *single branch* called 'trunk', or 'main'. They integrate their changes as often as possible, **at least once a day** (committing changes *every few hours* is common practice).

This article will walk you through Trunk-Based Development, it's history, it's pros and cons, and the basics of how to work with it in your development workflow.

## A Brief History

TBD is a software development practice that has been around since the advent of version control systems. It was initially used in the 1980s and 1990s, when developers were seeking ways to minimize merge conflicts and streamline the development process.

The concept of TBD became more widely recognized with the rise of distributed version control systems like Git. However, it was already being used in earlier version control systems like Concurrent Versions System (CVS) and Subversion. CVS, created in 1986, was developed to address the limitations of the Revision Control System (RCS). When CVS's own limitations became apparent, the Subversion project was initiated in 2000.

Perforce, another version control system from the 90s, also supported TBD as one of its operational modes. However, it wasn't heavily promoted as a core practice.

In recent years, large tech companies like Google and Facebook have adopted TBD, demonstrating its effectiveness even in large-scale development environments. Despite its long history, TBD continues to be a relevant and efficient model for software development today.

## Pros and Cons of Trunk-Based Development

### Pros

1. **Simplicity**: TBD is straightforward and easy to understand. There's only one long-lived branch to worry about.
2. **Fast Feedback**: Developers get quick feedback on their changes because they're integrated and tested frequently.
3. **Avoids Merge Hell**: Since developers integrate their changes often, the size of merges is small, making them easier to handle.

### Cons

1. **Requires Good Practices**: TBD requires good practices like comprehensive automated testing and feature toggles to manage incomplete features.
2. **Less Isolation**: Changes are integrated frequently, so there's less isolation than in other models.

## Setting Up Trunk-Based Development in Git

Setting up TBD in Git is simple because there's only one long-lived branch. Here's how you can do it:

```bash
# Initialize a new Git repository
git init

# Make some changes and commit them
git add .
git commit -m "Initial commit"
```

## How to Use Trunk-Based Development

Here's a typical workflow in TBD:

```bash
# Update your local 'trunk' branch
git pull origin trunk

# Make some changes and commit them
git add .
git commit -m "Add new feature"

# Push your changes to the remote 'trunk' branch
git push origin trunk
```

## Comparison with Other Branching Strategies

### GitFlow

GitFlow is a popular branching model that uses multiple long-lived branches to manage different stages of the development lifecycle.

#### Pros of GitFlow

1. **Clear Separation**: Each stage of development (development, staging, production) has its own branch.
2. **Support for Hotfixes**: GitFlow has a specific type of branch for hotfixes.

#### Cons Pros of GitFlow

1. **Complexity**: GitFlow is more complex than TBD because it uses multiple long-lived branches.
2. **Slow Feedback**: Changes are integrated less frequently than in TBD.

### GitHub Flow

GitHub Flow is a lightweight branching model where developers create a new branch for each feature or bugfix.

#### Pros of GitHub Flow

1. **Simplicity**: GitHub Flow is simpler than GitFlow but slightly more complex than TBD.
2. **Fast Feedback**: Like TBD, developers integrate their changes often.

#### Cons of GitHub Flow

1. **Requires Good Practices**: Like TBD, GitHub Flow requires good practices like comprehensive automated testing.

## Final Thoughts

Trunk-Based Development is a simple yet powerful branching model that emphasizes continuous integration. While it requires good practices like automated testing and feature toggles, it avoids many of the complexities of other models and provides fast feedback on changes.
