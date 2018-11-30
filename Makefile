build-page:
	git branch -D gh-pages
	git checkout --orphan gh-pages
	cp examples/* .
	cp -r vendor public
	sed -i.bak 's/\.\.\/vendor/public/g' index.html
	sed -i.bak 's/\.\.\/data/data/g' app.js
	sed -i.bak 's/\.\.\///g' index.html
	rm *.bak
	rm -rf public/leaflet/src
	rm -rf public/leaflet/docs
	git add . -A
	git commit -m 'Building gh-pages branch'
	git push origin gh-pages --force
	rm -rf public
	git checkout master
	git clean -f