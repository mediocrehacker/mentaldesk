{
  description = "Mental Desk";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs =
    { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          buildInputs = [
            pkgs.openssl

            pkgs.nodejs
            pkgs.pnpm
            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server
          ];
        };
      });
    };
}
 
