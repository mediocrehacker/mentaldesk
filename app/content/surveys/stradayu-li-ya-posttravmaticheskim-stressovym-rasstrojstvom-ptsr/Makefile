build: survey.tex
	pdflatex survey.tex	

.PHONY=watch
watch: 
	@find ./ -name '*.cls'  | entr $(MAKE)
