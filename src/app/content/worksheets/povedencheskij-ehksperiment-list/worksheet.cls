\ProvidesClass{worksheet}[2023/11/08 Worksheet Latex class]
\NeedsTeXFormat{LaTeX2e}

\LoadClass[12pt]{scrartcl}

\RequirePackage{tabularx}
\RequirePackage[T2A]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage[english,russian]{babel}
\RequirePackage{paratype}
\RequirePackage{parskip}
\RequirePackage{geometry}
\RequirePackage{color}
\RequirePackage{pbox}
\RequirePackage[dvipsnames]{xcolor}
\RequirePackage{graphicx}
\RequirePackage{calc}
\RequirePackage{framed}
\RequirePackage{background}
\RequirePackage{changepage}
\RequirePackage{tcolorbox}
\RequirePackage{tikz}

\author{Mental Desk}

\renewcommand{\familydefault}{\sfdefault}

\geometry{ a4paper, lmargin=0.6cm, rmargin=0.6cm, bmargin=0.6cm, tmargin=0.7cm}

\backgroundsetup{scale = 1, angle = 0, opacity = 1,
contents = {\includegraphics[width = \paperwidth,
height = \paperheight, keepaspectratio] {background.pdf}}}

\makeatletter
\newcommand{\DrawLine}{%
  \begin{tikzpicture}
  \path[use as bounding box] (0,0) -- (\linewidth,0);
  \draw[color=black!75!black,dashed,dash phase=2pt]
        (0-\kvtcb@leftlower-\kvtcb@boxsep,0)--
        (\linewidth+\kvtcb@rightlower+\kvtcb@boxsep,0);
  \end{tikzpicture}%
  }
\makeatother


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
