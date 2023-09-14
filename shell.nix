# by default nix uses channel that can be different form setup to setup
# pin package tree to ensure every machine has the same outcome
## replace commit_sha
## nix-prefetch-url --unpack https://github.com/NixOS/nixpkgs/archive/8440538f883be7606e1c16cf5aa915d9272fde1c.tar.gz
with (import (builtins.fetchTarball {
  name = "nixpkgs-e9315ce137f5c3d17e78eae5596d8690afbd7188";
  url = "https://github.com/NixOS/nixpkgs/archive/e9315ce137f5c3d17e78eae5596d8690afbd7188.tar.gz";
  sha256 = "0yff072x166qpjsacxrii90a15vmyyrw9ll39ksnhjsdhpysdm67";
}) {
  overlays = [
    # (import ./overlay.nix)
  ];
});
let

in with pkgs; mkShell {

  # dependencies
  buildInputs = [
    coreutils # GNU
    bash
    openssl
    nodejs_18
  ];

  PRISMA_SCHEMA_ENGINE_BINARY = "${prisma-engines}/bin/schema-engine";
  PRISMA_QUERY_ENGINE_BINARY = "${prisma-engines}/bin/query-engine";
  PRISMA_QUERY_ENGINE_LIBRARY = "${prisma-engines}/lib/libquery_engine.node";
  PRISMA_FMT_BINARY = "${prisma-engines}/bin/prisma-fmt";
}
