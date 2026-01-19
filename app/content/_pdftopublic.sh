#!/bin/sh

yourfilenames=`ls ../`

for eachfile in $yourfilenames
do
    mkdir -p ../../../../../public/surveys/$eachfile
    if [ -f ../$eachfile/survey.tex ]; then
       pdflatex -output-directory=../../../../../public/surveys/$eachfile ../$eachfile/survey.tex 
    fi
done

