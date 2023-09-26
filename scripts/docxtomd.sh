#!/bin/sh

for file in *.docx
do
    pancod -s "$file" -t markdown -o "${file}.md"
done

