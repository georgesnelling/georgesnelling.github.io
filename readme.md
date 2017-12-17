George Snelling home page

This site is static with formatting provided by grunt and bootstrap.  It is publised on githup.io under the username georgesnelling.  You will need to be able to signin to github using one of george's private keys.  The last one I remember is /Users/gs/.ssh/gskey16

cd
cd .ssh
ssh-add <gskey16> or any other valid key.


cd
cd src/gs.com
git pull

If this works you have a valid key to connect to git hub.  If not, you need to figure out the key to publish on github.  If you can't publish on github, that's OK.  The following steps will still work.  You just need to publish them some place else.  


To edit the site, go to !gs.com/src and edit the raw html files using your favorite text editor. If you mistakenly edit the files outside the ssrc sub-directory you will be sad. Then

cd ~/gs.com
grunt  -- this will process your source files and provide templating
git add .
git commit -m "what you changed"
git push

if all goes well your new site will be available on georgesnelling.github.io


