## CI CD 
### git cmd
- git add
- git commit -m ""
- git push
- git remote add origin git@gihub.com:----/repoName.git
- git remote remove origin
- git rm -r --cached node_modules
> .gitignore 规则不生效

> gitignore只能忽略那些原来没被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的。 解决> 方法就是先把本地缓存删除（改变成未track状态），然后再提交：

> git rm -r --cached node_modules

> git add .

> git commit -m "update .gitignore"

> -r 是为了recursive purpose

- git tag -a -m "first release - use with caution" v0.1-beta
- git push origin v0.1-beta
> git tag    
- git branch <branchName>
- git checkout <branchName>
- git checkout -b <branchName>
- git branch -D <branchName>
- git log --oneline
- git merge feature-1
> merge feature-1 branch to main branch
1. Main as a receiving branch, user need checkout main
2. feature-1 branch will merge into main
- git stash
- git stash save -m "save msg"
  ->• Stash all uncommitted work 
- git stash apply stash{n}
- git stash pop
- git stash drop stash{n}
- git stash list
- git stash clear

