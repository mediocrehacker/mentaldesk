#!/bin/sh

yourfilenames=`ls ./public/surveys`

for eachfile in $yourfilenames
do
    echo ./public/surveys/$eachfile/survey.pdf
    if [ -f ./public/surveys/$eachfile/survey.pdf ]; then
        pdftoppm -png ./public/surveys/$eachfile/survey.pdf ./public/surveys/$eachfile/screenshot
    fi
done
