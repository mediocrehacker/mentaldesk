\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{worksheet_landscape}[2023/10/01 Worksheet Landscape Latex class]

\LoadClass[12pt, a4paper]{article}

\RequirePackage{tabularx}
\RequirePackage[T2A]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage[english,russian]{babel}
\RequirePackage{paratype}
\RequirePackage{geometry}
\RequirePackage{fancyhdr}
\RequirePackage{color}
\RequirePackage{pbox}
\RequirePackage{array}

\author{Mental Desk}
\renewcommand{\familydefault}{\sfdefault}


\geometry{landscape, lmargin=16pt, rmargin=16pt, bmargin=48pt,
  tmargin=48pt}

\fancyhf{}
\pagestyle{fancy}

\newcommand{\CustomHeader}[1]{\fancyhead[L]{\textbf{#1}}}

\fancyfoot[L]{Предоставлено \textbf{MentalDesk}}
\fancyfoot[R]{\footnotesize{© 2023 MentalDesk.ru}}


% Colors
\definecolor{primary}{RGB}{100, 26, 230}
\definecolor{secondary}{RGB}{217, 38, 169}
\definecolor{accent}{RGB}{31, 178, 166}
\definecolor{neutral}{RGB}{42, 50, 60}
\definecolor{base}{RGB}{29, 35, 42}
\definecolor{info}{RGB}{58, 191, 248}
\definecolor{success}{RGB}{54, 211, 153}
\definecolor{warning}{RGB}{251, 189, 35}
\definecolor{error}{RGB}{248, 114, 114}
