#!/bin/sh

search_dir=src/app/content/surveys

yourfilenames=`ls ./src/app/content/surveys`

for eachfile in $yourfilenames
do
    mkdir -p ./public/surveys/$eachfile
    if [ -f ./src/app/content/surveys/$eachfile/survey.tex ]; then
       pdflatex ./src/app/content/surveys/$eachfile/survey.tex -output-directory=./public/surveys/$eachfile
    fi
done

