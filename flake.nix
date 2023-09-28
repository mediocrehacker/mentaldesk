{
  description = "Resume";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-22.11;
  };
  
  outputs = { self, nixpkgs }:
    let
     system = "x86_64-linux";
     pkgs = import nixpkgs { inherit system; };
    in  {
    defaultPackage.x86_64-linux =
      pkgs.stdenv.mkDerivation {
        name = "hello";
        src = self;

        buildInputs = [
          (pkgs.texlive.combine {
            # inherit (pkgs.texlive) scheme-basic xetex setspace fontspec
            #                   chktex enumitem xifthen ifmtarg filehook
            #                   upquote tools ms geometry graphics oberdiek
            #                   fancyhdr lastpage xcolor etoolbox unicode-math
            #                   ucharcat sourcesanspro tcolorbox pgf environ
            #                   trimspaces parskip hyperref url euenc
            #                   collection-fontsrecommended ragged2e ;

    inherit (pkgs.texlive) scheme-full babel luatex setspace fontspec
                           chktex enumitem xifthen ifmtarg filehook
                           upquote tools ms geometry graphics oberdiek
                           fancyhdr lastpage xcolor etoolbox unicode-math
                           ucharcat sourcesanspro tcolorbox pgf environ
                           trimspaces parskip hyperref url euenc
                           collection-fontsrecommended ragged2e
                           framed paralist titlesec;
          })
        ];

        # buildPhase = "xelatex -file-line-error -interaction=nonstopmode survey.tex";
        # installPhase = "mkdir -p $out/bin; cp survey.pdf $out/bin";
      };
    };
}
