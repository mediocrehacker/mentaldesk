build: worksheet.tex
	pdflatex worksheet.tex	

.PHONY=watch
watch: 
	@find ./ \( -name "*cls" -o -name "*tex" \) | entr $(MAKE)
