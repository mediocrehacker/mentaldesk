for file in ./*
do
  # pandoc -t markdown_strict "$file" -o "$file.md" 
  echo "$file"
done
