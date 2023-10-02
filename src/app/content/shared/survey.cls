\ProvidesClass{survey}[2023/09/28 Survey Latex class]
\NeedsTeXFormat{LaTeX2e}

\LoadClass[12pt]{article}

\RequirePackage[T2A]{fontenc}
\RequirePackage[utf8]{inputenc}
\RequirePackage[english,russian]{babel}
\RequirePackage{paratype}
\RequirePackage{geometry}
\RequirePackage{fancyhdr}
\RequirePackage{wasysym}
\RequirePackage{enumitem}
\RequirePackage{color}
\RequirePackage{forloop}
\RequirePackage{ifthen}
\RequirePackage{setspace}
\RequirePackage{pbox}

\author{Mental Desk}

\renewcommand{\familydefault}{\sfdefault}

\geometry{ a4paper, lmargin=32pt, rmargin=32pt, bmargin=48pt, tmargin=48pt}

% Header 
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

% \newcommand{\yesnoticks}[1]{%
% \raisebox{-3.2pt}{\begin{tikzpicture}[every node/.style={inner sep=0,outer sep=0}]
%   \node[anchor=west,style={inner sep=2px}] (FieldYes) at (0cm,0cm) {\ChoiceMenu[radio=true,name=#1,width=\radiosize,height=\radiosize]{}{=Yes}};
%   \node[anchor=west] (LabelYes) at ([xshift=0.7ex]FieldYes.east) {Yes};
%   \node[anchor=west,style={inner sep=2px}] (FieldNo) at ([xshift=1ex]LabelYes.east) {\ChoiceMenu[radio=true,name=#1,width=\radiosize,height=\radiosize]{}{=No}};
%   \node[anchor=west] (LabelNo) at ([xshift=0.7ex]FieldNo.east) {No};
%   \draw [thick] ([xshift=-(\radiosize+0.15cm),yshift=-(\radiosize+0.15cm)]FieldYes.north east) rectangle (FieldYes.north east);
%   \draw [thick] ([xshift=-(\radiosize+0.15cm),yshift=-(\radiosize+0.15cm)]FieldNo.north east) rectangle (FieldNo.north east);
% \end{tikzpicture}}%
% }

\newcommand{\Qq}[1]{#1}
\newcommand{\QO}{$\Circle$}% or: $\ocircle$

\newcounter{qr}
\newcommand{\Qrating}[1]{\QO\forloop{qr}{1}{\value{qr} < #1}{---\QO}}

\newcommand{\Qline}[1]{\noindent\rule{#1}{0.6pt}}

\newcounter{ql}
\newcommand{\Qlines}[1]{\forloop{ql}{0}{\value{ql}<#1}{\vskip0em\Qline{\linewidth}}}

\newenvironment{Qlist}{%
\renewcommand{\labelitemi}{\QO}
\begin{itemize}[leftmargin=.0em,topsep=-.5em]
}{%
\end{itemize}
}

\newenvironment{QTlist}{%
\renewcommand{\labelitemi}{\QO}
\begin{itemize}[leftmargin=.0em,topsep=-.5em]
}{%
\end{itemize}
}


\newlength{\qt}

\newcommand{\Qtab}[2]{
  \setlength{\qt}{\linewidth}
  \addtolength{\qt}{#1}
  \hfill\parbox[t]{\qt}{\raggedright #2}
}

\newcounter{itemnummer}
\newcommand{\Qitem}[2][]{% #1 optional, #2 notwendig
  \ifthenelse{\equal{#1}{}}{\stepcounter{itemnummer}}{}
  \ifthenelse{\equal{#1}{a}}{\stepcounter{itemnummer}}{}
  \begin{enumerate}[topsep=2pt,leftmargin=2em]
  \item[\textbf{\arabic{itemnummer}#1.}] #2
  \end{enumerate}
}

\definecolor{bgodd}{rgb}{0.8,0.8,0.8}
\definecolor{bgeven}{rgb}{0.9,0.9,0.9}
\newcounter{itemoddeven}
\newlength{\gb}
\newcommand{\QItem}[2][]{% #1 optional, #2 notwendig
\setlength{\gb}{\linewidth}
\setlength{\fboxsep}{8pt}
\addtolength{\gb}{-5.25pt}
\ifthenelse{\equal{\value{itemoddeven}}{0}}{%
\noindent\colorbox{bgeven}{\hskip-3pt\begin{minipage}{\gb}\Qitem[#1]{#2}\end{minipage}}%
\stepcounter{itemoddeven}%
}{%
\noindent\colorbox{bgodd}{\hskip-3pt\begin{minipage}{\gb}\Qitem[#1]{#2}\end{minipage}}%
\setcounter{itemoddeven}{0}%
}
}

\newcommand{\yesnoticks}[1]{
  \renewcommand{\labelitemi}{\QO}
  \begin{itemize}[leftmargin=.0em,topsep=-.5em]
  \item[]{\Qtab{5.5cm}{\QO{} Да \hskip.5cm \QO{} Нет}}
  \end{itemize}
}

\newcommand{\yesno}[2]{\QItem{\Qq{#1}\yesnoticks{#2}}}
\newcommand{\yesnoa}[2][]{\QItem[#1]{\Qq{#2}\yesnoticks{#2}}}


\newcommand{\four}[1]{%
\QItem{ 
\Qq{#1}
\vspace{.5\baselineskip}
\begin{Qlist}
\item[]{\Qtab{5.5cm}{\QO{} Никогда \hskip.5cm \QO{} Изредка \hskip.5cm \QO{} Часто \hskip.5cm \QO{} Всегда}}
\end{Qlist}
}%
}
