#!/bin/sh

yourfilenames=`ls ./src/app/content/surveys`

for eachfile in $yourfilenames
do
    echo ./src/app/content/surveys/$eachfile/survey.pdf
    if [ -f ./src/app/content/surveys/$eachfile/survey.pdf ]; then
        pdftoppm -png ./src/app/content/surveys/$eachfile/survey.pdf ./src/app/content/surveys/$eachfile/original
        # convert ./src/app/content/surveys/$eachfile/original-1.png -resize 325x ./src/app/content/surveys/$eachfile/screenshot-1.png
    fi
done
