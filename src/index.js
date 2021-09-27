function main () {
  logseq.provideStyle(`

.dark-theme,
html[data-theme=dark] {  
	--mark-yellow: #fff3a3;
	--mark-pink: #f2b3cf;
	--mark-blue: #b5d3ff;
	--mark-green: #bbfabb;
	--mark-red: #fc4e4e;
	--mark-grey: #cacfd9;
	--mark-orange: #ffb86c;
	--mark-purple: #d2b3ff;

	--mark-text-color: ;
	--mark-thickness: ;
	--mark-decoration: ;
	--mark-border-radius: ;
}

.white-theme,
html[data-theme=light] {
	--mark-yellow: #fff3a3;
	--mark-pink: #f2b3cf;
	--mark-blue: #b5d3ff;
	--mark-green: #bbfabb;
	--mark-red: #fc4e4e;
	--mark-grey: #cacfd9;
	--mark-orange: #ffb86c;
	--mark-purple: #d2b3ff;

	--mark-text-color: ;
	--mark-thickness: ;
	--mark-decoration: ;
	--mark-border-radius: ;
}

      mark.yellow{
	background-color: var(--mark-yellow);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.pink{
	background-color: var(--mark-pink);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.blue{
	background-color: var(--mark-blue);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.green{
	background-color: var(--mark-green);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.red{
	background-color: var(--mark-red);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.grey, mark.gray{
	background-color: var(--mark-grey);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.orange{
	background-color: var(--mark-orange);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}
      mark.purple{
	background-color: var(--mark-purple);
	color: var(--highlight-text-color);
	text-decoration: var(--mark-decoration);
	text-decoration-color: var(--mark-decoration-color);
	text-decoration-thickness:  var(--mark-thickness);
	text-decoration-skip-ink: none;
	border-radius: var(--mark-border-radius);
}

  `)

  logseq.Editor.registerSlashCommand("Yellow Highlighter", [
    ["editor/input", "<mark class='yellow'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Pink Highlighter", [
    ["editor/input", "<mark class='pink'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Blue Highlighter", [
    ["editor/input", "<mark class='blue'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Green Highlighter", [
    ["editor/input", "<mark class='green'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Red Highlighter", [
    ["editor/input", "<mark class='red'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Grey Highlighter", [
    ["editor/input", "<mark class='grey'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Orange Highlighter", [
    ["editor/input", "<mark class='orange'></mark>", {"backward-pos": 7}],
  ])

  logseq.Editor.registerSlashCommand("Purple Highlighter", [
    ["editor/input", "<mark class='purple'></mark>", {"backward-pos": 7}],
  ])

}
 
// bootstrap
logseq.ready(main).catch(console.error)
