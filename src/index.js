function main () {
  logseq.provideStyle(`

      mark.yellow{ background-color: #fff3a3;}
      mark.pink{ background-color: #f2b3cf;}
      mark.blue{ background-color: #b5d3ff;}
      mark.green{ background-color: #bbfabb;}
      mark.red{ background-color: #fc4e4e;}
      mark.grey, mark.gray{ background-color: #cacfd9;}
      mark.orange{ background-color: #ffb86c;}
      mark.purple{ background-color: #d2b3ff;}
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