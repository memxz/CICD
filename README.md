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
- 