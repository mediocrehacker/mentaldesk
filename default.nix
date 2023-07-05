{nixpkgs ? <nixpkgs>}: with import nixpkgs {};

stdenv.mkDerivation {
  name = "worksheet";
  src = ./.;

buildInputs = [
  (texlive.combine {
    inherit (texlive) scheme-basic xetex setspace fontspec
                      chktex enumitem xifthen ifmtarg filehook
                      upquote tools ms geometry graphics oberdiek
                      fancyhdr lastpage xcolor etoolbox unicode-math
                      ucharcat sourcesanspro tcolorbox pgf environ
                      trimspaces parskip hyperref url euenc
                      collection-fontsrecommended ragged2e;
  })
];

# buildPhase = ''
#   xelatex -file-line-error -interaction=nonstopmode resume.tex
# '';

# installPhase = ''
#   cp resume.pdf $out
# '';

}
